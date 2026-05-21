import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getPageContent } from "@/lib/content";
import ProjectGrid from "@/components/ProjectGrid";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getPageContent("home");

  const dbProjects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Default projects if database is empty
  const initialProjects = dbProjects.length > 0 ? dbProjects : [
    {
      id: "1",
      title: "The Serene Villa, OMR",
      category: "New Build",
      description: "Architecture & Construction",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdnGjI5Q_6F-VbpWRyc_VzpZBs6jvt5G3Ld6TZLHdF2GOUqCBj3s1Nxrz692YP9qyq4pQtPcm54x9_uDBVgXL7at1GrhdjXx0W7tTuJz_zgXskkqGVmteTL58SY3_0bQVwASa-0bwnQpzB6K23rkqW9ha5inFmPtvYCKqufVIPWRS66L2lgcX2hAf3-EdtfJILIfXaaPlo1yILbfRO6EH-em0t5_6Eh6uGp4MG0msfd8P9UVIdzMgMumfp3ggd5cUG7qZo_ChhYfc",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "2",
      title: "Modern Penthouse",
      category: "Interior",
      description: "Interior Design & Styling",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuuwrgFckIv_25RDP3iuF6uME1BL7Bw138aF1625xsv5xAjHemzkyQK7y6hBP1aQZgUUfEUfYEC6JwNX4LKwd5JzAbJqPWD0di5hzsAjhcO5IW0yh4KgbEgFIlCC6ZK2wCqniSX3Y58P2SZex8IJdeu30bjAgsZ3gepdNKNCeOb6S3ws6woBjEMZeOiV35khI3ZI0xInbkW8DgetdEX9JvSArBLxV-5JuiMyXeoIDeiyRJeDIzYP9C02eZXUHBHjInpuYqcVRUmq4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "3",
      title: "Heritage Home Revival",
      category: "Renovation",
      description: "Kitchen & Structural Renovation",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoBljHZ6G9GY5iBkm0nkmctpGZm3KXjEtjIRQvZFldJSPwlsrouA2889J7OQFvOp2mbScIEyPJTF9pCEy6baKLAPano9rZSaDedhn2n4USUDs5ceISaiYHnWFD_FJ_qN1MOMW8ZMRCuBbZ9Ml0ahwMS60C_5nf1tqANWEP2vokgFfAB3QC7LNRITxjHl09-tL1P5PDPDu4uK8JXXMdIfhFNwnHlxDeEtHmZQIhbKxPWJpY8omJa1yEu0dPbwo7jHlDS-Enj9i3Oxc",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "4",
      title: "The Stone Edge Project",
      category: "Architecture",
      description: "Exterior Design & Facade Build",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHnTZ-EqBQufGnhpkdnk-rfFsq7VvOWPawEVmnerOP_MkkMH2_UuwnmIqXfMqY9wiewD6ul3W8IqpMAWHNIP8f4Zop5X_f08NPvnoi8y8iD-JgIsiQX8-dtPQxGe2O__vzkKoe-e_HRtyVfPHqC3YmP221b1U3KEyAX2Vr4ZCMjUxjpnhHVOyVc36Movb30hAiw4uV0tHKXPhScu9UsMMSNPfTQqJ9ZR0pgOC3ZGkQctNaUjluONMdSlctrxZoaV_N8al4nGixi2w",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  return (
    <>
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/40 z-10"></div>
          <img
            className="w-full h-full object-cover"
            alt="Hero Background"
            src={content.hero_image}
          />
        </div>
        <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-2xl">
            <span className="inline-block bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md uppercase tracking-widest px-4 py-1 mb-6 rounded-sm">
              {content.hero_tagline}
            </span>
            <h1 className="font-display-lg text-display-lg text-white mb-6 leading-tight whitespace-pre-line">
              {content.hero_title}
            </h1>
            <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-xl whitespace-pre-line">
              {content.hero_subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider px-8 py-4 text-center transition-all hover:bg-[#755A25] shadow-lg rounded-sm"
              >
                Our Recent Projects
              </Link>
              {/* Note: The "Request a Quote" button modal trigger will be moved to a client component if needed, or we use a separate client component wrapper. For now, it's a link to contact. */}
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-label-md text-label-md uppercase tracking-wider px-8 py-4 text-center hover:bg-white hover:text-primary transition-all rounded-sm"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface-bright">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end mb-16">
            <div className="lg:col-span-8">
              <h2 className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em] mb-4">{content.competencies_tagline}</h2>
              <h3 className="font-headline-lg text-headline-lg text-primary md:text-display-lg max-w-3xl leading-tight whitespace-pre-line">
                {content.competencies_title}
              </h3>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="font-body-md text-body-md text-on-surface-variant italic whitespace-pre-line">
                {content.competencies_quote}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group relative bg-white p-8 border border-outline-variant/10 transition-all hover:border-[#755A25] duration-500 rounded-sm hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-surface-container text-secondary group-hover:bg-secondary-fixed transition-colors duration-500 rounded-sm">
                  <span className="material-symbols-outlined text-4xl">domain</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-primary mb-4">{content.service1_title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 whitespace-pre-line">
                  {content.service1_desc}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[#755A25] scale-75">check_circle</span> New Build
                  </li>
                  <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[#755A25] scale-75">check_circle</span> Structural Audits
                  </li>
                </ul>
              </div>
              <Link href="/services" className="text-[#755A25] font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>

            <div className="group relative bg-white p-8 border border-outline-variant/10 transition-all hover:border-[#755A25] duration-500 rounded-sm hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-surface-container text-secondary group-hover:bg-secondary-fixed transition-colors duration-500 rounded-sm">
                  <span className="material-symbols-outlined text-4xl">architecture</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-primary mb-4">{content.service2_title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 whitespace-pre-line">
                  {content.service2_desc}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[#755A25] scale-75">check_circle</span> Custom Joinery
                  </li>
                  <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[#755A25] scale-75">check_circle</span> Lighting Plans
                  </li>
                </ul>
              </div>
              <Link href="/services" className="text-[#755A25] font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>

            <div className="group relative bg-white p-8 border border-outline-variant/10 transition-all hover:border-[#755A25] duration-500 rounded-sm hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-surface-container text-secondary group-hover:bg-secondary-fixed transition-colors duration-500 rounded-sm">
                  <span className="material-symbols-outlined text-4xl">construction</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-primary mb-4">{content.service3_title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 whitespace-pre-line">
                  {content.service3_desc}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[#755A25] scale-75">check_circle</span> Additions
                  </li>
                  <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[#755A25] scale-75">check_circle</span> Facade Updates
                  </li>
                </ul>
              </div>
              <Link href="/services" className="text-[#755A25] font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white overflow-hidden scroll-mt-20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16 gap-6">
            <div>
              <span className="font-label-md text-label-md text-[#755A25] uppercase tracking-[0.2em] mb-3 block">{content.portfolio_tagline}</span>
              <h2 className="font-display-lg text-display-lg text-primary tracking-tight whitespace-pre-line">{content.portfolio_title}</h2>
            </div>
            <p className="text-on-surface-variant font-body-md max-w-md whitespace-pre-line">
              {content.portfolio_desc}
            </p>
          </div>
          
          <ProjectGrid projects={initialProjects} />
          
        </div>
      </section>

      <section className="py-24 bg-primary-container text-on-primary overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.2em] mb-4 block">{content.philosophy_tagline}</span>
              <h2 className="font-display-lg text-display-lg text-white mb-8 leading-tight whitespace-pre-line">
                {content.philosophy_title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container mb-12 whitespace-pre-line">
                {content.philosophy_text}
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-secondary-fixed flex items-center justify-center text-secondary-fixed font-bold">01</div>
                  <div>
                    <h5 className="font-headline-md text-headline-md mb-2 text-white">Planning & Analysis</h5>
                    <p className="text-on-primary-container font-body-md">In-depth site study and structural simulations before the first brick is laid.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-secondary-fixed flex items-center justify-center text-secondary-fixed font-bold">02</div>
                  <div>
                    <h5 className="font-headline-md text-headline-md mb-2 text-white">Precision Execution</h5>
                    <p className="text-on-primary-container font-body-md">On-site management using the latest building technologies and premium materials.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-secondary-fixed flex items-center justify-center text-secondary-fixed font-bold">03</div>
                  <div>
                    <h5 className="font-headline-md text-headline-md mb-2 text-white">Aesthetic Finishes</h5>
                    <p className="text-on-primary-container font-body-md">Interior detailing that bridges the gap between engineering and art.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-secondary/10 absolute -top-10 -right-10 w-full h-full rounded-full blur-3xl"></div>
              <img
                className="relative z-10 w-full h-auto border border-white/10 shadow-2xl rounded-sm"
                alt="Engineering difference"
                src={content.philosophy_image}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
