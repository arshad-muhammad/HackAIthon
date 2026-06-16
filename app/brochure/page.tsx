"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { 
  brochureSlides, 
  slideTitles 
} from "./slides";
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Play, 
  Pause, 
  X, 
  Maximize2, 
  Grid,
  FileText,
  Clock
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const BASE_WIDTH = 1000;
const BASE_HEIGHT = 1414;

export default function BrochurePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const totalSlides = brochureSlides.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") {
        setShowOverview(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000); // 6 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Hide global layout elements when page is open
  useEffect(() => {
    document.body.classList.add("brochure-active");
    return () => {
      document.body.classList.remove("brochure-active");
    };
  }, []);

  // Compute slide scaling factor to fit screen
  const handleResize = useCallback(() => {
    if (!containerRef.current) return;
    const parent = containerRef.current;
    const horizontalPadding = 96; // Left & Right arrow bounds
    const verticalPadding = 32;
    const parentWidth = Math.max(parent.clientWidth - horizontalPadding, 280);
    const parentHeight = Math.max(parent.clientHeight - verticalPadding, 200);

    const scaleX = parentWidth / BASE_WIDTH;
    const scaleY = parentHeight / BASE_HEIGHT;
    const newScale = Math.min(scaleX, scaleY);

    setScale(newScale);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Double trigger to ensure sizing settles correctly after initial mounts
    const timeout = setTimeout(handleResize, 100);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, [handleResize]);

  const handlePrint = () => {
    window.print();
  };

  const ActiveSlideComponent = brochureSlides[activeIndex];

  return (
    <>
      {/* Global CSS Injector for print overrides */}
      <style jsx global>{`
        /* Hide print container on screen */
        .print-container {
          display: none;
        }

        @media print {
          /* Hide default headers/footers */
          @page {
            size: A4 portrait;
            margin: 0;
          }
          
          body, html {
            background-color: #030207 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: auto !important;
            height: auto !important;
            overflow: visible !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Hide main app elements */
          header, footer, nav, #__next-prerender-indicator, .scroll-progress {
            display: none !important;
          }
          
          /* Hide screen viewer container */
          .screen-viewer {
            display: none !important;
          }
          
          /* Display only print pages */
          .print-container {
            display: block !important;
            overflow: visible !important;
          }
          
          .print-page {
            display: block !important;
            width: 210mm !important;
            height: 297mm !important;
            page-break-after: always !important;
            break-after: page !important;
            position: relative !important;
            overflow: hidden !important;
          }
        }
      `}</style>

      {/* ================= SCREEN VIEW ================= */}
      <div className="screen-viewer fixed inset-0 bg-[#030207] flex flex-col justify-between overflow-hidden text-white z-[9999] font-sans">
        
        {/* Cinematic Noise Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />

        {/* Top Header Bar */}
        <header className="relative z-10 px-6 py-4 flex items-center justify-between border-b border-white/10 bg-[#030207]/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="p-2 rounded-full hover:bg-white/5 transition-colors border border-white/5 group"
            >
              <X className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
            </Link>
            <div className="h-4 w-px bg-white/10" />
            <div>
              <span className="font-display font-black text-sm uppercase tracking-wider">
                Hack[AI]Thon 2.0
              </span>
              <span className="font-mono text-[10px] text-white/35 uppercase tracking-widest ml-3 hidden sm:inline-block">
                // Official Brochure
              </span>
            </div>
          </div>

          {/* Quick Stats / Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowOverview(!showOverview)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[11px] uppercase tracking-wider font-bold transition-all ${
                showOverview 
                  ? "bg-red-600 border-red-600 text-white" 
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Overview</span>
            </button>

            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-600 text-white border border-red-600 text-[11px] uppercase tracking-wider font-bold hover:bg-red-500 hover:border-red-500 transition-colors shadow-lg shadow-red-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export PDF</span>
            </button>
          </div>
        </header>

        {/* Main Landscape Brochure Container */}
        <main className="flex-grow flex items-center justify-center p-4 relative overflow-hidden" ref={containerRef}>
          
          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-6 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all shadow-xl backdrop-blur-sm hidden md:block"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scaled Slide Box */}
          <div 
            className="relative flex items-center justify-center transition-all duration-200"
            style={{
              width: `${BASE_WIDTH * scale}px`,
              height: `${BASE_HEIGHT * scale}px`,
            }}
          >
            <div 
              className="absolute bg-[#050308] border border-white/10 rounded-xl overflow-hidden"
              style={{
                width: `${BASE_WIDTH}px`,
                height: `${BASE_HEIGHT}px`,
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                left: "50%",
                top: "50%",
                marginLeft: `-${BASE_WIDTH / 2}px`,
                marginTop: `-${BASE_HEIGHT / 2}px`,
                boxShadow: "0 0 60px rgba(0, 0, 0, 0.9), 0 0 1px rgba(255, 255, 255, 0.1) inset"
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <ActiveSlideComponent />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-6 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all shadow-xl backdrop-blur-sm hidden md:block"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </main>

        {/* Footer Navigation Bar */}
        <footer className="relative z-10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 bg-[#030207]/80 backdrop-blur-md gap-4 sm:gap-0">
          
          {/* Autoplay / Playback */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              title={isPlaying ? "Pause Slideshow" : "Start Slideshow"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <div className="flex items-center gap-1 font-mono text-[10px] text-white/35">
              <Clock className="w-3 h-3" />
              <span>{isPlaying ? "Autoplay On (6s)" : "Stopped"}</span>
            </div>
          </div>

          {/* Page Indicators */}
          <div className="flex items-center gap-2">
            {slideTitles.map((title, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPlaying(false);
                }}
                className={`group relative py-1 px-2.5 rounded font-mono text-[10px] transition-all ${
                  index === activeIndex 
                    ? "bg-red-600/10 border border-red-600/50 text-red-400 font-bold" 
                    : "border border-transparent text-white/45 hover:text-white"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
                
                {/* Tooltip on Hover */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#09060f] border border-white/10 text-[9px] uppercase tracking-wider text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                  {title}
                </span>
              </button>
            ))}
          </div>

          {/* Progress Tracking */}
          <div className="font-mono text-[10px] text-white/45 flex items-center gap-2">
            <span>PAGE</span>
            <span className="text-white font-bold">{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="text-white/20">/</span>
            <span>{String(totalSlides).padStart(2, "0")}</span>
          </div>
        </footer>

        {/* Grid Overview Modal */}
        <AnimatePresence>
          {showOverview && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#030207]/95 z-[99999] flex flex-col justify-between p-8 sm:p-12 overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-8">
                  <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider">
                    Brochure Overview
                  </h3>
                  <button 
                    onClick={() => setShowOverview(false)}
                    className="p-2 rounded-full hover:bg-white/5 border border-white/5 transition-colors"
                  >
                    <X className="w-5 h-5 text-white/60" />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {brochureSlides.map((Slide, index) => (
                    <div 
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                        setShowOverview(false);
                      }}
                      className={`group cursor-pointer rounded-lg border overflow-hidden aspect-[1/1.414] bg-[#0c0a12] p-1 transition-all ${
                        index === activeIndex 
                          ? "border-red-500 shadow-lg shadow-red-500/10" 
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="w-full h-full scale-[0.98] rounded overflow-hidden relative origin-center">
                        {/* Scaled down preview rendering */}
                        <div className="absolute inset-0 w-[1000px] h-[1414px] origin-top-left scale-[0.11] pointer-events-none select-none">
                          <Slide />
                        </div>
                        {/* Overlay with number */}
                        <div className="absolute inset-0 bg-black/60 opacity-100 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="text-center">
                            <div className="font-mono text-[10px] text-white/45">PAGE</div>
                            <div className="font-display text-lg font-black text-white">{String(index + 1).padStart(2, "0")}</div>
                            <div className="font-mono text-[8px] text-red-400 uppercase tracking-widest truncate max-w-[90px] mt-1">
                              {slideTitles[index]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4 text-center font-mono text-[9px] text-white/35 uppercase">
                Select any thumbnail to jump directly to that page
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= PRINT CONTAINER ================= */}
      <div className="print-container bg-[#030207]">
        {brochureSlides.map((Slide, index) => (
          <div key={index} className="print-page bg-[#030207] relative overflow-hidden">
            <Slide />
          </div>
        ))}
      </div>
    </>
  );
}
