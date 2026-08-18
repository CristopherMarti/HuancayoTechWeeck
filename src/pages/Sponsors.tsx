import { motion } from 'motion/react';
import { ArrowRight, Star, Check } from 'lucide-react';
import { Technologies } from '../components/Technologies';

const sponsorTiers = [
  {
    name: "Silver",
    description: "Para startups locales y comunidades que dan sus primeros pasos.",
    colorClass: "from-[var(--color-neon-cyan)]/10 to-transparent",
    borderClass: "hover:border-[var(--color-neon-cyan)]",
    glowClass: "hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]",
    buttonHoverClass: "hover:bg-[var(--color-neon-cyan)] hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]",
    perks: [
      "Mesa expositora en zona startup",
      "Mención en Redes Sociales",
      "Logo en sitio web",
      "2 entradas VIP"
    ]
  },
  {
    name: "Gold",
    description: "Para empresas en crecimiento que buscan talento y visibilidad.",
    colorClass: "from-[var(--color-brand-orange)]/10 to-transparent",
    borderClass: "hover:border-[var(--color-brand-orange)]",
    glowClass: "hover:shadow-[0_0_40px_rgba(255,107,43,0.4)]",
    buttonHoverClass: "hover:bg-[var(--color-brand-orange)] hover:text-white hover:shadow-[0_0_20px_rgba(255,107,43,0.6)]",
    perks: [
      "Booth de 3x3m en zona principal",
      "Panel de discusión (20 min)",
      "Logo destacado en web y banners",
      "Lead gen estándar",
      "5 entradas VIP"
    ]
  },
  {
    name: "Platinum",
    description: "Para líderes de la industria que buscan el máximo impacto.",
    colorClass: "from-[var(--color-neon-purple)]/10 to-transparent",
    borderClass: "hover:border-[var(--color-neon-purple)]",
    glowClass: "hover:shadow-[0_0_40px_rgba(116,215,36,0.4)]",
    buttonHoverClass: "hover:bg-[var(--color-neon-purple)] hover:text-white hover:shadow-[0_0_20px_rgba(116,215,36,0.6)]",
    perks: [
      "Booth de 6x6m ubicación premium",
      "Keynote principal (45 min)",
      "Logo exclusivo en lanyards/badges",
      "Lead gen premium con escáner",
      "Mención en prensa y PR",
      "10 entradas VIP"
    ]
  }
];

export function Sponsors() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative z-10 px-6 py-32 w-full max-w-[1400px] mx-auto flex flex-col items-center overflow-hidden"
    >
      <div className="flex flex-col items-center text-center mb-16 md:mb-24 relative z-20">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 border-[4px] border-black bg-[#ffbd2e] shadow-[4px_4px_0px_0px_#000] mb-6"
        >
          <Star className="w-5 h-5 text-black" />
          <span 
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
            className="text-black text-sm uppercase tracking-widest"
          >
            Sponsors
          </span>
        </motion.div>
        
        {/* Titular Principal: Impulsando la Innovación en Segoe UI Black */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
          className="text-6xl md:text-8xl text-black uppercase tracking-tight mb-8 leading-none bg-[#ffbd2e] px-6 py-4 border-[6px] border-black shadow-[12px_12px_0px_0px_#000]"
        >
          Impulsando <br/> la Innovación
        </motion.h1>
        
        {/* Párrafo descriptivo en Clash Display Regular */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
          className="text-lg md:text-2xl text-black max-w-3xl bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000]"
        >
          Únete a las marcas líderes mundiales que hacen posible la convención tecnológica más grande del centro del país.
        </motion.p>
      </div>

      <div className="w-full mb-24 relative z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-google-blue-500/5 to-transparent blur-3xl pointer-events-none" />
        <Technologies />
      </div>

      {/* Pricing / Sponsors Section */}
      <div className="w-full mb-32 relative">
        <div className="text-center mb-12 relative z-10">
          <h3 
            style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
            className="text-4xl md:text-6xl uppercase tracking-tight mb-4 inline-block bg-[#00bcd4] text-white px-6 py-2 border-[4px] border-black shadow-[8px_8px_0px_0px_#000]"
          >
            Opciones de Sponsorship
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full max-w-6xl mx-auto relative z-10">
          {sponsorTiers.map((tier, index) => {
            const colors = ["bg-[#74D724]", "bg-[#ffbd2e]", "bg-[#a855f7]"];
            const bgClass = colors[index % colors.length];
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 flex flex-col relative overflow-hidden transition-all duration-300 border-[6px] border-black shadow-[12px_12px_0px_0px_#000] hover:shadow-[16px_16px_0px_0px_#000] hover:-translate-y-2 bg-white"
              >
                <div className={`absolute top-0 left-0 w-full h-4 border-b-[6px] border-black ${bgClass}`} />
                <div className="relative z-10 flex-1 flex flex-col group mt-6">
                  {/* Nombre del Tier en Segoe UI Black */}
                  <h4 
                    style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                    className="text-4xl lg:text-5xl text-black tracking-tight mb-4 uppercase"
                  >
                    {tier.name}
                  </h4>
                  
                  {/* Descripción del Tier en Clash Display Regular */}
                  <p 
                    style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
                    className="text-black text-base mb-8 min-h-[48px]"
                  >
                    {tier.description}
                  </p>

                  {/* Perks del Tier en Clash Display Regular */}
                  <ul className="space-y-4 mb-10 flex-1">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`border-2 border-black p-0.5 mt-0.5 shrink-0 ${bgClass}`}>
                          <Check className="w-4 h-4 text-black" strokeWidth={4} />
                        </div>
                        <span 
                          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
                          className="text-black text-base leading-tight font-bold"
                        >
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón en Segoe UI Black */}
                  <button 
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
                    className="w-full bg-black text-white text-xl uppercase tracking-widest border-[4px] border-black py-4 px-6 transition-all duration-300 hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  >
                    Contactar
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Banner inferior de Llamado a la Acción */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="w-full bg-[#ffbd2e] border-[6px] border-black p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[16px_16px_0px_0px_#000] overflow-hidden relative z-20"
      >
        <div className="relative z-10 md:w-2/3">
          <h2 
            style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
            className="text-4xl md:text-6xl text-black uppercase tracking-tight mb-4"
          >
            ¿Quieres ser parte de esto?
          </h2>
          <p 
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
            className="text-black text-lg md:text-2xl max-w-xl bg-white p-4 border-[4px] border-black"
          >
            Posiciona tu marca frente a más de 1,000 profesionales tech, inversores y talento emergente.
          </p>
        </div>
        <div className="relative z-10 md:w-1/3 flex justify-end w-full">
          <button 
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
            className="w-full md:w-auto bg-white text-black border-[4px] border-black hover:bg-black hover:text-white text-xl md:text-2xl py-4 px-8 flex items-center justify-center gap-3 transition-all shadow-[6px_6px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 group uppercase tracking-widest"
          >
            Contactar equipo
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}