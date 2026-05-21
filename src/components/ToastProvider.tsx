"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ToastType = "success" | "error";

interface Toast {
  id: string;
  title: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (title: string, message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (title: string, message: string, type: ToastType = "success") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[110] flex flex-col gap-4 max-w-sm w-full px-4 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast-slide-in pointer-events-auto bg-[#12181C] border-l-4 ${
              toast.type === "success" ? "border-[#C5A367]" : "border-red-600"
            } text-white p-4 shadow-2xl flex flex-col gap-1 relative overflow-hidden rounded-md border-y border-r border-slate-800`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`material-symbols-outlined mt-0.5 ${
                  toast.type === "success" ? "text-[#C5A367]" : "text-red-500"
                }`}
              >
                {toast.type === "success" ? "check_circle" : "error"}
              </span>
              <div className="flex-grow pr-4">
                <h4 className="font-semibold text-sm text-white">{toast.title}</h4>
                <p className="text-xs text-slate-300 leading-normal mt-0.5">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-slate-400 hover:text-white transition-colors absolute top-2 right-2"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-[#C5A367] toast-progress"></div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
