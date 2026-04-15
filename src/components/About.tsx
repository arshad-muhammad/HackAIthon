import { motion } from 'motion/react';
import { Target, Zap, Shield, Trophy, Globe, Gift } from 'lucide-react';

const features = [

];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-samurai-red" />
              <span className="text-samurai-red font-display tracking-widest uppercase text-[10px] font-extrabold">The Mission</span>
            </div>

            <h2 className="text-[60px] md:text-[88px] font-black leading-[0.9] uppercase tracking-[-0.04em] mb-8">
              FORGE YOUR <br />
              <span className="text-samurai-red">LEGACY IN CODE</span>
            </h2>

            <p className="text-base leading-[1.6] text-ink-dim max-w-[500px] mb-8">
              Hack[AI]thon is not just a competition; it is a proving ground. We bring together the most disciplined and creative developers to solve real-world problems using cutting-edge AI technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10 max-w-[500px]">
              <div className="glass-panel p-4 border border-white/5 btn-cut">
                <div className="text-samurai-red font-mono text-[10px] uppercase font-bold tracking-[0.1em] mb-1">Date</div>
                <div className="text-white font-display text-sm font-bold tracking-wide">May 6-7, 2026</div>
              </div>
              <div className="glass-panel p-4 border border-white/5 btn-cut">
                <div className="text-samurai-red font-mono text-[10px] uppercase font-bold tracking-[0.1em] mb-1">Duration</div>
                <div className="text-white font-display text-sm font-bold tracking-wide">24 Hours</div>
              </div>
              <div className="glass-panel p-4 border border-white/5 btn-cut col-span-2">
                <div className="text-samurai-red font-mono text-[10px] uppercase font-bold tracking-[0.1em] mb-1">Venue</div>
                <div className="text-white font-display text-sm font-bold tracking-wide">Joy University in Alaganeri, Tamil Nadu</div>
              </div>
              <div className="glass-panel p-4 border border-white/5 btn-cut col-span-2">
                <div className="text-samurai-red font-mono text-[10px] uppercase font-bold tracking-[0.1em] mb-1">Participation</div>
                <div className="text-white font-display text-sm font-bold tracking-wide">Open to students from various colleges</div>
              </div>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-display text-xl font-bold tracking-wide mb-1">{feature.title}</h3>
                    <p className="text-[11px] text-ink-dim leading-[1.4]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content - Prize Pool */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col gap-4 h-full justify-center"
          >
            {/* Main Prize */}
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center overflow-hidden group hover:border-samurai-red/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-samurai-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="text-samurai-red font-mono text-xs uppercase tracking-[0.3em] mb-4">Total Prize Pool</div>
                <div className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 font-display">
                  ₹30<span className="text-samurai-red">K</span>
                </div>
                <div className="text-sm text-ink-dim max-w-[250px] leading-relaxed">
                  Distributed among top performers, innovators, and category winners.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Domain Prize */}
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors group">
                <div className="text-white font-display font-bold text-xl mb-2 group-hover:text-samurai-red transition-colors">.XYZ Domain</div>
                <div className="text-xs text-ink-dim leading-relaxed">Free 1-year domain registration for every single participant.</div>
              </div>

              {/* Goodies */}
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors group">
                <div className="text-white font-display font-bold text-xl mb-2 group-hover:text-samurai-red transition-colors">Exclusive Swag</div>
                <div className="text-xs text-ink-dim leading-relaxed">Premium T-shirts, stickers, and physical goodies for hackers.</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
