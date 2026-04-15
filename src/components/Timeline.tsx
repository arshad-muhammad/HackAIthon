import { motion } from 'motion/react';

const schedule = [
  { time: '09:00 AM', title: 'Opening Ceremony', desc: 'Welcome address and rules briefing.' },
  { time: '10:00 AM', title: 'Hacking Begins', desc: 'Teams assemble and start building.' },
  { time: '02:00 PM', title: 'Mentor Sessions', desc: '1-on-1 guidance from industry experts.' },
  { time: '08:00 PM', title: 'Checkpoint 1', desc: 'Progress review and midnight snacks.' },
  { time: '08:00 AM', title: 'Hacking Ends', desc: 'Final code submission.' },
  { time: '10:00 AM', title: 'Judging & Awards', desc: 'Presentations and closing ceremony.' },
];

export default function Timeline() {
  return (
    <section id="schedule" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">

        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-samurai-red" />
            <span className="text-samurai-red font-display tracking-widest uppercase text-[10px] font-extrabold">The Schedule</span>
            <span className="w-8 h-[1px] bg-samurai-red" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[60px] md:text-[88px] font-black leading-[0.9] uppercase tracking-[-0.04em]"
          >
            PATH OF THE <span className="text-samurai-red">WARRIOR</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Center Node */}
                <div className="absolute left-[28px] md:left-1/2 w-3 h-3 rounded-full bg-samurai-red -translate-x-[5.5px] md:-translate-x-1/2 mt-1.5 md:mt-0 box-glow z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-samurai-red/30 transition-colors group">
                    <div className="text-samurai-red font-mono text-[10px] uppercase font-bold tracking-[0.1em] mb-2">{item.time}</div>
                    <h3 className="text-xl font-display font-bold text-white mb-2 tracking-wide group-hover:text-samurai-red transition-colors">{item.title}</h3>
                    <p className="text-[11px] text-ink-dim leading-[1.4]">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
