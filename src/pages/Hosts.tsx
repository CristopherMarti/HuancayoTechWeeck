import { motion } from 'motion/react';
import { Building2, ArrowRight, MapPin } from 'lucide-react';

const hosts = [
  {
    name: "Kuzi Fund",
    type: "Inversión",
    desc: "Impulsando el ecosistema tecnológico con inversión y capital de riesgo.",
    link: "https://kuzifund.com/",
    images: [
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    name: "Doctoc Health",
    type: "HealthTech",
    desc: "Innovación en salud digital para mejorar la atención médica en la región.",
    link: "https://doctoc.health/",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export function Hosts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative z-10 px-6 py-32 w-full max-w-[1400px] mx-auto flex flex-col"
    >
      <div className="flex flex-col items-start mb-16 md:mb-24 max-w-4xl">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 border-[4px] border-black bg-[#ff5f56] shadow-[4px_4px_0px_0px_#000] mb-6"
        >
          <Building2 className="w-5 h-5 text-black" />
          <span 
            style={{ fontFamily: "'Segoe UI', 'Space Grotesk', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
            className="text-black text-sm uppercase tracking-widest"
          >
            Hosts
          </span>
        </motion.div>

        {/* Titular Principal: Espacios y Aliados en Segoe UI Black */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
          className="text-6xl md:text-8xl text-black uppercase tracking-tight mb-8 leading-none bg-[#74D724] px-6 py-4 border-[6px] border-black shadow-[12px_12px_0px_0px_#000]"
        >
          Espacios y <br /> Aliados
        </motion.h1>

        {/* Párrafo descriptivo en Clash Display Regular */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
          className="text-lg md:text-2xl text-black border-[6px] border-black shadow-[8px_8px_0px_0px_#000] p-6 bg-white"
        >
          Descubre a las organizaciones que nos brindan sus espacios y recursos para hacer de Tech Week una experiencia inmersiva por toda la ciudad.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        {hosts.map((host, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="group relative bg-white border-[6px] border-black shadow-[12px_12px_0px_0px_#000] hover:shadow-[16px_16px_0px_0px_#000] transition-all hover:-translate-y-2 h-[400px] md:h-[500px] flex flex-col"
          >
            <a href={host.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20"></a>
            <div className="w-full h-1/2 md:h-[60%] border-b-[6px] border-black flex overflow-hidden bg-black relative">
              {host.images.map((img, i) => (
                <div key={i} className="relative h-full flex-1 overflow-hidden border-r-[6px] border-black last:border-r-0">
                  <img
                    src={img}
                    alt={`${host.name} view ${i + 1}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="flex-1 p-6 md:p-8 flex flex-col bg-[#f0f0f0]">
              <div className="flex items-center gap-2 mb-4">
                <span 
                  style={{ fontFamily: "'Segoe UI', 'Space Grotesk', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                  className="px-4 py-1.5 bg-black text-white text-xs uppercase tracking-widest border-2 border-black"
                >
                  {host.type}
                </span>
                <span className="p-1.5 bg-[#ff5f56] border-2 border-black">
                  <MapPin className="w-4 h-4 text-black" />
                </span>
              </div>

              {/* Nombre del Host en Segoe UI Black */}
              <h3 
                style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                className="text-3xl md:text-5xl text-black mb-3 uppercase tracking-tight line-clamp-1"
              >
                {host.name}
              </h3>

              {/* Descripción del Host en Clash Display Regular */}
              <p 
                style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
                className="text-black text-base md:text-lg max-w-md line-clamp-2"
              >
                {host.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Banner inferior "Abre tus puertas" */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="w-full bg-[#a855f7] border-[6px] border-black p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[16px_16px_0px_0px_#000] relative"
      >
        <div className="relative z-10 md:w-2/3 text-left">
          {/* Título en Segoe UI Black con trazo hueco brutalista */}
          <h2 
            style={{ 
              fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", 
              fontWeight: 900,
              WebkitTextStroke: '2px black',
              color: 'white'
            }}
            className="text-4xl md:text-6xl uppercase tracking-tight mb-4 drop-shadow-md"
          >
            Abre tus puertas
          </h2>
          <p 
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
            className="text-black text-lg md:text-2xl max-w-xl bg-white/80 p-4 border-4 border-black"
          >
            ¿Tienes un espacio ideal para meetups, workshops o reuniones? Únete como host oficial.
          </p>
        </div>
        <div className="relative z-10 md:w-1/3 flex justify-end w-full">
          <button 
            style={{ fontFamily: "'Segoe UI', 'Space Grotesk', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
            className="w-full md:w-auto bg-white text-black border-[4px] border-black text-xl md:text-2xl py-4 px-8 flex items-center justify-center gap-3 transition-all hover:bg-black hover:text-white shadow-[6px_6px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none group uppercase tracking-widest"
          >
            Aplicar ahora
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}