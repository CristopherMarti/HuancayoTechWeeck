import { motion } from 'motion/react';
import { Mail, ArrowRight, TerminalSquare, CheckSquare } from 'lucide-react';
import React, { useState } from 'react';

const benefits = [
  "Acceso anticipado a entradas Early Bird",
  "Anuncios exclusivos de Keynote Speakers",
  "Oportunidades de voluntariado y becas",
  "Resúmenes y material descargable del evento"
];

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center relative z-10 px-6 py-32 w-full max-w-[1200px] mx-auto"
    >
      <div className="w-full flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 bg-[#ff5f56] flex items-center justify-center mb-8 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <Mail className="w-8 h-8 text-black" strokeWidth={3} />
          </motion.div>
          
          {/* Titular Principal en Segoe UI Black con estilo Neo-Brutalista hueco */}
          <h1 
            style={{ 
              fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", 
              fontWeight: 900,
              WebkitTextStroke: '2px black',
              color: 'white'
            }}
            className="text-6xl md:text-8xl uppercase tracking-tighter mb-4 leading-none drop-shadow-md"
          >
            Tech News <br/> 
            <span 
              style={{ 
                color: '#a855f7',
                WebkitTextStroke: '2px black' 
              }}
            >
              en tu inbox
            </span>
          </h1>
          
          {/* Párrafo descriptivo en Clash Display Regular */}
          <p 
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
            className="text-lg md:text-xl text-black mb-10 max-w-lg leading-relaxed bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            Únete a nuestra lista de correo para recibir las últimas actualizaciones de desarrollo, inteligencia artificial y todo sobre Tech Week Huancayo 2026.
          </p>

          {/* Lista de beneficios en Segoe UI Black */}
          <div className="flex flex-col gap-4 mb-8 w-full">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex items-center gap-3 bg-[#f0f0f0] p-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <CheckSquare className="w-6 h-6 text-[#74D724] flex-shrink-0" strokeWidth={3} />
                <span 
                  style={{ fontFamily: "'Segoe UI', 'Space Grotesk', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                  className="text-black uppercase tracking-tight text-sm md:text-base"
                >
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Terminal Form */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full bg-[#5b8c5a] border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden font-mono"
          >
            {/* Terminal Header */}
            <div className="bg-[#487047] px-4 py-3 flex items-center gap-2 border-b-[6px] border-black">
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-[#ff5f56] border-2 border-black"></div>
                <div className="w-4 h-4 bg-[#ffbd2e] border-2 border-black"></div>
                <div className="w-4 h-4 bg-[#74D724] border-2 border-black"></div>
              </div>
              <div className="flex-1 text-center text-white text-sm font-black uppercase tracking-widest flex justify-center items-center gap-2" style={{ WebkitTextStroke: '0.5px black' }}>
                <TerminalSquare className="w-4 h-4" />
                <span>subscribe.sh</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 text-sm md:text-base text-white font-bold bg-[#0a0a0a]">
              <div className="mb-4 text-[#ff5f56]">
                $ ./init_subscription --topic="TechWeek"
              </div>
              <div className="mb-6 break-words">
                Initializing secure connection... <span className="text-[#00bcd4]">OK</span><br/>
                Loading community modules... <span className="text-[#00bcd4]">OK</span><br/>
                Please enter your email address to continue:
              </div>

              {subscribed ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#74D724] font-bold mb-4 p-4 border-[4px] border-[#74D724] bg-[#74D724]/10"
                >
                  &gt; Subscription successful! Welcome to the community.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex items-center gap-2 bg-black border-[4px] border-white/20 p-2 focus-within:border-[#00bcd4] transition-colors">
                    <span className="text-[#00bcd4] font-bold ml-2">{'>'}</span>
                    <input 
                      type="email" 
                      placeholder="tucorreo@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-none outline-none text-white py-3 px-2 font-mono placeholder:text-white/30"
                      required
                    />
                  </div>
                  
                  {/* Botón en Segoe UI Black */}
                  <button 
                    type="submit"
                    style={{ fontFamily: "'Segoe UI', 'Space Grotesk', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                    className="relative overflow-hidden bg-[#a855f7] border-[4px] border-white text-white py-4 px-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#fff] shadow-[4px_4px_0px_0px_#fff] flex items-center justify-center gap-2 group tracking-widest uppercase text-base md:text-lg"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      ¡Suscribirme Ahora!
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    </span>
                  </button>
                </form>
              )}
              
              <div className="mt-8 pt-4 flex items-center gap-2 text-xs text-[#00bcd4] uppercase font-black tracking-widest border-t-[4px] border-white/20">
                <span className="animate-pulse w-3 h-4 bg-[#00bcd4] inline-block"></span>
                <span>Waiting for input...</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}