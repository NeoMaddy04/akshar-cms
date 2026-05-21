"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "./ToastProvider";

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { showToast } = useToast();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      showToast("Invalid Phone", "Please enter a valid 10-digit phone number.", "error");
      return;
    }

    closeModal();
    showToast(
      "Request Submitted",
      `Thank you, ${name}! Er. Uma Maheswari will contact you shortly.`,
      "success"
    );
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div className="relative bg-[#F4F1EA] border border-[#262c31]/20 p-8 md:p-10 rounded-xl shadow-2xl max-w-lg w-full mx-4 text-[#12181C]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-500 hover:text-[#755A25] transition-colors focus:outline-none flex items-center"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <h3 className="font-display-lg text-headline-lg font-bold text-[#12181C] mb-2">
              Request Consultation
            </h3>
            <p className="font-body-md text-slate-600 mb-6 text-sm">
              Discuss your premium residential or interior project directly with Er. Uma Maheswari B.E, M.E.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs text-slate-500 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="border-0 border-b border-slate-300 py-2 focus:ring-0 focus:border-[#755A25] transition-all bg-transparent font-body-md text-[#12181C]"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs text-slate-500 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border-0 border-b border-slate-300 py-2 focus:ring-0 focus:border-[#755A25] transition-all bg-transparent font-body-md text-[#12181C]"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs text-slate-500 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="border-0 border-b border-slate-300 py-2 focus:ring-0 focus:border-[#755A25] transition-all bg-transparent font-body-md text-[#12181C]"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs text-slate-500 uppercase tracking-wider">
                  Project Type
                </label>
                <select
                  name="type"
                  className="border-0 border-b border-slate-300 py-2 focus:ring-0 focus:border-[#755A25] transition-all bg-transparent font-body-md text-[#12181C]"
                >
                  <option>Residential Construction</option>
                  <option>Interior Design</option>
                  <option>Renovation</option>
                  <option>Layout Planning</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#12181C] text-white py-3 mt-4 uppercase font-label-md text-sm hover:bg-[#755A25] transition-colors tracking-widest shadow-md"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
