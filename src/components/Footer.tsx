"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "./ModalProvider";

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-[#12181c] border-t border-white/5 text-[#8d9399]">
      <div className="w-full py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <img
              alt="Akshar Construction Logo"
              className="h-10 w-10 object-contain brightness-0 invert opacity-80"
              src="/logo.png"
            />
            <span className="text-headline-md font-headline-md text-secondary-fixed font-bold tracking-tight">
              Akshar
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-primary-container/80 mb-8 leading-relaxed">
            Premium residential building and interior design consultancy based on core engineering values.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 border border-outline-variant/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#C5A367] transition-all rounded-full"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
            <a
              href="mailto:build.akshar@gmail.com"
              className="w-10 h-10 border border-outline-variant/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#C5A367] transition-all rounded-full"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h6 className="font-label-md text-label-md text-white uppercase tracking-widest mb-8 font-semibold">
            Services
          </h6>
          <ul className="space-y-4">
            <li>
              <Link href="/services" className="font-body-md text-body-md text-on-primary-container/80 hover:text-white transition-colors duration-300">
                Residential
              </Link>
            </li>
            <li>
              <Link href="/services" className="font-body-md text-body-md text-on-primary-container/80 hover:text-white transition-colors duration-300">
                Renovation
              </Link>
            </li>
            <li>
              <Link href="/services" className="font-body-md text-body-md text-on-primary-container/80 hover:text-white transition-colors duration-300">
                Interior Design
              </Link>
            </li>
            <li>
              <Link href="/services" className="font-body-md text-body-md text-on-primary-container/80 hover:text-white transition-colors duration-300">
                Layout Planning
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-label-md text-label-md text-white uppercase tracking-widest mb-8 font-semibold">
            Quick Links
          </h6>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="font-body-md text-body-md text-on-primary-container/80 hover:text-white transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="font-body-md text-body-md text-on-primary-container/80 hover:text-white transition-colors duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-body-md text-body-md text-on-primary-container/80 hover:text-white transition-colors duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-body-md text-body-md text-on-primary-container/80 hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-label-md text-label-md text-white uppercase tracking-widest mb-8 font-semibold">
            Consultation
          </h6>
          <p className="font-body-md text-body-md text-on-primary-container/80 mb-6 leading-relaxed">
            Discuss your dream project with Er. Uma Maheswari.
          </p>
          <button
            onClick={openModal}
            className="w-full bg-[#C5A367] text-white font-label-md text-label-md uppercase tracking-wider py-4 hover:bg-[#755A25] transition-all duration-300 focus:outline-none rounded-sm"
          >
            Get in Touch
          </button>
        </div>
      </div>

      <div className="border-t border-white/5 py-8">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="font-body-md text-body-md text-on-primary-container/60">
            © 2026 Akshar Construction. Built by Er. Uma Maheswari.
          </p>
          <p className="font-body-md text-body-md text-on-primary-container/40">
            Premium Residential & Interior Consultancy
          </p>
        </div>
      </div>
    </footer>
  );
}
