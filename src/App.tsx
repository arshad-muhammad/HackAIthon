/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CodeOfConduct from './pages/CodeOfConduct';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-samurai-black text-white font-sans selection:bg-samurai-orange selection:text-white relative flex flex-col">
        {/* Side Rails */}
        <div className="fixed bottom-10 left-10 [writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.3em] uppercase text-white/20 z-50 pointer-events-none hidden lg:block">
          DESIGNED FOR DISCIPLINE
        </div>
        <div className="fixed bottom-10 right-10 [writing-mode:vertical-rl] text-[10px] tracking-[0.3em] uppercase text-white/20 z-50 pointer-events-none hidden lg:block">
          BUILT FOR INNOVATION
        </div>

        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
