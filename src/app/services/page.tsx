import React from "react";
import Link from "next/link";
import { getPageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Services() {
  const content = await getPageContent("services");
  return (
    <>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 pt-20">
        <div className="max-w-3xl">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">{content.hero_tagline}</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight whitespace-pre-line">{content.hero_title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed whitespace-pre-line">
            {content.hero_desc}
          </p>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 group overflow-hidden bg-white border border-outline-variant/20 hover:scale-[1.01] transition-transform duration-500 rounded-sm shadow-sm flex flex-col justify-between">
            <div className="relative h-[480px] overflow-hidden">
              <img alt="Residential Construction" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={content.service1_image}/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span className="bg-[#C5A367] text-[#12181c] font-label-md text-xs px-3 py-1 uppercase tracking-widest rounded-sm mb-4 inline-block font-semibold">{content.service1_tagline}</span>
                <h2 className="font-headline-lg text-headline-lg text-white mb-4 leading-tight font-bold">{content.service1_title}</h2>
                <p className="font-body-md text-body-md text-white/80 max-w-lg mb-6 leading-relaxed whitespace-pre-line">
                  {content.service1_desc}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group bg-primary-container p-10 flex flex-col justify-between border border-outline-variant/10 rounded-sm shadow-sm">
            <div>
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-8 block">chair</span>
              <h2 className="font-headline-md text-headline-md text-white font-bold mb-4">{content.service2_title}</h2>
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed whitespace-pre-line">
                {content.service2_desc}
              </p>
            </div>
            <div className="mt-8 overflow-hidden aspect-square rounded-sm border border-white/5">
              <img alt="Interior Design" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={content.service2_image}/>
            </div>
          </div>

          <div className="md:col-span-4 border border-outline-variant/20 bg-white p-8 hover:-translate-y-1 transition-transform group rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="aspect-video mb-6 overflow-hidden rounded-sm border border-slate-100">
                <img alt="Layout Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={content.service3_image}/>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">{content.service3_title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed whitespace-pre-line">
                {content.service3_desc}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 border border-outline-variant/20 bg-white p-8 hover:-translate-y-1 transition-transform group rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="aspect-video mb-6 overflow-hidden rounded-sm border border-slate-100">
                <img alt="Home Renovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={content.service4_image}/>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">{content.service4_title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed whitespace-pre-line">
                {content.service4_desc}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 border border-outline-variant/20 bg-white p-8 hover:-translate-y-1 transition-transform group rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="aspect-video mb-6 overflow-hidden rounded-sm border border-slate-100">
                <img alt="False Ceiling Works" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={content.service5_image}/>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">{content.service5_title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed whitespace-pre-line">
                {content.service5_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 bg-primary py-24 px-margin-mobile text-white">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-display-lg text-display-lg text-white mb-8 leading-tight">Ready to Build Your Legacy?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md uppercase tracking-widest hover:bg-secondary-fixed-dim transition-colors rounded-sm shadow-md">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
