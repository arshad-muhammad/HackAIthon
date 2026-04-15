import { motion } from 'motion/react';
import { Play, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-samurai-black">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlays for readability and aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-samurai-black/80 via-samurai-black/40 to-samurai-black" />
        <div className="absolute inset-0 bg-radial-glow opacity-60" />

        {/* Abstract Calligraphy Strokes (Simulated with CSS shapes/SVG) */}
        <div className="absolute top-[100px] left-[-50px] w-[600px] h-[150px] bg-gradient-to-r from-transparent via-samurai-red to-transparent blur-[60px] -rotate-12 opacity-30 pointer-events-none" />
        <div className="absolute bottom-[100px] right-[-50px] w-[500px] h-[120px] bg-gradient-to-r from-transparent via-samurai-orange to-transparent blur-[50px] rotate-12 opacity-30 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Micro-label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs md:text-sm text-white/60 tracking-[0.2em] uppercase mb-6"
        >
          Sphere Hive, KVGCE <span className="text-samurai-red mx-2">✕</span> Startup Lab, JU Presents
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[56px] sm:text-[72px] md:text-[96px] font-black leading-[0.85] tracking-[-0.02em] mb-6 text-white"
        >
          HACK<span className="text-samurai-red">[AI]</span>THON
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-xl leading-[1.6] text-ink-dim max-w-[600px] mb-10 px-4 md:px-0 font-light"
        >
          A National Level 24-hour innovation event. The battlefield moves to Tamil Nadu — where discipline meets innovation.
        </motion.p>

        {/* Date Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-samurai-red/50"></div>
          <div className="font-mono text-sm md:text-base tracking-[0.2em] text-white">
            MAY 06-07 <span className="text-samurai-red mx-2">//</span> 2026
          </div>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-samurai-red/50"></div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto px-6 sm:px-0"
        >
          <a href="https://unstop.com/p/hackaithon-2026-joy-university-1675805" target="_blank" rel="noopener noreferrer" className="btn-primary block text-center w-full sm:w-auto px-10 py-4 text-[13px] font-bold uppercase tracking-[0.1em] transition-transform hover:scale-105">
            Register Now
          </a>

          <button
            onClick={() => document.getElementById('challenge')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary w-full sm:w-auto px-10 py-4 text-[13px] font-bold uppercase tracking-[0.1em] transition-colors hover:bg-white/5"
          >
            Explore Challenge
          </button>
        </motion.div>

        {/* Samurai Visual / Centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-20 relative w-full flex justify-center"
        >
          <svg className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] text-white opacity-25 grayscale" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
