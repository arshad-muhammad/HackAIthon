"use client";

import React from "react";
import { 
  Award, 
  MapPin, 
  Users, 
  Layers, 
  Cpu, 
  Network, 
  Terminal, 
  CheckCircle, 
  Database,
  GraduationCap
} from "lucide-react";

// ==========================================
// Slide 1: Cover Page (Portrait)
// ==========================================
export function CoverPage() {
  return (
    <div className="w-full h-full bg-[#030207] text-white flex flex-col justify-between p-12 md:p-16 relative overflow-hidden select-none">
      {/* Background glowing decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Top Header Row */}
      <div className="flex justify-between items-start border-b border-white/10 pb-6">
        <div>
          <div className="font-mono text-[11px] tracking-[0.35em] text-red-500 uppercase font-black">
            National-Level AI Hackathon
          </div>
          <div className="font-mono text-[9px] tracking-[0.3em] text-white/45 uppercase mt-1">
            KVGCE Sphere Hive × VRIF VTU Belagavi
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[11px] tracking-[0.2em] text-white/60 uppercase">
            Aug 8–9, 2026
          </div>
        </div>
      </div>

      {/* Main Title Block */}
      <div className="my-auto py-10 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="font-mono text-[10px] tracking-[0.4em] text-white/45 uppercase">
            PRESENTS
          </span>
          <div className="w-16 h-px bg-red-600/50" />
        </div>

        <div className="flex flex-col items-center gap-4 select-none">
          <span className="font-display font-black tracking-[-0.04em] uppercase text-7xl md:text-8xl text-white">
            HACK
          </span>
          <img
            src="/logo-transparent.png"
            alt="AI"
            className="h-[1.5em] w-auto object-contain my-2"
            style={{
              filter: "drop-shadow(0 2px 30px rgba(220,38,38,0.65))",
            }}
          />
          <span className="font-display font-black tracking-[-0.04em] uppercase text-7xl md:text-8xl text-white">
            THON
          </span>
          <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400 text-6xl md:text-7xl mt-1">
            2.0
          </span>
        </div>
        
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-red-600 to-transparent my-8" />
        
        <p className="font-display text-xl md:text-2xl text-white/90 tracking-wide uppercase font-light max-w-lg">
          Beyond Code. <span className="text-red-500 font-bold block mt-1">Into Intelligence.</span>
        </p>
      </div>

      {/* Bottom Info Grid - Portrait Stacked */}
      <div className="border-t border-white/10 pt-8 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card border border-white/5 p-4 rounded-xl">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mb-1">
              Prize Pool
            </div>
            <div className="font-display text-md font-bold text-white uppercase tracking-tight">
              ₹35,000+ Cash Pool
            </div>
            <div className="text-[10px] text-white/45 font-light">
              Plus domains, resources & goods
            </div>
          </div>
          
          <div className="glass-card border border-white/5 p-4 rounded-xl">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mb-1">
              Incubator Venue
            </div>
            <div className="font-display text-md font-bold text-white uppercase tracking-tight">
              VRIF VTU Belagavi
            </div>
            <div className="text-[10px] text-white/45 font-light">
              State-of-the-art incubation lab
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-red-600/[0.02] border border-red-600/20 p-4 rounded-xl">
          <div className="text-left">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-400 mb-0.5 font-bold">
              Registration Open
            </div>
            <div className="text-[12px] text-white/90 font-bold">
              Scan QR to Register Team
            </div>
          </div>
          
          {/* QR Code SVG placeholder */}
          <div className="p-1 bg-white rounded-sm w-12 h-12 flex items-center justify-center shrink-0 shadow-lg shadow-red-600/10">
            <svg viewBox="0 0 29 29" className="w-10 h-10 text-black fill-current">
              <path d="M0 0h9v9H0zm1 1v7h7V1zm8 0h3v1h-3zm5 0h1v1h-1zm2 0h3v3h-3zm1 1h1v1h-1zm-4 1h1v1h-1zm2 0h1v1h-1zm-3 2h1v2h-1zm4 0h1v1h-1zm2 0h3v3h-3zm1 1h1v1h-1zm-5 1h1v1h-1zm2 0h1v1h-1zm1 1h1v1h-1zm-4 1h1v1h-1zm4 1h1v1h-1zm5 0h1v1h-1zm-8 1h3v1h-3zm5 0h1v2h-1zm3 0h1v1h-1zm-8 2h1v1h-1zm2 0h1v1h-1zm3 0h3v1h-3zm-8 1h3v1H0zm20-20h9v9h-9zm1 1v7h7V11zm-21 9h9v9H0zm1 1v7h7V21zm20 0h9v9h-9zm1 1v7h7V22z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// Slide 2: About Hack[AI]Thon 2.0 (Portrait)
// ==========================================
export function AboutPage() {
  return (
    <div className="w-full h-full bg-[#030207] text-white flex flex-col justify-between p-12 md:p-16 relative select-none">
      <div className="flex items-baseline justify-between border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.3em] uppercase text-white/45">
        <span>02 · Event Vision</span>
        <span>About the Proving Ground</span>
      </div>

      <div className="my-auto py-6 space-y-8">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500 font-bold mb-2 block">
            The Proving Ground
          </span>
          <h2 className="font-display font-black text-white tracking-[-0.03em] uppercase text-3xl md:text-4xl mb-4">
            Write your <span className="text-white/35">legacy in data.</span>
          </h2>
          <p className="text-[13px] text-white/80 leading-relaxed font-light mb-3">
            Hack[AI]Thon 2.0 is not a traditional competition. It is a 24-hour national challenge 
            where the brightest minds assemble to tackle a critical bottleneck in modern artificial intelligence: 
            <strong> Data Quality</strong>.
          </p>
          <p className="text-[12px] text-white/55 leading-relaxed font-light">
            Instead of simply wrapping APIs or fine-tuning massive models blindly, builders must focus on 
            <strong> Data-Centric AI</strong>. You will audit datasets, track down hidden bugs, correct labels, 
            and prune outliers using cutting-edge tools. Because a model is only as good as the data it feeds on.
          </p>
        </div>

        {/* Infographics Stacked Vertically */}
        <div className="space-y-4">
          <div className="font-mono text-[9px] tracking-[0.2em] text-white/45 uppercase border-b border-white/10 pb-2">
            Paradigm Shift
          </div>
          
          <div className="glass-card border border-white/10 p-5 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-white/35" />
              <h4 className="font-display text-[11px] tracking-wider uppercase font-bold text-white/60">
                Model-Centric Approach (Traditional)
              </h4>
            </div>
            <div className="font-mono text-[10px] text-white/45 mb-2 leading-relaxed">
              Model (Variable) + Data (Fixed) = Iterative architecture tuning, parameter search, high compute cost.
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-white/20 h-full w-[35%]" />
            </div>
          </div>

          <div className="glass-card border border-red-600/30 p-5 rounded-xl bg-red-600/[0.02] shadow-[0_0_15px_rgba(220,38,38,0.05)]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <h4 className="font-display text-[11px] tracking-wider uppercase font-bold text-red-400">
                  Data-Centric Approach (Hack[AI]Thon)
                </h4>
              </div>
              <span className="font-mono text-[8px] uppercase tracking-wider bg-red-600/20 text-red-300 px-1.5 py-0.5 rounded">
                Optimal
              </span>
            </div>
            <div className="font-mono text-[10px] text-white/80 mb-2 leading-relaxed">
              Model (Fixed) + Data (Variable) = Cleaning labels, auditing edge cases, strategically sampling. High impact, lower cost.
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-red-500 h-full w-[90%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10 pt-5" />
    </div>
  );
}

// ==========================================
// Slide 3: Event Highlights (Portrait)
// ==========================================
export function HighlightsPage() {
  const highlights = [
    { title: "National Competition", desc: "Top-tier builders from universities across India competing on a single arena.", icon: <Network className="w-4 h-4 text-red-400" /> },
    { title: "Data-Centric Focus", desc: "Innovative challenge auditing datasets rather than brute-forcing models.", icon: <Database className="w-4 h-4 text-red-400" /> },
    { title: "₹35,000+ Prize Pool", desc: "Significant cash pool for top performers, plus sponsored tools & goodies.", icon: <Award className="w-4 h-4 text-red-400" /> },
    { title: "Industry Mentorship", desc: "Receive real-time guidance from experienced engineers and AI practitioners.", icon: <Users className="w-4 h-4 text-red-400" /> },
    { title: "Exclusive Goodies", desc: "Free .xyz domains for everyone, custom swags, and developer resources.", icon: <Layers className="w-4 h-4 text-red-400" /> },
    { title: "Credible Certificates", desc: "Official credentials recognizing your accomplishments in advanced AI data engineering.", icon: <CheckCircle className="w-4 h-4 text-red-400" /> }
  ];

  return (
    <div className="w-full h-full bg-[#030207] text-white flex flex-col justify-between p-12 md:p-16 relative select-none">
      <div className="flex items-baseline justify-between border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.3em] uppercase text-white/45">
        <span>03 · Key Value</span>
        <span>Event Highlights</span>
      </div>

      <div className="my-auto py-4 space-y-6">
        <div className="text-center">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500 font-bold mb-1.5 block">
            Why Participate
          </span>
          <h2 className="font-display font-black text-white tracking-[-0.03em] uppercase text-2xl md:text-3xl">
            A Premium <span className="text-white/35">Developer Experience</span>
          </h2>
        </div>

        {/* 2-Column Grid for Portrait */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          {highlights.map((h, i) => (
            <div 
              key={i} 
              className="glass-card border border-white/5 p-5 rounded-xl hover:border-red-600/30 hover:bg-red-600/[0.01] transition-all duration-300 flex flex-col justify-between h-[130px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 rounded-lg bg-red-950/40 border border-red-800/30">
                  {h.icon}
                </div>
                <h4 className="font-display text-[12px] font-black uppercase tracking-tight text-white truncate">
                  {h.title}
                </h4>
              </div>
              <p className="text-[11px] text-white/55 leading-relaxed font-light line-clamp-3">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-white/10 pt-5" />
    </div>
  );
}

// ==========================================
// Slide 4: Competition Structure (Portrait Vertical timeline)
// ==========================================
export function StructurePage() {
  const steps = [
    {
      round: "Round 01",
      mode: "Online Qualifiers",
      date: "Jun 15 — Jul 25, 2026",
      desc: "Download the waste classification screening dataset. Perform a deep audit to find introduced anomalies and submit a 5-slide findings report.",
      detail: "Evaluation based on data diagnostics."
    },
    {
      round: "Selection",
      mode: "Finalists Announced",
      date: "August 1, 2026",
      desc: "Top 16 teams with the most rigorous, evidence-backed dataset audits are selected and invited to the offline grand finale.",
      detail: "Elite cohort announcement."
    },
    {
      round: "Round 02",
      mode: "24-Hour Offline Finale",
      date: "August 8 — 9, 2026",
      desc: "Assemble at VRIF, VTU Belagavi. Use 3LC.ai to prune noise, edit labels, write custom pipeline modifications, and train models in real-time.",
      detail: "Live retraining leaderboard fight."
    }
  ];

  return (
    <div className="w-full h-full bg-[#030207] text-white flex flex-col justify-between p-12 md:p-16 relative select-none">
      <div className="flex items-baseline justify-between border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.3em] uppercase text-white/45">
        <span>04 · Blueprint</span>
        <span>Competition Structure</span>
      </div>

      <div className="my-auto py-4 space-y-6">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500 font-bold mb-1 block">
            The Timeline
          </span>
          <h2 className="font-display font-black text-white tracking-[-0.03em] uppercase text-2xl md:text-3xl">
            Qualify Online. <span className="text-white/35">Fight Offline.</span>
          </h2>
        </div>

        {/* Vertical Timeline Flow for Portrait */}
        <div className="relative pl-8 space-y-6">
          {/* Connector line (vertical) */}
          <div className="absolute top-2 bottom-2 left-[13px] w-px bg-gradient-to-b from-red-600 via-orange-500 to-red-900/40" />
          
          {steps.map((s, idx) => (
            <div key={idx} className="relative flex gap-6">
              {/* Node Indicator */}
              <div className="absolute -left-[27px] w-6 h-6 rounded-full bg-[#0c050a] border border-red-600/80 flex items-center justify-center font-mono text-[9px] text-red-400 font-bold shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                {idx + 1}
              </div>

              {/* Card */}
              <div className="glass-card border border-white/10 p-4 rounded-xl flex-grow hover:border-red-600/20 transition-colors">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-mono text-[9px] tracking-[0.15em] text-white/40 uppercase bg-white/5 px-2 py-0.5 rounded">
                    {s.round}
                  </span>
                  <div className="font-mono text-[9px] text-red-400">{s.date}</div>
                </div>
                <h4 className="font-display text-[13px] font-black uppercase text-white mb-2 tracking-tight">
                  {s.mode}
                </h4>
                <p className="text-[11px] text-white/55 leading-relaxed font-light mb-2">
                  {s.desc}
                </p>
                <div className="border-t border-white/5 pt-1.5 mt-2 font-mono text-[9px] text-white/35 uppercase">
                  // {s.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-white/10 pt-5" />
    </div>
  );
}

// ==========================================
// Slide 5: Data-Centric AI Challenge (Portrait)
// ==========================================
export function ChallengePage() {
  const steps = [
    { num: "01", title: "Analyze Embeddings", desc: "Isolate feature representations to find distribution overlap anomalies." },
    { num: "02", title: "Strategic Labeling", desc: "Identify mislabeled instances and clean ground-truths to clear ambiguity." },
    { num: "03", title: "Edge Case Discovery", desc: "Locate blurry inputs, lighting distortions, and outliers causing high loss." },
    { num: "04", title: "Retrain & Measure", desc: "Retrain baseline models on optimized sets and record precise accuracy lifts." }
  ];

  return (
    <div className="w-full h-full bg-[#030207] text-white flex flex-col justify-between p-12 md:p-16 relative select-none">
      <div className="flex items-baseline justify-between border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.3em] uppercase text-white/45">
        <span>05 · Core Task</span>
        <span>Data-Centric AI Challenge</span>
      </div>

      <div className="my-auto py-4 space-y-6">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500 font-bold mb-2 block">
            Waste Classification Theme
          </span>
          <h2 className="font-display font-black text-white tracking-[-0.03em] uppercase text-2xl md:text-3xl mb-3">
            Optimize the data, <br />
            <span className="text-white/35">not the architecture.</span>
          </h2>
          <p className="text-[12px] text-white/60 leading-relaxed font-light">
            Participants are provided with a garbage classification dataset of 5 classes (plastic, metal, paper, glass, organic) containing hidden labeling errors, severe duplicates, blur bugs, and class imbalances.
          </p>
        </div>

        {/* 3LC Callout */}
        <div className="glass-card border border-red-600/20 p-4 rounded-xl bg-red-950/10">
          <div className="flex items-center gap-2 font-mono text-[9px] text-red-400 mb-1 uppercase font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>3LC.ai Integration</span>
          </div>
          <p className="text-[11px] text-white/80 font-light leading-relaxed">
            Use 3LC to visualize multi-dimensional feature space embeddings, filter training slices with high gradients, edit labels on-the-fly, and measure metrics directly.
          </p>
        </div>

        {/* Optimization steps stacked vertically or in a 2x2 grid */}
        <div className="space-y-3">
          <div className="font-mono text-[9px] tracking-[0.2em] text-white/45 uppercase border-b border-white/10 pb-1">
            Optimization Loop
          </div>

          <div className="grid grid-cols-2 gap-3">
            {steps.map((s, idx) => (
              <div 
                key={idx} 
                className="glass-card border border-white/5 p-4 rounded-xl flex gap-3 items-start"
              >
                <span className="font-mono text-[10px] text-red-500 font-bold bg-white/5 w-6 h-6 rounded flex items-center justify-center shrink-0">
                  {s.num}
                </span>
                <div>
                  <h4 className="font-display text-[11px] font-black uppercase text-white mb-0.5">
                    {s.title}
                  </h4>
                  <p className="text-[10px] text-white/55 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-white/10 pt-5" />
    </div>
  );
}

// ==========================================
// Slide 6: Eligibility & Team Formation (Portrait)
// ==========================================
export function EligibilityPage() {
  return (
    <div className="w-full h-full bg-[#030207] text-white flex flex-col justify-between p-12 md:p-16 relative select-none">
      <div className="flex items-baseline justify-between border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.3em] uppercase text-white/45">
        <span>06 · Registration Rules</span>
        <span>Eligibility & Team Formation</span>
      </div>

      <div className="my-auto py-4 space-y-6">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500 font-bold mb-1.5 block">
            Who Can Compete
          </span>
          <h2 className="font-display font-black text-white tracking-[-0.03em] uppercase text-2xl md:text-3xl">
            Open to all <span className="text-white/35">builders.</span>
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="shrink-0 p-1.5 rounded-lg bg-red-950/40 border border-red-800/30 w-7 h-7 flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5 text-red-400" />
            </div>
            <div>
              <h4 className="font-display text-[12px] font-black uppercase text-white tracking-tight">
                Academic Eligibility
              </h4>
              <p className="text-[11px] text-white/55 leading-relaxed font-light">
                Open to all Undergraduate (UG) and Postgraduate (PG) students currently enrolled in any recognized institution.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="shrink-0 p-1.5 rounded-lg bg-red-950/40 border border-red-800/30 w-7 h-7 flex items-center justify-center">
              <Cpu className="w-3.5 h-3.5 text-red-400" />
            </div>
            <div>
              <h4 className="font-display text-[12px] font-black uppercase text-white tracking-tight">
                No Branch Restrictions
              </h4>
              <p className="text-[11px] text-white/55 leading-relaxed font-light">
                CS, Electrical, Mechanical, Civil—if you can audit and program, you are welcome.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="shrink-0 p-1.5 rounded-lg bg-red-950/40 border border-red-800/30 w-7 h-7 flex items-center justify-center">
              <Network className="w-3.5 h-3.5 text-red-400" />
            </div>
            <div>
              <h4 className="font-display text-[12px] font-black uppercase text-white tracking-tight">
                Inter-College Collaboration
              </h4>
              <p className="text-[11px] text-white/55 leading-relaxed font-light">
                Cross-institute alliances are permitted. Build your dream team with talent from different campuses.
              </p>
            </div>
          </div>
        </div>

        {/* Team size callout */}
        <div className="glass-card border border-white/10 p-6 rounded-2xl relative overflow-hidden bg-gradient-to-br from-white/[0.01] to-transparent text-center">
          <div className="absolute inset-0 bg-grid-white/2 opacity-5 pointer-events-none" />
          
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mb-1 block">
            Team Size Limit
          </span>
          <div className="font-display text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 tracking-tighter mb-1">
            2 – 4
          </div>
          <div className="font-display text-[11px] font-bold uppercase text-white tracking-widest mb-3">
            Members Per Team
          </div>
          <div className="h-px bg-white/10 w-20 mx-auto mb-3" />
          <p className="text-[10px] text-white/55 leading-relaxed max-w-sm mx-auto font-light">
            Individual participation is not allowed. Teams are required to foster collaborative programming and distribution diagnostics.
          </p>
        </div>
      </div>

      <div className="border-b border-white/10 pt-5" />
    </div>
  );
}

// ==========================================
// Slide 7: Judging Criteria (Portrait)
// ==========================================
export function JudgingPage() {
  const criteria = [
    { label: "Issue Detection & Diagnostics", val: 35, desc: "Thoroughness in identifying labeling errors, duplicates, blur bugs, and class imbalance." },
    { label: "Analysis & Data Strategy", val: 25, desc: "Rigor of the findings, reasoning behind dataset modifications, and strategic sampling." },
    { label: "Data-Centric AI Understanding", val: 20, desc: "Effective leverage of data cleaning pipelines and the 3LC toolkit instead of model tweaks." },
    { label: "Proposed Fixes & Lift", val: 15, desc: "Tangible accuracy gains of the baseline model after retraining on your cleaned dataset." },
    { label: "Presentation & Clarity", val: 5, desc: "Structure, visual communication, and brevity of the submitted reports and slide presentations." }
  ];

  return (
    <div className="w-full h-full bg-[#030207] text-white flex flex-col justify-between p-12 md:p-16 relative select-none">
      <div className="flex items-baseline justify-between border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.3em] uppercase text-white/45">
        <span>07 · Scorecard</span>
        <span>Judging Criteria</span>
      </div>

      <div className="my-auto py-4 space-y-6">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500 font-bold mb-1 block">
            Evaluation Metrics
          </span>
          <h2 className="font-display font-black text-white tracking-[-0.03em] uppercase text-2xl md:text-3xl">
            How you are <span className="text-white/35">scored.</span>
          </h2>
        </div>

        {/* Circular Visual Chart and Stats stacked vertically */}
        <div className="flex flex-col items-center justify-center bg-white/[0.01] border border-white/5 p-4 rounded-2xl">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.03)" strokeWidth="4" fill="transparent" />
              <circle cx="50" cy="50" r="45" stroke="#ef4444" strokeWidth="4" fill="transparent" strokeDasharray="282.7" strokeDashoffset="183.7" />
              <circle cx="50" cy="50" r="42" stroke="#f97316" strokeWidth="4" fill="transparent" strokeDasharray="263.8" strokeDashoffset="197.8" className="opacity-75" />
            </svg>
            <div className="text-center z-10">
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/45 block mb-0.5">Total</span>
              <span className="font-display text-3xl font-black text-white leading-none">100</span>
              <span className="font-mono text-[9px] text-red-500 block tracking-widest font-bold">MARKS</span>
            </div>
          </div>
          <div className="mt-3 flex gap-4 text-[8px] font-mono text-white/40 uppercase">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Diagnostics (60%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>Pitch & Fixes (40%)</span>
            </div>
          </div>
        </div>

        {/* Score List */}
        <div className="space-y-3">
          {criteria.map((c, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between items-baseline text-[11px]">
                <span className="font-display font-bold uppercase tracking-tight text-white/90">{c.label}</span>
                <span className="font-mono font-bold text-red-400">{c.val}%</span>
              </div>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-orange-500 h-full" style={{ width: `${c.val}%` }} />
              </div>
              <p className="text-[9px] text-white/45 font-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-white/10 pt-5" />
    </div>
  );
}

// ==========================================
// Slide 8: Venue & Experience (Portrait)
// ==========================================
export function VenuePage() {
  return (
    <div className="w-full h-full bg-[#030207] text-white flex flex-col justify-between p-12 md:p-16 relative select-none">
      <div className="flex items-baseline justify-between border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.3em] uppercase text-white/45">
        <span>08 · Host Venue</span>
        <span>Venue & Experience</span>
      </div>

      <div className="my-auto py-4 space-y-6">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500 font-bold mb-1.5 block">
            The Location
          </span>
          <h2 className="font-display font-black text-white tracking-[-0.03em] uppercase text-2xl md:text-3xl">
            VRIF VTU <span className="text-white/35">Belagavi.</span>
          </h2>
        </div>

        <p className="text-[12px] text-white/75 leading-relaxed font-light">
          Round 2 finalists will gather on-site at the state-of-the-art <strong>Visvesvaraya Research & Innovation Foundation (VRIF)</strong>, located on the VTU campus in Belagavi, Karnataka. Designed to foster deep-tech research, incubation, and emerging technologies.
        </p>

        {/* Blueprint Visual Map (Horizontal strip in Portrait) */}
        <div className="glass-card border border-white/10 rounded-xl overflow-hidden relative h-32 bg-gradient-to-br from-white/[0.01] to-transparent">
          <div className="absolute inset-0 p-3 flex flex-col justify-between">
            <div className="flex justify-between items-start font-mono text-[8px] text-white/40 uppercase">
              <span>[ Incubation Lab Map ]</span>
              <span>VRIF-INC-2026</span>
            </div>
            
            <div className="relative h-12 w-full border border-dashed border-red-500/20 rounded flex items-center justify-center">
              <MapPin className="w-4 h-4 text-red-500 fill-red-950/50 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <span className="font-display text-[9px] font-black uppercase text-white ml-2 tracking-wider">
                VTU Campus, Belagavi
              </span>
            </div>

            <div className="flex items-center justify-between font-mono text-[8px] text-white/40 uppercase">
              <span>15.7958° N, 74.4842° E</span>
              <span>Arena Floor 01</span>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-red-400 mb-0.5">Connectivity</div>
            <p className="text-[10px] text-white/55 leading-relaxed font-light">
              High-speed internet lines provided to ensure fast sample downloads.
            </p>
          </div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-red-400 mb-0.5">Accommodation</div>
            <p className="text-[10px] text-white/55 leading-relaxed font-light">
              Hostel/guest house accommodation support provided on VTU campus.
            </p>
          </div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-red-400 mb-0.5">Incubation</div>
            <p className="text-[10px] text-white/55 leading-relaxed font-light">
              Mentoring, potential seed incubation, and lab access for winning projects.
            </p>
          </div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-red-400 mb-0.5">Fuel & Nutrition</div>
            <p className="text-[10px] text-white/55 leading-relaxed font-light">
              Meals, snacks, and energy drinks served throughout the night.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10 pt-5" />
    </div>
  );
}

// ==========================================
// Slide 9: Showcase (Institutional Showcase) (Portrait Stacked Rows)
// ==========================================
export function SponsorsPage() {
  return (
    <div className="w-full h-full bg-[#030207] text-white flex flex-col justify-between p-12 md:p-16 relative select-none">
      <div className="flex items-baseline justify-between border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.3em] uppercase text-white/45">
        <span>09 · Pillars</span>
        <span>Institutional Showcase & Partners</span>
      </div>

      {/* 3 Stacked Horizontal Cards for Portrait */}
      <div className="space-y-4 my-auto py-2">
        
        {/* Row 1: Sphere Hive */}
        <div className="glass-card border border-white/10 p-4 rounded-xl flex items-center justify-between gap-4 hover:border-red-600/20 transition-all duration-300">
          <div className="max-w-[70%]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[8px] uppercase bg-red-600/10 text-red-400 px-1.5 py-0.5 rounded font-black">
                Organizer
              </span>
              <h4 className="font-display text-[12px] font-black uppercase text-white tracking-tight">
                Sphere Hive
              </h4>
            </div>
            <p className="text-[10px] text-white/55 leading-relaxed font-light">
              Student-led technology and innovation community at KVGCE. We focus on tech incubation, hosting hackathons, and preparing students for deep-tech industry engagement.
            </p>
          </div>
          
          <div className="bg-white/[0.02] p-2 rounded text-center shrink-0 w-24">
            <div className="font-mono text-[8px] text-white/40 uppercase">Hackathons</div>
            <div className="font-display text-[12px] font-bold text-white">4 Flagship</div>
          </div>
        </div>

        {/* Row 2: KVGCE */}
        <div className="glass-card border border-white/10 p-4 rounded-xl flex items-center justify-between gap-4 hover:border-red-600/20 transition-all duration-300">
          <div className="max-w-[70%]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[8px] uppercase bg-red-600/10 text-red-400 px-1.5 py-0.5 rounded font-black">
                Hub Site
              </span>
              <h4 className="font-display text-[12px] font-black uppercase text-white tracking-tight">
                KVG College of Engg.
              </h4>
            </div>
            <p className="text-[10px] text-white/55 leading-relaxed font-light">
              Established engineering institution committed to academic excellence and technical innovation. Empowering students with infrastructure, research opportunities, and an engineering ecosystem.
            </p>
          </div>
          
          <div className="bg-white/[0.02] p-2 rounded text-center shrink-0 w-24">
            <div className="font-mono text-[8px] text-white/40 uppercase">Established</div>
            <div className="font-display text-[12px] font-bold text-white">1986</div>
          </div>
        </div>

        {/* Row 3: VRIF VTU Belagavi */}
        <div className="glass-card border border-red-600/35 p-4 rounded-xl bg-red-600/[0.01] flex items-center justify-between gap-4 hover:border-red-600/50 transition-all duration-300">
          <div className="max-w-[70%]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[8px] uppercase bg-red-600/20 text-red-300 px-1.5 py-0.5 rounded font-black">
                Host / Venue
              </span>
              <h4 className="font-display text-[12px] font-black uppercase text-white tracking-tight">
                VRIF, VTU Belagavi
              </h4>
            </div>
            <p className="text-[10px] text-white/70 leading-relaxed font-light">
              Visvesvaraya Technological University Research & Innovation Foundation. A premier deep-tech incubation facility fostering industry collaborations, startup mentorship, and tech projects.
            </p>
          </div>
          
          <div className="bg-red-950/20 p-2 rounded border border-red-900/10 text-center shrink-0 w-24">
            <div className="font-mono text-[8px] text-red-300 uppercase">Focus</div>
            <div className="font-display text-[12px] font-bold text-white">Deep-Tech</div>
          </div>
        </div>

      </div>

      {/* Mini Partner Logos Strip */}
      <div className="border-t border-white/10 pt-4 flex items-center justify-between">
        <div className="font-mono text-[8px] text-white/35 uppercase tracking-[0.25em]">
          Strategic Partners
        </div>
        <div className="flex items-center gap-6">
          <img
            src="/sponsors/3lc_ai_logo.jpg"
            alt="3LC.ai"
            className="h-6 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 rounded-sm"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <img
            src="/sponsors/unstop-logo.png"
            alt="Unstop"
            className="h-5 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <img
            src="/sponsors/xyz-logo-color.png"
            alt="Gen.xyz"
            className="h-4 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// Slide 10: Registration & Call To Action (Portrait)
// ==========================================
export function RegistrationPage() {
  return (
    <div className="w-full h-full bg-[#030207] text-white flex flex-col justify-between p-12 md:p-16 relative overflow-hidden select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="flex items-baseline justify-between border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.3em] uppercase text-white/45">
        <span>10 · Call to Arms</span>
        <span>Register for Hack[AI]Thon 2.0</span>
      </div>

      {/* Vertical CTA Layout for Portrait */}
      <div className="my-auto py-4 space-y-8 flex flex-col justify-between">
        <div className="space-y-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500 font-bold block">
            Online Qualifiers Open
          </span>
          <h2 className="font-display font-black text-white tracking-[-0.035em] leading-[0.9] uppercase text-4xl sm:text-5xl">
            Beyond Code.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600 font-black">
              Into Intelligence.
            </span>
          </h2>
          <p className="text-[13px] text-white/70 leading-relaxed font-light">
            Are you ready to audit datasets, track outliers, fix label distributions, and claim victory? 
            Join hundreds of developers nationwide in this premium data-centric arena. 
            Register your team today to receive the Round 1 package.
          </p>
        </div>

        {/* QR Code Block in Center */}
        <div className="flex justify-center my-2">
          <div className="glass-card border border-red-600/30 p-5 rounded-2xl bg-red-600/[0.02] shadow-[0_0_30px_rgba(220,38,38,0.07)] text-center w-52 flex flex-col items-center">
            <div className="p-3 bg-white rounded-lg inline-block shadow-lg mb-3">
              <svg viewBox="0 0 29 29" className="w-24 h-24 text-black fill-current">
                <path d="M0 0h9v9H0zm1 1v7h7V1zm8 0h3v1h-3zm5 0h1v1h-1zm2 0h3v3h-3zm1 1h1v1h-1zm-4 1h1v1h-1zm2 0h1v1h-1zm-3 2h1v2h-1zm4 0h1v1h-1zm2 0h3v3h-3zm1 1h1v1h-1zm-5 1h1v1h-1zm2 0h1v1h-1zm1 1h1v1h-1zm-4 1h1v1h-1zm4 1h1v1h-1zm5 0h1v1h-1zm-8 1h3v1h-3zm5 0h1v2h-1zm3 0h1v1h-1zm-8 2h1v1h-1zm2 0h1v1h-1zm3 0h3v1h-3zm-8 1h3v1H0zm20-20h9v9h-9zm1 1v7h7V11zm-21 9h9v9H0zm1 1v7h7V21zm20 0h9v9h-9zm1 1v7h7V22z" />
              </svg>
            </div>
            <div className="font-mono text-[8px] uppercase tracking-wider text-red-400 mb-0.5">
              Secure a Slot
            </div>
            <div className="font-display text-[11px] font-black uppercase text-white">
              Scan to Register
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-white/45 uppercase border-t border-white/10 pt-5 text-center">
          <div>
            <span className="text-white block font-bold">Inquiries</span>
            <span className="text-white/60">support@spherehive.org</span>
          </div>
          <div>
            <span className="text-white block font-bold">Instagram</span>
            <span className="text-white/60">@spherehive</span>
          </div>
          <div>
            <span className="text-white block font-bold">Portal</span>
            <span className="text-white/60">unstop.com</span>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="border-b border-white/10 pt-5" />
    </div>
  );
}

// Main exports mapping for navigation
export const brochureSlides = [
  CoverPage,
  AboutPage,
  HighlightsPage,
  StructurePage,
  ChallengePage,
  EligibilityPage,
  JudgingPage,
  VenuePage,
  SponsorsPage,
  RegistrationPage
];

export const slideTitles = [
  "Cover Page",
  "About Event",
  "Key Highlights",
  "Timeline",
  "Core Challenge",
  "Eligibility",
  "Judging Matrix",
  "Venue Details",
  "Institutional Pillars",
  "Registration"
];
