"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "./ModalProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href.includes("#")) return false; // Ignore hash for active styling
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-outline-variant/10 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-surface-bright"
        }`}
      >
        <nav className="flex justify-between items-center h-20 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              alt="Akshar Construction Logo"
              className="h-12 w-12 object-contain transition-transform duration-500 group-hover:rotate-12"
              src="/logo.png"
            />
            <span className="text-headline-md font-headline-md font-bold text-primary tracking-tight">
              Akshar Construction
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-md text-label-md uppercase tracking-wider pb-1 nav-link-underline transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-primary font-bold nav-link-active"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={openModal}
              className="bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-6 py-3 hover:bg-secondary transition-colors duration-300 shadow-sm rounded-sm"
            >
              Consultation
            </button>
          </div>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden text-primary focus:outline-none flex items-center"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden"
            onClick={() => setIsDrawerOpen(false)}
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-[#F7F9FF] border-l border-outline-variant/10 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden text-[#12181C]">
            <div>
              <div className="flex justify-between items-center mb-8 border-b border-outline-variant/10 pb-4">
                <span className="font-display-lg text-headline-md font-bold text-[#12181C]">
                  Navigation
                </span>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-on-surface-variant hover:text-secondary focus:outline-none flex items-center"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className={`font-label-md text-label-md uppercase tracking-wider py-2 border-b border-outline-variant/5 transition-colors ${
                      isActive(link.href)
                        ? "text-[#755A25] font-bold pl-2"
                        : "text-[#12181C] hover:text-[#755A25]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-8 border-t border-outline-variant/10 pt-6">
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  openModal();
                }}
                className="w-full bg-[#12181C] text-white py-4 uppercase font-label-md text-sm hover:bg-[#755A25] transition-colors tracking-widest shadow-md"
              >
                Consultation
              </button>
              <p className="text-xs text-on-surface-variant text-center mt-6">
                © 2026 Akshar Construction
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
