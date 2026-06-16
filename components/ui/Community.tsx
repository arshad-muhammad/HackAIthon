"use client";

import { motion } from "motion/react";
import { MessageSquare, Users, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import MagneticButton from "./MagneticButton";

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Community() {
  return (
    <section id="community" className="min-h-[70vh] flex items-center justify-start py-28 md:py-36 relative">
      <div className="container mx-auto px-6">
        <div className="cinematic-panel cinematic-panel-left max-w-4xl p-8 md:p-10 mr-auto">
          {/* Top metadata row */}
          <motion.div
            {...fade}
            className="flex items-baseline justify-between border-t border-white/10 pt-5 mb-14 md:mb-20 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45"
          >
            <span>Community - 06</span>
            <span className="hidden sm:block">Sphere Hive Network</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            {...fade}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
            className="font-display font-black text-white tracking-[-0.035em] leading-[0.92] uppercase text-[44px] sm:text-[68px] md:text-[92px] lg:text-[108px] mb-12 md:mb-16"
          >
            Join the
            <br />
            <span className="text-white/35">community.</span>
          </motion.h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-white/10 pt-10">
            <motion.div {...fade} className="md:col-span-7">
              <p className="text-[17px] md:text-lg text-white/85 leading-[1.65] mb-5 max-w-xl">
                Team up, brainstorm strategy, and stay updated in real-time. 
                Our official WhatsApp community is the main communication hub for all updates.
              </p>
              <p className="text-[14px] md:text-[15px] text-white/55 leading-[1.7] max-w-xl">
                Get answers to dataset queries, connect with fellow Data Detectives, 
                and receive immediate announcements directly from the organizing committee.
              </p>
            </motion.div>

            <motion.div 
              {...fade} 
              transition={{ delay: 0.1 }}
              className="md:col-span-5 flex flex-col justify-center items-start sm:items-center md:items-end gap-6"
            >
              <div className="flex items-center gap-4 text-white/45 font-mono text-[11px] tracking-wider uppercase mb-2">
                <Users className="w-4 h-4 text-space-purple-glow" />
                <span>Active Network</span>
              </div>

              <MagneticButton
                href={SITE.organisation.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex w-full sm:w-auto text-center px-6 sm:px-10 py-4 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] justify-center items-center gap-3"
                strength={0.25}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current text-white group-hover:scale-110 transition-transform duration-300"
                  aria-hidden
                >
                  <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.78 11.95l-1.05 3.84 3.94-1.03a7.92 7.92 0 003.79.96h.01A7.94 7.94 0 0017.6 6.32zM12.06 18.4h-.01a6.6 6.6 0 01-3.36-.92l-.24-.14-2.34.61.62-2.28-.16-.24a6.6 6.6 0 1111.83-4.04 6.6 6.6 0 01-6.34 7.01zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.45.1-.13.2-.51.65-.62.78-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.52-.99-1.17-1.1-1.36-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34l-.39-.01a.74.74 0 00-.54.25c-.18.2-.7.69-.7 1.67s.72 1.94.82 2.07c.1.13 1.41 2.16 3.42 3.03.48.21.85.33 1.14.43.48.15.91.13 1.26.08.38-.06 1.18-.48 1.35-.95.17-.47.17-.86.12-.95-.05-.08-.18-.13-.38-.23z" />
                </svg>
                Join WhatsApp
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
