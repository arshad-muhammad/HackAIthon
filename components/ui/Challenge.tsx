"use client";

import { motion } from "motion/react";
import Link from "next/link";

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Challenge() {
  return (
    <section id="challenge" className="min-h-screen py-28 md:py-36 relative">
      <div className="container mx-auto px-6">
        <div className="cinematic-panel cinematic-panel-left max-w-4xl p-8 md:p-10">
          {/* Header Metadata */}
          <motion.div
            {...fade}
            className="flex items-baseline justify-between border-t border-white/10 pt-5 mb-14 md:mb-20 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45"
          >
            <span>Challenge - 02</span>
            <span className="hidden sm:block">Waste Classification Theme</span>
          </motion.div>

          {/* Headline */}
          <div className="mb-16">
            <motion.span {...fade} className="eyebrow mb-5">
              The Dojo
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display font-black text-white tracking-[-0.035em] leading-[0.92] uppercase text-[44px] sm:text-[68px] md:text-[92px] lg:text-[108px] mb-6"
            >
              Improve the data,
              <br />
              <span className="text-white/35">not the model.</span>
            </motion.h2>
            <motion.p
              {...fade}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-white/55 max-w-2xl font-light leading-relaxed"
            >
              Traditional AI tries to brute-force the algorithm. Data-Centric AI
              unlocks performance by auditing and improving the dataset itself.
            </motion.p>
          </div>

          {/* Grid Layout for Rounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border-t border-white/10 pt-12">
            {/* Round 1 Card */}
            <motion.div
              {...fade}
              transition={{ delay: 0.1 }}
              className="group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="chip">
                    <span className="chip-dot" />
                    Round 01 · Online
                  </span>
                  <span className="text-[10px] font-mono text-white/35">
                    June 15 — July 25, 2026
                  </span>
                </div>

                <h3 className="font-display text-xl font-black text-white tracking-tight uppercase mb-4 group-hover:text-space-purple-glow transition-colors">
                  Data Detective: Finding Hidden Problems
                </h3>

                <p className="text-[13px] text-white/70 leading-relaxed mb-6 font-light">
                  Inspect the provided dataset to spot introduced bugs that
                  degrade classifier accuracy. Work strictly on data quality
                  without touching the baseline model.
                </p>

                {/* Sub-details */}
                <div className="space-y-5 border-t border-white/10 pt-6 mb-6">
                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mb-1">
                      Dataset Provided
                    </h4>
                    <p className="text-[12px] text-white/80 font-light leading-relaxed">
                      500 Labeled + 100 Unlabeled images across 5 classes
                      (Plastic, Paper, Metal, Glass, Organic Waste).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mb-1">
                      Introduced Bugs
                    </h4>
                    <p className="text-[12px] text-white/80 font-light leading-relaxed">
                      Wrong labels, duplicate images, blurry images, class
                      imbalance, and outliers.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mb-1">
                      Round 1 Submission
                    </h4>
                    <p className="text-[12px] text-white/80 font-light leading-relaxed">
                      Max 5-slide PPT or 3-page PDF auditing the dataset
                      (Overview, problems, evidence, fixes, and expected
                      impact).
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <Link
                    href="/resources"
                    className="btn-primary px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] w-full justify-center"
                  >
                    Access Resources & Dataset
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">
                  Selection
                </span>
                <span className="text-[11px] text-white font-bold uppercase tracking-wider">
                  Top 16 Teams Selected
                </span>
              </div>
            </motion.div>

            {/* Round 2 Card */}
            <motion.div
              {...fade}
              transition={{ delay: 0.2 }}
              className="group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="chip">
                    <span className="chip-dot" />
                    Round 02 · Offline
                  </span>
                  <span className="text-[10px] font-mono text-white/35">
                    August 8 — 9, 2026
                  </span>
                </div>

                <h3 className="font-display text-xl font-black text-white tracking-tight uppercase mb-4 group-hover:text-space-purple-glow transition-colors">
                  The 3LC Retraining Arena (Finals)
                </h3>

                <p className="text-[13px] text-white/70 leading-relaxed mb-6 font-light">
                  This is where 3LC.ai comes in. Finalists work entirely online,
                  building data pipelines and using 3LC to systematically
                  identify, analyse, and correct data to maximise model
                  performance.
                </p>

                {/* Sub-details */}
                <div className="space-y-5 border-t border-white/10 pt-6 mb-6">
                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mb-1">
                      Finalists Package
                    </h4>
                    <p className="text-[12px] text-white/80 font-light leading-relaxed">
                      500 Labeled + 5000 Unlabeled images, along with starter
                      notebook (baseline training code & benchmark metrics).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mb-1">
                      Hacking Objective
                    </h4>
                    <p className="text-[12px] text-white/80 font-light leading-relaxed">
                      Analyze embeddings, identify high-loss samples, label
                      strategically, and retrain models to beat the baseline
                      accuracy.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mb-1">
                      3LC Integration
                    </h4>
                    <p className="text-[12px] text-white/80 font-light leading-relaxed">
                      Track per-sample metrics, edit labels, prune bad subsets,
                      and measure the exact accuracy lift after retraining.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">
                  Venue Location
                </span>
                <span className="text-[11px] text-white font-bold uppercase tracking-wider">
                  Online
                </span>
              </div>
            </motion.div>
          </div>

          {/* Process Workflow Steps */}
          <div className="border-t border-white/10">
            <div className="flex items-baseline justify-between py-5 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">
              <span>Final Round Hacking Loop</span>
              <span>04 Step Pipeline</span>
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
              {[
                {
                  n: "01",
                  title: "Analyze Embeddings",
                  d: "Audit features and embeddings to find distribution anomalies.",
                },
                {
                  n: "02",
                  title: "Select Samples",
                  d: "Isolate the most critical and high-loss data points using 3LC.",
                },
                {
                  n: "03",
                  title: "Label Strategically",
                  d: "Incorporate high-quality labels for chosen samples to resolve ambiguities.",
                },
                {
                  n: "04",
                  title: "Retrain & Measure",
                  d: "Retrain the model on the refined dataset and measure the accuracy lift.",
                },
              ].map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className={`group p-7 sm:p-8 transition-colors hover:bg-white/[0.02] ${
                    i < 3
                      ? "border-b lg:border-b-0 lg:border-r border-white/10"
                      : ""
                  }`}
                >
                  <div className="font-mono text-[10px] tracking-[0.3em] text-white/35 mb-6">
                    / {s.n}
                  </div>
                  <div className="font-display text-md font-black text-white tracking-[-0.01em] uppercase mb-2 group-hover:text-space-purple-glow transition-colors">
                    {s.title}
                  </div>
                  <p className="text-[12px] text-white/55 leading-relaxed font-light">
                    {s.d}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
