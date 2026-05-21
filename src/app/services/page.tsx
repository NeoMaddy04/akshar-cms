import React from "react";
import Link from "next/link";
import { getPageContent } from "@/lib/content";

export default async function Services() {
  const content = await getPageContent("services");
  return (
    <>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 pt-20">
        <div className="max-w-3xl">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">Our Expertise</span>
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
              <img alt="Residential Construction" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdnGjI5Q_6F-VbpWRyc_VzpZBs6jvt5G3Ld6TZLHdF2GOUqCBj3s1Nxrz692YP9qyq4pQtPcm54x9_uDBVgXL7at1GrhdjXx0W7tTuJz_zgXskkqGVmteTL58SY3_0bQVwASa-0bwnQpzB6K23rkqW9ha5inFmPtvYCKqufVIPWRS66L2lgcX2hAf3-EdtfJILIfXaaPlo1yILbfRO6EH-em0t5_6Eh6uGp4MG0msfd8P9UVIdzMgMumfp3ggd5cUG7qZo_ChhYfc"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span className="bg-[#C5A367] text-[#12181c] font-label-md text-xs px-3 py-1 uppercase tracking-widest rounded-sm mb-4 inline-block font-semibold">Flagship Core Service</span>
                <h2 className="font-headline-lg text-headline-lg text-white mb-4 leading-tight font-bold">Residential Construction</h2>
                <p className="font-body-md text-body-md text-white/80 max-w-lg mb-6 leading-relaxed">
                  From foundation to finishing, we deliver premium homes built on a legacy of structural integrity. Our team manages complex builds with engineering rigor and uncompromising quality standards.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group bg-primary-container p-10 flex flex-col justify-between border border-outline-variant/10 rounded-sm shadow-sm">
            <div>
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-8 block">chair</span>
              <h2 className="font-headline-md text-headline-md text-white font-bold mb-4">Interior Design</h2>
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                Crafting bespoke interiors that harmonize form and function. We focus on premium materials and ergonomic layouts.
              </p>
            </div>
            <div className="mt-8 overflow-hidden aspect-square rounded-sm border border-white/5">
              <img alt="Interior Design" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuuwrgFckIv_25RDP3iuF6uME1BL7Bw138aF1625xsv5xAjHemzkyQK7y6hBP1aQZgUUfEUfYEC6JwNX4LKwd5JzAbJqPWD0di5hzsAjhcO5IW0yh4KgbEgFIlCC6ZK2wCqniSX3Y58P2SZex8IJdeu30bjAgsZ3gepdNKNCeOb6S3ws6woBjEMZeOiV35khI3ZI0xInbkW8DgetdEX9JvSArBLxV-5JuiMyXeoIDeiyRJeDIzYP9C02eZXUHBHjInpuYqcVRUmq4"/>
            </div>
          </div>

          <div className="md:col-span-4 border border-outline-variant/20 bg-white p-8 hover:-translate-y-1 transition-transform group rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="aspect-video mb-6 overflow-hidden rounded-sm border border-slate-100">
                <img alt="Layout Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6IBjPZtydtTB80dbjnhVOje_nuQq_eHAVKJRA_bt2tspryU7ijbyF9BgFXfmee5zBXSwy2mHnkDmohw8AxBk7S2GEJfSaT1PkLxEyFZJN4ZDvImi8BcSIwf5k0gX9y-81NmKxeEZyKJ245Es0h95jhSmc1F--MRv3g6MYgCKhpnjvxaKvLimr36k5S6T-yDmrvvGQdDMn48yFUXP-4ne6L1zh9wSjuZTnSCNRuyA1BMA9nfKIDjguhjCwvsQTpwjF9JBoUMo9EGE"/>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">Layout Planning</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Optimized spatial planning that maximizes every square foot. Our layouts are designed for future-proof living.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 border border-outline-variant/20 bg-white p-8 hover:-translate-y-1 transition-transform group rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="aspect-video mb-6 overflow-hidden rounded-sm border border-slate-100">
                <img alt="Home Renovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoBljHZ6G9GY5iBkm0nkmctpGZm3KXjEtjIRQvZFldJSPwlsrouA2889J7OQFvOp2mbScIEyPJTF9pCEy6baKLAPano9rZSaDedhn2n4USUDs5ceISaiYHnWFD_FJ_qN1MOMW8ZMRCuBbZ9Ml0ahwMS60C_5nf1tqANWEP2vokgFfAB3QC7LNRITxjHl09-tL1P5PDPDu4uK8JXXMdIfhFNwnHlxDeEtHmZQIhbKxPWJpY8omJa1yEu0dPbwo7jHlDS-Enj9i3Oxc"/>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">Home Renovation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Revitalize your existing space with structural upgrades and modern finishes with minimal disruption.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 border border-outline-variant/20 bg-white p-8 hover:-translate-y-1 transition-transform group rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="aspect-video mb-6 overflow-hidden rounded-sm border border-slate-100">
                <img alt="False Ceiling Works" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYEQUWdb1yMxFuXqk1HSL8P5P4gEQiW8N6KHnbQ8t-QdNE_Jd_Ge4Bbxs0tNOThWuabdhSAdWa6LhLw17nGNbP-kRbwWf9s5y83GM--l4Faxpmj9EQ0Lzpx4is4lIzMWB9Ca9Fzj0vViTjftFNCPxEFWnlNRvUkvP4sbCDiPz6CMoGEUZX9PrYNxFH2TQIXdD6WTuOo2s9nDgLFyK1IJJoElAaK9mhpaFY7UVlzfM3us1RBNWrspStCm1g8QLz8blMkz_AbqVFJx4"/>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">False Ceiling Works</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Elevate your vertical space with custom lighting and geometric designs combining aesthetics with acoustic performance.
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
