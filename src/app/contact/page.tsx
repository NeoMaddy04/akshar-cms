import React from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default function Contact() {
  async function submitInquiry(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const projectType = formData.get("projectType") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !phone) return;

    await prisma.inquiry.create({
      data: { name, email, phone, projectType, message },
    });
    
    // In a real scenario, you could use redirect or return a success state here.
  }

  return (
    <>
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div>
            <span className="text-[#755A25] font-label-md text-label-md uppercase tracking-widest mb-4 block">Get In Touch</span>
            <h1 className="font-display-lg text-display-lg text-primary font-bold mb-6 leading-tight">Let's build your vision into reality.</h1>
            <p className="text-on-surface-variant text-body-lg max-w-xl leading-relaxed">
              Whether you are planning a residential masterpiece or a modern interior renovation, our team led by Er. Uma Maheswari B.E, M.E is ready to provide technical excellence and aesthetic precision.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden bg-surface-container shadow-sm border border-outline-variant/10 rounded-sm">
            <img className="w-full h-full object-cover grayscale-[20%]" alt="A professional architectural firm's workspace with blueprints, a scale model, and high-end drafting tools." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFK8YndLtPWVcPwo9aAAENyySYftJMUKSO1o1L9bQiw4nRuhFJLp1VF6F4y9cLXX_7Cnj9iVl14428BZPJGydmwUIdDYE2p1kBjj4TSfRBLogbdz3hXsR8aB93Rd44b0s3fEmP6vWuc8lJ1DxWC1lKpm7RKEaZeQ7ZqJ6Ox8nZUNiARZ7b5M4GNxoK3cavuuseMoDI9vGBqRD6MuNNR7Avmx0URuPBYDdgFqtoN9wg6ekaTMu03I-Qk-jSxoNa7ANDRgNsdvL8mrY"/>
          </div>
        </div>
      </section>

      <section className="pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-mt-20" id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-outline-variant/20 shadow-sm rounded-sm">
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-8">Project Inquiry</h2>
            <form action={submitInquiry} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-xs">Full Name *</label>
                  <input name="name" className="border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-[#755A25] transition-all bg-transparent font-body-md text-on-surface" placeholder="John Doe" type="text" required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-xs">Email Address *</label>
                  <input name="email" className="border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-[#755A25] transition-all bg-transparent font-body-md text-on-surface" placeholder="john@example.com" type="email" required/>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-xs">Phone Number *</label>
                  <input name="phone" className="border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-[#755A25] transition-all bg-transparent font-body-md text-on-surface" placeholder="+91 XXXXX XXXXX" type="tel" required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-xs">Project Type</label>
                  <select name="projectType" className="border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-[#755A25] transition-all bg-transparent font-body-md text-on-surface">
                    <option>Residential Construction</option>
                    <option>Interior Design</option>
                    <option>Renovation</option>
                    <option>Layout Planning</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-xs">Message (Optional)</label>
                <textarea name="message" className="border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-[#755A25] transition-all bg-transparent font-body-md text-on-surface resize-none" placeholder="Tell us about your project..." rows={4}></textarea>
              </div>
              <button className="bg-[#12181c] text-white w-full md:w-max px-12 py-4 uppercase font-label-md text-sm hover:bg-[#755A25] transition-colors tracking-widest shadow-md rounded-sm font-semibold" type="submit">
                Send Inquiry
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-gutter">
            <div className="bg-primary-container text-on-primary-container p-8 flex flex-col justify-between rounded-sm shadow-sm">
              <div>
                <h3 className="font-headline-md text-headline-md text-white font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary-fixed">person</span>
                    <div>
                      <p className="font-label-md text-xs text-secondary-fixed uppercase tracking-wider opacity-85">Principal Engineer</p>
                      <p className="text-body-lg text-white font-semibold">Er. Uma Maheswari B.E, M.E.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary-fixed">call</span>
                    <div>
                      <p className="font-label-md text-xs text-secondary-fixed uppercase tracking-wider opacity-85">Call Us</p>
                      <p className="text-body-lg text-white font-semibold">63740 23568</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary-fixed">mail</span>
                    <div>
                      <p className="font-label-md text-xs text-secondary-fixed uppercase tracking-wider opacity-85">Email</p>
                      <p className="text-body-lg text-white font-semibold underline decoration-secondary">build.akshar@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container border border-outline-variant/20 p-4 aspect-[600/1050] max-h-[350px] overflow-hidden rounded-sm shadow-sm flex items-center justify-center">
              <img alt="Akshar Construction Business Card" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNSh_f226CJU0oYm9RcKU1t4Sip7qHZGKBLy-KFRlDL6rAcDSIkDCsGbHa7GRdTmlx0TSvGetIjOwmAfmfhdWYsUfyhjGcW4-m5kMu_K-rKqB8SaMa90wtQ3S4PWqGHu7TLhoJ2sUsZ4GHNA1WC1-vTqAiTHW4nhF-zwz9b5WrKWonLy6yCqFYnug2PThF9JBiycTuKOYehSW450Au3P7lBqQdeQdAQHLpjstZVfJ5ts2CV7LQrzi_1uQy_dXN74fSTLaCB9hGfZ4"/>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[500px] relative overflow-hidden bg-surface-container">
        <div className="absolute inset-0 grayscale contrast-125 opacity-70">
          <img className="w-full h-full object-cover" alt="Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5snq3kZXsfELw98pcO9SUXeZQtOT-EIVOJIYguIGxBhWqSjulrihldOwH3oGa_mA9C-ooKxQu3NhAvYOe6QI89uJupqWEI-8ZnJJ1TTS6Pgnkwmh3Uu8GnrXKnOWn8juJLzYk2D9Kv7dw0YGRaZk4HASvc6IuuhgtPKZ2_oQMz50nyEVKUJU3CPPhsIMhopLjZUJ1qFj3VvuJuctgDyEFawTB0wXLrbyHmHgeBi60AwwhS9Lzo3Tgf5W_evdUeFK35qOp2mCT9r8"/>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-margin-desktop md:translate-x-0 bg-white p-8 border border-outline-variant/10 shadow-xl max-w-sm rounded-sm">
          <div className="flex items-center gap-2 mb-4 text-[#755A25]">
            <span className="material-symbols-outlined">location_on</span>
            <span className="font-label-md text-label-md uppercase tracking-widest text-xs font-semibold">Our Office</span>
          </div>
          <h4 className="font-headline-md text-headline-md text-primary font-bold mb-2">Akshar Construction</h4>
          <p className="text-on-surface-variant text-body-md mb-6 leading-relaxed">
            Engineering Excellence in Residential & Interior Design. Visit us to discuss your dream project.
          </p>
          <button className="flex items-center gap-2 font-label-md text-label-md text-secondary uppercase tracking-widest group text-xs font-bold focus:outline-none">
            Get Directions
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
          </button>
        </div>
      </section>
    </>
  );
}
