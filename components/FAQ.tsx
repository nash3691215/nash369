"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type QA = { q: string; a: string };

export function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-dark/8 rounded-2xl border border-dark/8 bg-white shadow-card max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <button
            key={item.q}
            className="flex w-full items-start gap-3 px-5 py-4 text-left hover:bg-soft/60 transition-colors"
            onClick={() => setOpen(isOpen ? null : idx)}
            aria-expanded={isOpen}
          >
            <svg
              className={`mt-1 h-4 w-4 shrink-0 text-dark/40 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-semibold text-dark">{item.q}</p>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-sm text-dark/60 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        );
      })}
    </div>
  );
}
