import React from "react";
import Link from "next/link";
import { getPageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function About() {
  const content = await getPageContent("about");
  return (
    <>
      <section className="relative h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Hero" src={content.hero_image}/>
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-white">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-[#C5A367] block mb-4">{content.hero_tagline}</span>
            <h1 className="font-display-lg text-display-lg font-bold mb-6 leading-tight whitespace-pre-line">{content.hero_title}</h1>
            <div className="w-24 h-1 bg-[#C5A367] mb-8"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-label-md text-label-md text-[#755A25] uppercase tracking-[0.2em] mb-3 block">{content.heritage_tagline}</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 leading-tight whitespace-pre-line">{content.heritage_title}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed whitespace-pre-line">
              {content.heritage_text1}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed whitespace-pre-line">
              {content.heritage_text2}
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden border border-outline/10 rounded-sm">
              <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Details" src={content.heritage_image1}/>
            </div>
            <div className="aspect-[3/4] mt-8 overflow-hidden border border-outline/10 rounded-sm">
              <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Construction" src={content.heritage_image2}/>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] border border-outline/20 relative z-10 overflow-hidden rounded-sm">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Founder" src={content.founder_image}/>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 -z-0 blur-xl"></div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary mb-4 block">{content.founder_tagline}</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-2">{content.founder_name}</h2>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-8">{content.founder_title}</p>
            <div className="space-y-6">
              <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">
                {content.founder_desc}
              </p>
              <div className="pt-6 border-t border-outline/20">
                <div className="flex gap-12">
                  <div>
                    <span className="block font-headline-lg text-headline-lg text-primary font-bold">{content.stat_1_number}</span>
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase text-xs tracking-wider">{content.stat_1_label}</span>
                  </div>
                  <div>
                    <span className="block font-headline-lg text-headline-lg text-primary font-bold">{content.stat_2_number}</span>
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase text-xs tracking-wider">{content.stat_2_label}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-6">Ready to Build Your Legacy?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-primary text-white px-10 py-5 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-colors duration-300 rounded-sm shadow-md">
            Request a Consultation
          </Link>
          <Link href="/services" className="border border-primary text-primary px-10 py-5 font-label-md text-label-md uppercase tracking-widest hover:bg-[#dde3ea] transition-colors duration-300 rounded-sm text-center">
            Our Services
          </Link>
        </div>
      </section>
    </>
  );
}
