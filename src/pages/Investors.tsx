import { motion } from 'motion/react';
import { TrendingUp, Activity, PieChart, BarChart3, ChevronRight } from 'lucide-react';

const stats = [
  { val: "$2M+", label: "Inversión proyectada" },
  { val: "30+", label: "Startups en pitch" },
  { val: "15", label: "Fondos de VC invitados" },
];

const highlights = [
  {
    icon: <PieChart className="w-8 h-8 text-google-green-500" />,
    title: "Distribución de Sectores",
    desc: "Fintech, Agrotech, EdTech y SaaS representan el 80% de las startups en etapa semilla presentadas."
  },
  {
    icon: <Activity className="w-8 h-8 text-google-red-500" />,
    title: "Métricas de Tracción",
    desc: "Filtramos startups con MVP probado, primeros ingresos y un equipo fundador validado."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-google-blue-500" />,
    title: "Retorno Proyectado",
    desc: "Acceso a valoraciones tempranas en un mercado emergente con alto potencial de crecimiento."
  }
];

export function Investors() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative z-10 px-6 py-32 w-full max-w-[1400px] mx-auto flex flex-col"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16 md:mb-24">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Badge Inversores */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 border-[4px] border-black bg-[#00bcd4] shadow-[4px_4px_0px_0px_#000] mb-6"
          >
            <TrendingUp className="w-5 h-5 text-black" />
            <span 
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
              className="text-black text-sm uppercase tracking-widest"
            >
              Inversores
            </span>
          </motion.div>

          {/* Titular Principal: El futuro en la sierra */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
            className="text-6xl md:text-8xl text-black uppercase tracking-tight mb-8 leading-none bg-[#00bcd4] px-6 py-4 border-[6px] border-black shadow-[12px_12px_0px_0px_#000]"
          >
            El futuro <br/> en la sierra
          </motion.h1>

          {/* Párrafo descriptivo en Clash Display Regular */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
            className="text-lg md:text-2xl text-black font-bold border-[6px] border-black shadow-[8px_8px_0px_0px_#000] p-6 bg-white"
          >
            Conecta con los founders más prometedores de la región. Acceso exclusivo a deal flow curado y eventos privados de networking con LPs locales y fondos semilla.
          </motion.p>
        </div>
        
        {/* Métricas / Stats laterales */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full md:w-auto grid grid-cols-2 md:grid-cols-1 gap-6 md:border-l-[6px] border-black md:pl-12"
        >
          {stats.map((st, i) => (
            <div key={i} className="flex flex-col bg-white border-[4px] border-black p-4 shadow-[6px_6px_0px_0px_#000]">
              <span 
                style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                className="text-4xl md:text-6xl text-black tracking-tight leading-none"
              >
                {st.val}
              </span>
              <span 
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
                className="text-sm text-[#00bcd4] uppercase tracking-widest mt-1" 
                style={{ WebkitTextStroke: '0.5px black', fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
              >
                {st.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Grid de Highlights / Sectores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {highlights.map((item, i) => {
          const colors = ["bg-[#74D724]", "bg-[#ff5f56]", "bg-[#00bcd4]"];
          const bgColor = colors[i % colors.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`p-8 bg-white border-[6px] border-black shadow-[12px_12px_0px_0px_#000] hover:shadow-[16px_16px_0px_0px_#000] hover:-translate-y-2 transition-all duration-300 relative`}
            >
              <div className={`absolute top-0 left-0 w-full h-4 border-b-[6px] border-black ${bgColor}`} />
              <div className="relative z-10 mt-6">
                <div className={`mb-6 p-4 border-[4px] border-black inline-block shadow-[6px_6px_0px_0px_#000] ${bgColor}`}>
                  <div className="text-black">
                    {item.icon}
                  </div>
                </div>
                
                {/* Título de la tarjeta en Segoe UI Black */}
                <h3 
                  style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                  className="text-2xl md:text-3xl text-black mb-4 uppercase tracking-tight"
                >
                  {item.title}
                </h3>

                {/* Descripción en Clash Display Regular */}
                <p 
                  style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
                  className="text-black text-lg"
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Banner inferior: Acceso Investor Pass */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="w-full bg-[#74D724] border-[6px] border-black p-8 md:p-16 flex flex-col items-center justify-center text-center shadow-[16px_16px_0px_0px_#000] relative overflow-hidden"
      >
        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          {/* Título en Segoe UI Black con trazo hueco brutalista */}
          <h2 
            style={{ 
              fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", 
              fontWeight: 900,
              WebkitTextStroke: '2px black',
              color: 'white'
            }}
            className="text-4xl md:text-6xl uppercase tracking-tight mb-6 drop-shadow-md"
          >
            Acceso Investor Pass
          </h2>
          
          {/* Párrafo en Clash Display Regular */}
          <p 
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
            className="text-black text-xl md:text-2xl max-w-2xl mb-10 bg-white p-4 border-[4px] border-black font-bold"
          >
            Obtén tu pase VIP para acceder al Investor Lounge, listas de startups curadas y cenas privadas con keynotes.
          </p>

          {/* Botón en Segoe UI Black */}
          <button 
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
            className="bg-white text-black border-[4px] border-black text-xl md:text-2xl py-5 px-10 flex items-center justify-center gap-3 transition-all shadow-[8px_8px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-black hover:text-white uppercase tracking-widest w-full sm:w-auto group"
          >
            Solicitar Pase
            <ChevronRight className="w-8 h-8" strokeWidth={4} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}