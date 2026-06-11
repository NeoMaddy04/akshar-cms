import React from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import crypto from "crypto";
import PageContentManager from "./PageContentManager";

export const dynamic = "force-dynamic";

async function verifyAuth() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("akshar_admin_session")?.value;
  const expectedToken = crypto.createHmac('sha256', 'akshar_secret_salt_123')
    .update(process.env.ADMIN_PASSWORD || "admin123")
    .digest('hex');

  if (sessionToken !== expectedToken) {
    redirect("/admin/login");
  }
}

export default async function AdminDashboard() {
  await verifyAuth();

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  async function createProject(formData: FormData) {
    "use server";
    await verifyAuth();
    
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;
    const imageUrl = formData.get("imageUrl") as string;

    if (!title || !category || !imageUrl) return;

    await prisma.project.create({
      data: { title, category, description, imageUrl },
    });

    revalidatePath("/");
    revalidatePath("/admin");
    redirect("/admin");
  }

  async function deleteProject(formData: FormData) {
    "use server";
    await verifyAuth();
    
    const id = formData.get("id") as string;
    await prisma.project.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/admin");
    redirect("/admin");
  }

  async function logout() {
    "use server";
    const cookieStore = await cookies();
    cookieStore.delete("akshar_admin_session");
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-surface py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-display-lg font-bold text-primary">Admin Dashboard</h1>
          <form action={logout}>
            <button type="submit" className="bg-slate-100 hover:bg-red-500 hover:text-white border border-outline-variant/30 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">logout</span>
              Logout
            </button>
          </form>
        </div>
        
        <div className="bg-white p-8 border border-outline-variant/20 shadow-sm rounded-sm mb-12">
          <h2 className="text-headline-md font-semibold text-primary mb-6">Add New Project</h2>
          <form action={createProject} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant font-label-md">Project Title</label>
                <input type="text" name="title" required className="border p-2 focus:ring-1 focus:ring-secondary rounded-sm" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant font-label-md">Category</label>
                <select name="category" className="border p-2 focus:ring-1 focus:ring-secondary rounded-sm">
                  <option>New Build</option>
                  <option>Interior</option>
                  <option>Renovation</option>
                  <option>Architecture</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider text-on-surface-variant font-label-md">Image URL</label>
              <input type="url" name="imageUrl" required className="border p-2 focus:ring-1 focus:ring-secondary rounded-sm" placeholder="https://..." />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider text-on-surface-variant font-label-md">Short Description</label>
              <input type="text" name="description" required className="border p-2 focus:ring-1 focus:ring-secondary rounded-sm" />
            </div>
            <button type="submit" className="bg-primary text-white px-6 py-2 uppercase font-label-md tracking-widest text-sm hover:bg-secondary transition-colors rounded-sm">
              Add Project
            </button>
          </form>
        </div>

        <div className="bg-white p-8 border border-outline-variant/20 shadow-sm rounded-sm">
          <h2 className="text-headline-md font-semibold text-primary mb-6">Existing Projects</h2>
          {projects.length === 0 ? (
            <p className="text-on-surface-variant">No projects found. Add one above.</p>
          ) : (
            <div className="space-y-4">
              {projects.map((proj: any) => (
                <div key={proj.id} className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
                  <div className="flex items-center gap-4">
                    <img src={proj.imageUrl} alt={proj.title} className="w-16 h-16 object-cover rounded-sm" />
                    <div>
                      <h4 className="font-semibold text-primary">{proj.title}</h4>
                      <p className="text-xs text-on-surface-variant">{proj.category} - {proj.description}</p>
                    </div>
                  </div>
                  <form action={deleteProject}>
                    <input type="hidden" name="id" value={proj.id} />
                    <button type="submit" className="text-red-500 hover:text-red-700">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </div>

        <PageContentManager />
      </div>
    </div>
  );
}
