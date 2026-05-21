import React from "react";
import Link from "next/link";
import { getPageContent } from "@/lib/content";

export default async function About() {
  const content = await getPageContent("about");
  return (
    <>
      <section className="relative h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Hero" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFJO9tOgntpFtQ0T0KYv0XvbO6GUX-VPi4axu299GofTPtcI0ugfy-dgRy1SfflWu41Up-zcE_okZUICLbvFELkU03qkl307aQZe-CTD6aw2Evj-5R633n4MF5lJhcP8bXOZ18i88fgV-3vYuhRrQQAs1xyMTk64AHzqOgKgcjKFHwTUCF0meMidcIq5lyHgBE8h4WfB2MRj6c8xHK9W61IZyUZAaSTf9LyySoNQZi2TJq0FT1jHYcTeCNrBiuK8f8Qhd9qsHXSto"/>
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-white">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-[#C5A367] block mb-4">Precision in Every Pillar</span>
            <h1 className="font-display-lg text-display-lg font-bold mb-6 leading-tight whitespace-pre-line">{content.hero_title}</h1>
            <div className="w-24 h-1 bg-[#C5A367] mb-8"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-label-md text-label-md text-[#755A25] uppercase tracking-[0.2em] mb-3 block">Our Heritage</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 leading-tight">A Legacy Built on Structural Integrity</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed whitespace-pre-line">
              {content.heritage_text1}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed whitespace-pre-line">
              {content.heritage_text2}
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden border border-outline/10 rounded-sm">
              <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOKl5uVoPmSwLo7Tk_ApHdRaB08IPrnA2SNgbYetSnsehTfAGM1-duKBAnI_5Jpu5YULRK_X-kFs0ftcBZaS6dS0IkeI_9l0thu4NMWCgDvOsrJRZag0kxhESbSVlICPnNurf_mjCYcQ0smwGWKHQ3tDIlbI82-o2zDIKlR3vizDtFYwGI3Uk5_hepHqsT-w7JEhWHz-J207eAUwua13zF_5jRmcC35i2jTyzhJFzmhxiAfSXgwjQhi_637EJxqzNu2smLXoo6YPA"/>
            </div>
            <div className="aspect-[3/4] mt-8 overflow-hidden border border-outline/10 rounded-sm">
              <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Construction" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7dvJWbalhW0oWuiL_IXtRETA0XVc7tmx787OSM_8GCQS-kjPkf-DWRrtybMFkWlD1B2i61VXXEOPoIeFQP1d1O0MTejR-saN0uR9oMOsAFpyfWYnZEYal7cO7GL2eNhWT4Km2mOu4XwEQKnrzutR_kPOFc0CdLbjuEIrMLbjtjmDzO-jM3xFHEglgA4P3f8-wj-OMEvqDmBwZhxw2_BpYyTuCnhEkv5rMbbYpqOdS7ZidGG1evaRtj0qBz9gZ06KZWMAVuIk-dZE"/>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] border border-outline/20 relative z-10 overflow-hidden rounded-sm">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Founder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeWx7EgrHut6moNRScn3xGR0M_Go5HrQLuenlgfmUHcx10XqZOO6HkoWvIBgEJitoumxr3CzgbrvLIpDZytU-cRGr6AI4XxpiROKVo71fjfVa7jpYMPgK1oxB0pggL_1-0dRVo-dkD9oMbXQE7F_-AA84AXTqC5KAsUXODDw8RmDnv4aQ-md6JRho7qGkVwYTZfOmT5-NqKVkZn9osXNs74LhzTrjEJHni-pVVX7bnv1bktUjc7jIp4U0wJRN2_7NAW_NdNr45EKY"/>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 -z-0 blur-xl"></div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary mb-4 block">The Visionary</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-2">{content.founder_name}</h2>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-8">B.E, M.E – Principal Engineer & Founder</p>
            <div className="space-y-6">
              <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">
                {content.founder_desc}
              </p>
              <div className="pt-6 border-t border-outline/20">
                <div className="flex gap-12">
                  <div>
                    <span className="block font-headline-lg text-headline-lg text-primary font-bold">20+</span>
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase text-xs tracking-wider">Years Exp</span>
                  </div>
                  <div>
                    <span className="block font-headline-lg text-headline-lg text-primary font-bold">150+</span>
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase text-xs tracking-wider">Homes Built</span>
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
