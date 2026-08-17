import gif1 from '../assets/GDG23_IG_Sticker_01_v01.gif';
import gif2 from '../assets/GDG23_IG_Sticker_02_v01.gif';
import gif3 from '../assets/GDG23_IG_Sticker_03_v01.gif';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { TerminalSquare, Network, Box, Users2, CalendarDays, ArrowRight, X } from 'lucide-react';
import { Background } from './Background';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  return (
    <>
      <section ref={ref} className="w-full flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden pt-24 md:pt-32">
      
      {/* 3D Animated Background - Now limited only to Hero */}
      <Background />

      {/* Floating Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Removed blurred circles for a cleaner Neo-Brutalist look, keeping stickers */}
        
        {/* GIF Stickers */}
        <motion.img
          src={gif1}
          alt="GDG Sticker 1"
          className="absolute top-[15%] right-[5%] md:right-[15%] w-24 sm:w-32 md:w-40 opacity-90"
          animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={gif2}
          alt="GDG Sticker 2"
          className="absolute top-[40%] md:top-[30%] left-[2%] md:left-[10%] w-20 sm:w-28 md:w-36 opacity-90"
          animate={{ y: [0, 20, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.img
          src={gif3}
          alt="GDG Sticker 3"
          className="absolute bottom-[25%] right-[10%] md:right-[25%] w-20 sm:w-28 md:w-36 opacity-90 hidden md:block"
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <motion.div 
        className="relative z-20 w-full max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1
            }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="inline-flex items-center gap-3 px-6 py-2 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8"
        >
          <CalendarDays className="w-5 h-5 text-black" />
          <span className="text-sm md:text-base font-black tracking-widest uppercase text-black">
            16 - 20 de Octubre
          </span>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="flex flex-col items-center text-center tracking-tighter leading-[0.85] max-w-full px-8 py-10 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-4 transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black font-display font-black tracking-tighter">HUANCAYO</span>
            <div className="flex bg-black text-[#74D724] px-4 py-2 border-2 border-black transform -rotate-2">
              <span className="text-4xl sm:text-5xl md:text-6xl font-black font-display">2026</span>
            </div>
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex gap-4 font-display font-black tracking-tighter text-black mt-4">
            <span className="bg-[#74D724] px-2 border-4 border-black">TECH</span>
            <span>WEEK</span>
          </div>
        </motion.div>

        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="text-lg md:text-2xl font-bold text-black mt-4 mb-8 max-w-3xl border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          La semana de tecnología más grande del centro del país. +500 founders, inversores y líderes tech reunidos en Huancayo.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } }
          }}
          className="flex flex-col sm:flex-row gap-4 mb-16 relative z-50 pointer-events-auto"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#74D724] border-4 border-black text-black font-black text-xl uppercase tracking-widest transition-all duration-200 hover:-translate-y-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-[#85e835]"
          >
            <span>Participar Ahora</span>
            <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      {/* Stats Marquee (Neo-Brutalist style) */}
      <div className="w-full relative z-20 mt-8 border-y-[6px] border-black bg-white overflow-hidden py-3 flex">
        <div className="flex whitespace-nowrap items-center w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16 text-black">
              <div className="flex items-center gap-3">
                <Users2 className="w-8 h-8 md:w-12 md:h-12 text-black" />
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-3xl md:text-4xl leading-none">+500</span>
                  <span className="font-bold text-xs md:text-sm uppercase tracking-widest">Asistentes</span>
                </div>
              </div>
              <div className="w-4 h-4 bg-[#74D724] border-2 border-black transform rotate-45"></div>
              <div className="flex items-center gap-3">
                <TerminalSquare className="w-8 h-8 md:w-12 md:h-12 text-black" />
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-3xl md:text-4xl leading-none">+50</span>
                  <span className="font-bold text-xs md:text-sm uppercase tracking-widest">Speakers</span>
                </div>
              </div>
              <div className="w-4 h-4 bg-[#74D724] border-2 border-black transform rotate-45"></div>
              <div className="flex items-center gap-3">
                <CalendarDays className="w-8 h-8 md:w-12 md:h-12 text-black" />
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-3xl md:text-4xl leading-none">5 Días</span>
                  <span className="font-bold text-xs md:text-sm uppercase tracking-widest">De Inmersión</span>
                </div>
              </div>
              <div className="w-4 h-4 bg-[#74D724] border-2 border-black transform rotate-45"></div>
              <div className="flex items-center gap-3">
                <Box className="w-8 h-8 md:w-12 md:h-12 text-black" />
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-3xl md:text-4xl leading-none">+20</span>
                  <span className="font-bold text-xs md:text-sm uppercase tracking-widest">Eventos</span>
                </div>
              </div>
              <div className="w-4 h-4 bg-[#74D724] border-2 border-black transform rotate-45"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
      
      {/* Floating Registration Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-white border-4 border-black p-6 md:p-8 relative z-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 border-2 border-black bg-white hover:bg-gray-100 flex items-center justify-center text-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <X className="w-5 h-5 font-black" />
              </button>
              <div className="text-left border-b-4 border-black pb-4 mb-6">
                <h3 className="font-display font-black text-3xl text-black uppercase tracking-wider mb-2">Reserva tu pase</h3>
                <p className="text-black font-bold">Asegura tu entrada antes de que se agoten.</p>
              </div>
              <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-black text-black uppercase tracking-widest">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Ingresa tu nombre" 
                    className="w-full bg-white border-4 border-black px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(116,215,36,1)] transition-shadow"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-black text-black uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    placeholder="tu@correo.com" 
                    className="w-full bg-white border-4 border-black px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(116,215,36,1)] transition-shadow"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#74D724] text-black border-4 border-black hover:bg-[#85e835] font-black text-xl uppercase tracking-widest transition-all duration-200 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-4"
                >
                  <span>Asegurar mi lugar</span>
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
