import React, { useState } from 'react';
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
              <div 
                style={{ fontFamily: "'Segoe UI', 'Space Grotesk', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                className="w-12 h-10 bg-black text-white flex items-center justify-center text-xl border-[3px] border-transparent group-hover:bg-[#ff5f56] group-hover:text-black group-hover:border-black transition-colors shadow-[4px_4px_0px_0px_#000]"
              >
                TW
              </div>
              
              {/* Logo Texto: T y W en Relidux, ech y eek en Valve */}
              <span className="text-2xl text-black hidden sm:inline-flex items-baseline tracking-tight">
                <span style={{ fontFamily: "Relidux, sans-serif", fontWeight: 400 }}>T</span>
                <span style={{ fontFamily: "Valve, sans-serif", fontWeight: 700 }}>ech</span>
                <span className="ml-1.5" style={{ fontFamily: "Relidux, sans-serif", fontWeight: 400 }}>W</span>
                <span style={{ fontFamily: "Valve, sans-serif", fontWeight: 700 }}>eek</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links (Center/Right) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Inicio */}
            <Link 
              to="/" 
              className={`px-5 py-2.5 flex items-center gap-2 transition-all duration-300 text-sm border-[3px] ${isHome ? 'text-black bg-[#74D724] border-black shadow-[4px_4px_0px_0px_#000]' : 'text-black bg-white border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_#000]'}`}
            >
              <Home size={18} strokeWidth={3} />
              <span className="inline-flex items-baseline">
                <span style={{ fontFamily: "Relidux, sans-serif", fontWeight: 400 }}>I</span>
                <span style={{ fontFamily: "Valve, sans-serif", fontWeight: 700 }}>nicio</span>
              </span>
            </Link>

            {/* Tech Week */}
            <a 
              href={isHome ? "#tech-week-section" : "/#tech-week-section"} 
              className="px-5 py-2.5 flex items-center gap-2 transition-all duration-300 text-sm border-[3px] text-black bg-white border-transparent hover:border-black hover:bg-[#a855f7] hover:text-white hover:shadow-[4px_4px_0px_0px_#000]"
            >
              <Calendar size={18} strokeWidth={3} />
              <span className="whitespace-nowrap inline-flex items-baseline">
                <span style={{ fontFamily: "Relidux, sans-serif", fontWeight: 400 }}>T</span>
                <span style={{ fontFamily: "Valve, sans-serif", fontWeight: 700 }}>ech</span>
                <span className="ml-1.5" style={{ fontFamily: "Relidux, sans-serif", fontWeight: 400 }}>W</span>
                <span style={{ fontFamily: "Valve, sans-serif", fontWeight: 700 }}>eek</span>
              </span>
            </a>

            {/* Ponentes */}
            <a 
              href={isHome ? "#speakers" : "/#speakers"} 
              className="px-5 py-2.5 flex items-center gap-2 transition-all duration-300 text-sm border-[3px] text-black bg-white border-transparent hover:border-black hover:bg-[#00bcd4] hover:text-white hover:shadow-[4px_4px_0px_0px_#000]"
            >
              <Users size={18} strokeWidth={3} />
              <span className="inline-flex items-baseline">
                <span style={{ fontFamily: "Relidux, sans-serif", fontWeight: 400 }}>P</span>
                <span style={{ fontFamily: "Valve, sans-serif", fontWeight: 700 }}>onentes</span>
              </span>
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center justify-between">
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
                className={`px-4 py-3 flex items-center gap-3 border-[3px] border-black transition-colors ${isHome ? 'bg-[#74D724] text-black' : 'bg-white text-black hover:bg-black hover:text-white'}`}
              >
                <Home size={20} strokeWidth={3} />
                <span className="inline-flex items-baseline text-base">
                  <span style={{ fontFamily: "Relidux, sans-serif", fontWeight: 400 }}>I</span>
                  <span style={{ fontFamily: "Valve, sans-serif", fontWeight: 700 }}>nicio</span>
                </span>
              </Link>
              
              <a 
                href={isHome ? "#tech-week-section" : "/#tech-week-section"} 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 flex items-center gap-3 border-[3px] border-black bg-white text-black hover:bg-[#a855f7] hover:text-white transition-colors"
              >
                <Calendar size={20} strokeWidth={3} />
                <span className="inline-flex items-baseline text-base">
                  <span style={{ fontFamily: "Relidux, sans-serif", fontWeight: 400 }}>T</span>
                  <span style={{ fontFamily: "Valve, sans-serif", fontWeight: 700 }}>ech</span>
                  <span className="ml-1.5" style={{ fontFamily: "Relidux, sans-serif", fontWeight: 400 }}>W</span>
                  <span style={{ fontFamily: "Valve, sans-serif", fontWeight: 700 }}>eek</span>
                </span>
              </a>

              <a 
                href={isHome ? "#speakers" : "/#speakers"} 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 flex items-center gap-3 border-[3px] border-black bg-white text-black hover:bg-[#00bcd4] hover:text-white transition-colors"
              >
                <Users size={20} strokeWidth={3} />
                <span className="inline-flex items-baseline text-base">
                  <span style={{ fontFamily: "Relidux, sans-serif", fontWeight: 400 }}>P</span>
                  <span style={{ fontFamily: "Valve, sans-serif", fontWeight: 700 }}>onentes</span>
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}