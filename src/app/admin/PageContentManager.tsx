import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { DEFAULT_CONTENT } from "@/lib/content";
import { put } from "@vercel/blob";

export default async function PageContentManager() {
  const allPageContent = await prisma.pageContent.findMany();
  const contentMap = new Map();
  allPageContent.forEach(c => contentMap.set(`${c.page}_${c.key}`, c.value));

  async function updateContent(formData: FormData) {
    "use server";
    const page = formData.get("page") as string;
    const key = formData.get("key") as string;
    let value = formData.get("value") as string;
    
    const file = formData.get("file") as File | null;
    if (file && file.size > 0) {
      try {
        const blob = await put(file.name, file, { access: 'public' });
        value = blob.url; // Use the uploaded file's URL instead of the text box
      } catch (e) {
        console.error("Vercel Blob Upload Failed. Ensure BLOB_READ_WRITE_TOKEN is set.", e);
      }
    }

    if (!page || !key || !value) return;

    await prisma.pageContent.upsert({
      where: { page_key: { page, key } },
      update: { value },
      create: { page, key, value }
    });

    revalidatePath("/");
    revalidatePath(`/${page === 'home' ? '' : page}`);
    revalidatePath("/admin");
  }

  return (
    <div className="bg-white p-8 border border-outline-variant/20 shadow-sm rounded-sm mt-12">
      <h2 className="text-headline-md font-semibold text-primary mb-6">Website Content Manager</h2>
      <p className="text-on-surface-variant mb-8 text-sm">Update text across your live website pages.</p>
      
      <div className="space-y-12">
        {Object.entries(DEFAULT_CONTENT).map(([page, keys]) => (
          <div key={page}>
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-[#C5A367] mb-4 border-b border-outline-variant/20 pb-2">
              {page} Page
            </h3>
            <div className="space-y-6">
              {Object.entries(keys).map(([key, defaultVal]) => (
                <form action={updateContent} key={key} className="flex flex-col gap-2">
                  <input type="hidden" name="page" value={page} />
                  <input type="hidden" name="key" value={key} />
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <label className="text-xs font-semibold text-primary w-full md:w-1/4 pt-2 capitalize">
                      {key.replace(/_/g, ' ')}
                    </label>
                    <div className="flex-grow flex flex-col gap-2">
                      <textarea 
                        name="value" 
                        defaultValue={contentMap.get(`${page}_${key}`) || defaultVal}
                        className="border border-outline-variant/30 p-3 focus:outline-none focus:ring-1 focus:ring-secondary rounded-sm min-h-[80px] text-sm text-on-surface-variant w-full"
                      />
                      {key.includes("image") && (
                        <div className="flex items-center gap-2 mt-2 bg-slate-50 p-3 rounded-sm border border-slate-100">
                          <span className="text-xs text-on-surface-variant font-semibold">OR Upload a new file directly:</span>
                          <input type="file" name="file" accept="image/*" className="text-xs text-on-surface-variant file:mr-4 file:py-1.5 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90 file:cursor-pointer cursor-pointer" />
                        </div>
                      )}
                    </div>
                    <button type="submit" className="bg-surface-container hover:bg-primary hover:text-white text-primary border border-outline-variant/20 transition-colors px-6 py-2 md:py-3 rounded-sm text-xs uppercase tracking-wider font-bold shrink-0 self-start mt-2 md:mt-0 shadow-sm">
                      Save
                    </button>
                  </div>
                </form>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
