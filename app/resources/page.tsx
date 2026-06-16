import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, FileText, Award, Layers } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Round 1 Resources · Data Detective Challenge",
  description:
    "Starter kit package, problem statement documents, objectives, and deliverables for the Hack[AI]Thon 2.0 2026 Online Screening Round.",
  alternates: { canonical: "/resources" },
  openGraph: {
    type: "article",
    title: "Round 1 Resources - Hack[AI]Thon 2.0 2026",
    description:
      "Download the screening round starter kit and read the full problem statement details.",
    url: absoluteUrl("/resources"),
    siteName: SITE.name,
    images: [absoluteUrl("/api/og?team=Resources")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Round 1 Resources - Hack[AI]Thon 2.0 2026",
    description:
      "Download the screening round starter kit and read the full problem statement details.",
    images: [absoluteUrl("/api/og?team=Resources")],
  },
};

export default function ResourcesPage() {
  const starterKitUrl =
    "https://drive.google.com/file/d/1Wn_UXHZT-YPrLTPdiYjVS_nFewWI1udj/view?usp=sharing";

  return (
    <article className="relative pt-36 pb-32">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
        ]}
      />
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Top navigation row */}
        <div className="flex items-baseline justify-between border-t border-white/10 pt-5 mb-12 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>
          <span>Resources · Round 1</span>
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-white tracking-[-0.035em] leading-[0.95] uppercase text-[44px] sm:text-[60px] md:text-[76px] mb-12">
          Round 01 Mission
          <br />
          <span className="text-white/35">Resources.</span>
        </h1>

        {/* Introduction */}
        <p className="text-white/85 text-lg leading-[1.7] mb-10 font-light">
          Welcome to the Online Screening Round (Round 1) of Hack[AI]Thon 2.0.
          Below you will find the problem statement criteria, starter kit, and
          deliverables required to qualify for the offline finals.
        </p>

        {/* Dataset Download Card */}
        <div className="glass-card border-gradient rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <div className="text-space-purple-glow font-mono text-[9px] uppercase tracking-[0.25em] font-bold mb-2">
              Starter Kit
            </div>
            <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-tight mb-1">
              Waste Classification Starter Kit
            </h3>
            <p className="text-[12px] text-white/55 font-light max-w-md">
              Contains the dataset, fixed ResNet-18 baseline training pipeline, registration scripts, and setup instructions.
            </p>
          </div>
          <a
            href={starterKitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] shrink-0"
          >
            <Download className="w-4 h-4" />
            Download Starter Kit
          </a>
        </div>

        {/* Problem Statement Details */}
        <section className="mb-12 border-t border-white/10 pt-10">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/45 mb-4">
            01 · Problem Statement
          </div>
          <h2 className="font-display text-2xl font-black text-white uppercase mb-4">
            Data Detective Challenge
          </h2>
          <div className="space-y-5 text-white/75 text-[15px] sm:text-base leading-[1.75] font-light">
            <p>
              Participants are provided with a waste-classification image
              dataset containing hidden data-quality issues. Your mission is to
              analyze the dataset, identify all bugs affecting potential model
              performance, supply evidence, and propose concrete improvements.
            </p>
            <p className="border-l-2 border-space-purple pl-4 italic text-white/60">
              Note: Do not modify any model architectures. Focus entirely on
              data-centric AI strategies to solve the issues.
            </p>
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-12 border-t border-white/10 pt-10">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/45 mb-4">
            02 · Objectives
          </div>
          <ul className="space-y-4 text-white/75 text-[15px] leading-[1.7] font-light">
            {[
              "Audit the waste classification image set to identify incorrect labels.",
              "Search for duplicate images and resolve redundant entries.",
              "Locate low-quality/blurry images and evaluate their impact.",
              "Identify class imbalances and hidden outlier representations.",
              "Document any other data-quality or sampling concerns.",
            ].map((obj, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-space-purple-glow font-mono select-none">
                  [{i + 1}]
                </span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Deliverables */}
        <section className="mb-12 border-t border-white/10 pt-10">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/45 mb-4">
            03 · Submission Deliverables
          </div>
          <div className="space-y-5 text-white/75 text-[15px] sm:text-base leading-[1.75] font-light">
            <p>
              Submissions must be uploaded through{" "}
              <a
                href={SITE.event.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-space-purple-glow hover:underline font-bold"
              >
                Unstop
              </a>{" "}
              under the <strong>Rounds</strong> section. Teams are required to submit the following two files:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                A <strong>PowerPoint Presentation (PPT)</strong> (maximum 5 slides) or a <strong>PDF document</strong> (maximum 3-page) detailing your audit findings and strategy.
              </li>
              <li>
                The generated <strong><code>submission.csv</code></strong> file containing your model predictions on the test set, outputted by the starter kit pipeline.
              </li>
            </ul>
            <p className="mt-4">
              Your PPT/PDF should outline the following sections:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mt-6">
              {[
                { title: "Slide 1", desc: "Dataset Overview" },
                { title: "Slide 2", desc: "Problems Found" },
                { title: "Slide 3", desc: "Evidence / Screenshots" },
                { title: "Slide 4", desc: "Suggested Fixes" },
                { title: "Slide 5", desc: "Expected Impact" },
              ].map((slide, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-xl border border-white/5 text-center"
                >
                  <div className="font-mono text-[10px] text-space-purple-glow uppercase tracking-wider mb-1">
                    {slide.title}
                  </div>
                  <div className="text-[12px] text-white font-medium">
                    {slide.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation Rubric */}
        <section className="mb-16 border-t border-white/10 pt-10">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/45 mb-6">
            04 · Evaluation Rubric
          </div>
          <div className="border border-white/10 rounded-xl overflow-hidden glass-card">
            <div className="border-b border-white/10 py-3 px-5 grid grid-cols-12 gap-4 items-center bg-white/[0.02]">
              <div className="col-span-8 font-mono text-[10px] tracking-wider uppercase text-white">
                Criteria
              </div>
              <div className="col-span-4 font-mono text-[10px] tracking-wider uppercase text-white text-right">
                Marks
              </div>
            </div>

            {[
              [
                "Issue Detection (Wrong Labels, Duplicates, Outliers)",
                "35 Marks",
              ],
              ["Analysis Quality", "25 Marks"],
              ["Data-Centric AI Understanding", "20 Marks"],
              ["Proposed Improvements & Actionable Fixes", "15 Marks"],
              ["Presentation, Formatting & Clarity", "5 Marks"],
            ].map(([criteria, marks], idx) => (
              <div
                key={idx}
                className="border-b border-white/5 py-4 px-5 grid grid-cols-12 gap-4 items-baseline last:border-b-0 hover:bg-white/[0.01] transition-colors"
              >
                <div className="col-span-8 text-[14px] text-white/80 font-light">
                  {criteria}
                </div>
                <div className="col-span-4 text-[14px] text-space-purple-glow font-mono text-right font-bold">
                  {marks}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="font-display text-lg font-black text-white tracking-[-0.01em] uppercase">
              Submit your analysis.
            </div>
            <p className="text-sm text-white/55 mt-1">
              Top 16 Teams qualify for Round 2 Offline Finals.
            </p>
          </div>
          <Link
            href="/register"
            className="btn-primary group h-12 px-7 min-w-[180px] text-[12px] font-bold uppercase tracking-[0.18em]"
          >
            Register Team
          </Link>
        </div>
      </div>
    </article>
  );
}
