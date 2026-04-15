import { Sword } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-samurai-black relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-3 text-samurai-red font-display font-black text-sm tracking-[2px]">
            <img src="/logo.png" alt="HackAIThon Logo" className="h-8 w-auto object-contain" />
            <span>HACK[AI]THON</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.15em] font-semibold text-ink-dim">
            <Link to="/code-of-conduct" className="hover:text-white transition-colors">Code of Conduct</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>

          <div className="text-[11px] text-ink-dim">
            &copy; {new Date().getFullYear()} Hack[AI]thon. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
