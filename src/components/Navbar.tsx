import { motion } from 'motion/react';
import { Menu, X, Sword } from 'lucide-react';
import { useState } from 'react';

const navItems = ['Home', 'About', 'Challenge', 'Schedule', 'Sponsors', 'FAQ'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50"
    >
      <div className="glass-pill rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 text-samurai-red font-display font-black text-sm tracking-[2px]">
          <img src="/logo.png" alt="HackAIThon Logo" className="h-8 w-auto object-contain" />
          <span>HACK[AI]THON</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveTab(item);
                const id = item === 'Schedule' ? 'schedule' : item.toLowerCase();
                if (window.location.pathname === '/') {
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#' + id;
                }
              }}
              className={`text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors duration-200 ${activeTab === item
                ? 'text-white border-b-2 border-samurai-red pb-1'
                : 'text-ink-dim hover:text-white'
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="https://unstop.com/p/hackaithon-2026-joy-university-1675805" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block btn-primary px-8 py-3 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 text-center">
            REGISTER
          </a>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full mt-4 glass-panel rounded-2xl p-4 flex flex-col gap-2 md:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveTab(item);
                setIsOpen(false);
                const id = item === 'Schedule' ? 'schedule' : item.toLowerCase();
                if (window.location.pathname === '/') {
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#' + id;
                }
              }}
              className={`p-3 rounded-xl text-left font-medium ${activeTab === item ? 'bg-white/10 text-white' : 'text-gray-400'
                }`}
            >
              {item}
            </button>
          ))}
          <a href="https://unstop.com/p/hackaithon-2026-joy-university-1675805" target="_blank" rel="noopener noreferrer" className="block text-center w-full mt-2 p-3 btn-primary btn-cut text-white font-display tracking-wider">
            REGISTER NOW
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
