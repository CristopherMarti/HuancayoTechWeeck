import React, { useState } from 'react';
import { Logo } from './Logo';
import { Home, Calendar, Users, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex items-center justify-between w-full px-6 py-4 bg-white border-b-[6px] border-black shadow-[0_8px_0px_0px_rgba(0,0,0,1)]"
        >
          {/* Logo Container (Left) */}
          <div className="flex-shrink-0">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-12 h-10 bg-black text-white flex items-center justify-center font-black text-xl border-[3px] border-transparent group-hover:bg-[#ff5f56] group-hover:text-black group-hover:border-black transition-colors shadow-[4px_4px_0px_0px_#000]">
                TW
              </div>
              <span className="font-display font-black text-2xl uppercase tracking-tighter text-black hidden sm:block">
                Tech Week
              </span>
            </Link>
          </div>

          {/* Desktop Links (Center/Right) */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className={`px-5 py-2.5 flex items-center gap-2 transition-all duration-300 font-black uppercase tracking-widest text-sm border-[3px] ${isHome ? 'text-black bg-[#74D724] border-black shadow-[4px_4px_0px_0px_#000]' : 'text-black bg-white border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_#000]'}`}>
              <Home size={18} strokeWidth={3} />
              <span>Inicio</span>
            </Link>
            <a href={isHome ? "#tech-week-section" : "/#tech-week-section"} className="px-5 py-2.5 flex items-center gap-2 transition-all duration-300 font-black uppercase tracking-widest text-sm border-[3px] text-black bg-white border-transparent hover:border-black hover:bg-[#a855f7] hover:text-white hover:shadow-[4px_4px_0px_0px_#000]">
              <Calendar size={18} strokeWidth={3} />
              <span className="whitespace-nowrap">Tech Week</span>
            </a>
            <a href={isHome ? "#speakers" : "/#speakers"} className="px-5 py-2.5 flex items-center gap-2 transition-all duration-300 font-black uppercase tracking-widest text-sm border-[3px] text-black bg-white border-transparent hover:border-black hover:bg-[#00bcd4] hover:text-white hover:shadow-[4px_4px_0px_0px_#000]">
              <Users size={18} strokeWidth={3} />
              <span>Ponentes</span>
            </a>
          </div>
          
          <div className="flex md:hidden items-center justify-between">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 bg-black text-white hover:bg-[#ff5f56] hover:text-black transition-colors border-[3px] border-black shadow-[4px_4px_0px_0px_#000]"
            >
              {isMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden pointer-events-auto"
          >
            <div className="bg-white border-[6px] border-black p-4 shadow-[12px_12px_0px_0px_#000] flex flex-col gap-2">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 flex items-center gap-3 border-[3px] border-black transition-colors ${isHome ? 'bg-[#74D724] text-black font-black uppercase tracking-widest' : 'bg-white text-black hover:bg-black hover:text-white font-black uppercase tracking-widest'}`}
              >
                <Home size={20} strokeWidth={3} />
                Inicio
              </Link>
              <a 
                href={isHome ? "#tech-week-section" : "/#tech-week-section"} 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 flex items-center gap-3 border-[3px] border-black bg-white text-black hover:bg-[#a855f7] hover:text-white font-black uppercase tracking-widest transition-colors"
              >
                <Calendar size={20} strokeWidth={3} />
                Tech Week
              </a>
              <a 
                href={isHome ? "#speakers" : "/#speakers"} 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 flex items-center gap-3 border-[3px] border-black bg-white text-black hover:bg-[#00bcd4] hover:text-white font-black uppercase tracking-widest transition-colors"
              >
                <Users size={20} strokeWidth={3} />
                Ponentes
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
