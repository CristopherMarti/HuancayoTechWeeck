import { motion } from 'motion/react';
import { TerminalSquare, Zap } from 'lucide-react';

export function About() {
  return (
    <section className="w-full bg-[#f0f0f0] py-24 md:py-32 relative overflow-hidden z-20 border-b-[6px] border-black">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 2px, transparent 0)', backgroundSize: '32px 32px' }}
      ></div>
      
      {/* Giant Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-5">
        <h2 
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
          className="text-[120px] md:text-[200px] lg:text-[280px] text-black uppercase tracking-tighter whitespace-nowrap leading-none"
        >
          TECHWEEK
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
        
        {/* Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 flex justify-center md:justify-start"
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-[#74D724] border-[6px] border-black shadow-[12px_12px_0px_0px_#000] flex items-center justify-center transform -rotate-6">
              <Zap className="w-16 h-16 md:w-24 md:h-24 text-black fill-black" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white border-[4px] border-black shadow-[6px_6px_0px_0px_#000] flex items-center justify-center transform rotate-12">
              <TerminalSquare className="w-10 h-10 text-black" />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 flex flex-col items-start text-left bg-white border-[6px] border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_#000]">
          <div className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 font-black uppercase tracking-widest text-sm md:text-base border-2 border-black mb-6">
            <span className="w-3 h-3 bg-[#00bcd4] border-2 border-black rounded-full animate-pulse"></span>
            El Evento
          </div>
          
          {/* Titular forzado con Segoe UI Black en style */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
            className="text-3xl md:text-5xl lg:text-6xl text-black leading-tight uppercase tracking-tight"
          >
            ¿Qué es el Techweek?
            <br />
            <span className="text-black">Una semana de eventos en Huancayo.</span>
          </motion.h2>
                    
          <p 
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
            className="mt-6 text-xl md:text-2xl text-black/80 max-w-2xl"
          >
            La ciudad tecnológica pionera en el centro del Perú. +500 asistentes, startups y desarrolladores en un solo lugar.
          </p>
        </div>

      </div>
    </section>
  );
}