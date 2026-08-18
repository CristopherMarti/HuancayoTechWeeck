import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Clock } from 'lucide-react';

const schedule = [
  {
    id: "viernes",
    dayLabel: "Vie 16",
    fullDate: "Viernes 16 de Octubre",
    title: "Apertura",
    color: "bg-[var(--color-neon-purple)]",
    borderColor: "border-[var(--color-neon-purple)]",
    textColor: "text-[var(--color-neon-purple)]",
    events: [
      { time: "19:00", name: "Cóctel de apertura", desc: "Autoridades, sponsors y prensa. La feria aún no abre.", badge: "CEREMONIA", badgeType: "neon-purple" }
    ]
  },
  {
    id: "sabado",
    dayLabel: "Sáb 17",
    fullDate: "Sábado 17 de Octubre",
    title: "Startup Summit",
    color: "bg-[var(--color-neon-indigo)]",
    borderColor: "border-[var(--color-neon-indigo)]",
    textColor: "text-[var(--color-neon-indigo)]",
    events: [
      { time: "10:00", name: "Inauguración de la feria", desc: "La feria abre al público.", badge: "APERTURA", badgeType: "neon-indigo" },
      { time: "11:00", name: "Charla de apertura", desc: "\"Emprender con AI en 2026: el momento es ahora.\"", badge: "CHARLA", badgeType: "neon-blue" },
      { time: "12:00", name: "Demos de startups", desc: "Startups locales y regionales muestran su producto en vivo.", badge: "SHOW", badgeType: "neon-cyan" },
      { time: "15:00", name: "Keynote · founder invitado", desc: "\"Construir una empresa sin contactos ni capital.\"", badge: "CHARLA", badgeType: "neon-blue" },
      { time: "16:00", name: "Panel", desc: "\"Emprender fuera de Lima\" + \"Producto con AI sin equipo técnico\".", badge: "PANEL", badgeType: "neon-purple" },
      { time: "17:00", name: "Pitch de ideas", desc: "Estudiantes presentan su idea en 3 minutos.", badge: "CHARLA", badgeType: "neon-blue" },
      { time: "18:00", name: "Torneo de esports · final", desc: "Los mejores del día, con premios.", badge: "COMPETENCIA", badgeType: "neon-indigo" },
      { time: "20:00", name: "Música + cierre de noche", desc: "DJ / música en vivo.", badge: "SHOW", badgeType: "neon-cyan" }
    ]
  },
  {
    id: "domingo",
    dayLabel: "Dom 18",
    fullDate: "Domingo 18 de Octubre",
    title: "DevFest",
    color: "bg-[var(--color-neon-blue)]",
    borderColor: "border-[var(--color-neon-blue)]",
    textColor: "text-[var(--color-neon-blue)]",
    events: [
      { time: "10:00", name: "Tu primer proyecto con AI", desc: "Charla intro, para empezar de cero.", badge: "CHARLA", badgeType: "neon-blue" },
      { time: "11:00", name: "Desarrollo web desde cero", desc: "De la idea al deploy en un finde.", badge: "CHARLA", badgeType: "neon-blue" },
      { time: "12:00", name: "Reto AI en 5 min", desc: "En vivo, con contador en pantalla.", badge: "SHOW", badgeType: "neon-cyan" },
      { time: "13:00", name: "Cloud para empezar", desc: "Google technologies para el primer proyecto.", badge: "CHARLA", badgeType: "neon-blue" },
      { time: "15:00", name: "Concurso de proyectos · final", desc: "Estudiantes locales, votación del público.", badge: "COMPETENCIA", badgeType: "neon-indigo" },
      { time: "16:30", name: "Lightning talks", desc: "Charlas relámpago de devs de la comunidad.", badge: "CHARLA", badgeType: "neon-blue" },
      { time: "17:00", name: "Premiación + cierre", desc: "Todos los ganadores del fin de semana.", badge: "CEREMONIA", badgeType: "neon-purple" }
    ]
  },
  {
    id: "lunes",
    dayLabel: "Lun 19",
    fullDate: "Lunes 19 de Octubre",
    title: "Health Summit",
    color: "bg-[var(--color-neon-cyan)]",
    borderColor: "border-[var(--color-neon-cyan)]",
    textColor: "text-[var(--color-neon-cyan)]",
    events: [
      { time: "09:00", name: "Apertura del summit", desc: "Salud digital en Junín: asistencial y ocupacional.", badge: "CHARLA", badgeType: "neon-blue" },
      { time: "10:00", name: "Salud asistencial", desc: "Historia clínica y agentes de AI en la atención al paciente.", badge: "CHARLA", badgeType: "neon-blue" },
      { time: "11:00", name: "Salud ocupacional", desc: "SST, Ley 29783 y EMOs inteligentes.", badge: "CHARLA", badgeType: "neon-blue" },
      { time: "12:00", name: "Mesa sectorial", desc: "Clínicas, minería y tecnología en salud.", badge: "PANEL", badgeType: "neon-purple" },
      { time: "14:00", name: "Casos + networking", desc: "Cierre profesional del evento.", badge: "NETWORKING", badgeType: "neon-cyan" }
    ]
  },
  {
    id: "martes",
    dayLabel: "Mar 20",
    fullDate: "Martes 20 de Octubre",
    title: "Clausura",
    color: "bg-[var(--color-neon-fuchsia)]",
    borderColor: "border-[var(--color-neon-fuchsia)]",
    textColor: "text-[var(--color-neon-fuchsia)]",
    events: [
      { time: "10:00", name: "Tech Meetup", desc: "Sesiones de networking general.", badge: "NETWORKING", badgeType: "neon-fuchsia" },
      { time: "12:00", name: "Ceremonia de clausura", desc: "Premiación final y cierre de Tech Week 2026.", badge: "CEREMONIA", badgeType: "neon-fuchsia" }
    ]
  }
];

const renderBadge = (badge: string, _badgeType: string) => {
  return (
    <span 
      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
      className="inline-flex mt-2 px-3 py-1 text-[10px] uppercase tracking-widest border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
    >
      {badge}
    </span>
  );
};

export function TechWeek() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  const activeDay = schedule[activeDayIndex];
  
  return (
    <section className="w-full relative py-20 bg-white text-black border-y-[6px] border-black" id="tech-week">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #aaa 2px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 relative z-10" id="agenda">
        
        {/* Cabecera Agenda */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-4 flex-wrap justify-center mb-4">
            <h2 
              style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
              className="text-6xl md:text-8xl leading-none text-black uppercase tracking-tight"
            >
              AGENDA 2026
            </h2>
            <span 
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
              className="inline-flex items-center bg-black text-[#74D724] text-xs md:text-sm px-3 py-1 uppercase tracking-widest border-b-4 border-[#74D724]"
            >
              NUEVO
            </span>
          </div>
          <p 
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
            className="text-black text-lg md:text-xl text-center max-w-2xl px-4"
          >
            La semana de tecnología más vibrante. Eventos especializados cada día.
          </p>
        </div>
        
        {/* Brutalist Agenda Grid */}
        <div className="relative bg-[#f0f0f0] border-4 border-black p-4 md:p-8">
          {/* Day Headers */}
          <div className="flex sm:grid sm:grid-cols-5 gap-2 md:gap-3 mb-8 overflow-x-auto snap-x hide-scrollbar pb-4 pt-2 -mx-2 px-2 sm:mx-0 sm:px-0">
            {schedule.map((day, idx) => {
              const isActive = activeDayIndex === idx;
              return (
                <div key={day.id} className="min-w-[140px] sm:min-w-0 shrink-0 snap-center flex flex-col gap-2">
                  <div 
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
                    className="text-center text-xs md:text-sm text-black uppercase tracking-widest"
                  >
                    {day.dayLabel}
                  </div>
                  <button
                    onClick={() => setActiveDayIndex(idx)}
                    className={`w-full relative h-24 md:h-32 transition-all duration-300 ease-out flex flex-col items-center justify-center overflow-hidden
                    ${isActive 
                      ? `bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] z-10` 
                      : 'bg-black text-white hover:bg-black/90'
                    }`}
                  >
                    <span 
                      style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                      className={`text-sm sm:text-base md:text-xl uppercase tracking-widest relative z-10 ${isActive ? 'text-black' : 'text-white'} text-center px-2 leading-tight whitespace-pre-wrap`}
                    >
                      {day.title}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
          
          {/* Active Agenda List */}
          <div className="mt-8 md:mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDayIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col"
              >
                <div className="flex items-center gap-4 mb-10 pb-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 border-4 border-black bg-[#74D724]"></div>
                  <h3 
                    style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                    className="text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight break-words leading-tight text-black"
                  >
                    {activeDay.fullDate.toUpperCase()} <span className="hidden sm:inline">-</span><br className="sm:hidden" /> {activeDay.title}
                  </h3>
                </div>

                <div className="w-full relative border-l-8 border-black ml-2 md:ml-4 pl-6 md:pl-10 space-y-6 md:space-y-8">
                  {activeDay.events.map((event, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="relative group"
                    >
                      <div className="absolute -left-[38px] md:-left-[54px] top-1.5 w-6 h-6 md:w-8 md:h-8 border-4 border-black bg-white transition-transform duration-300 z-10 group-hover:bg-[#10b981]"></div>
                      
                      <div className="bg-white border-4 border-black p-4 md:p-8 shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-y-1 transition-all duration-300 relative">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-3 bg-black text-white inline-flex px-3 py-1">
                              <Clock size={16} className="text-white" />
                              <span 
                                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 700 }}
                                className="text-sm md:text-base tracking-widest"
                              >
                                {event.time}
                              </span>
                            </div>
                            <h4 
                              style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                              className="text-xl md:text-3xl text-black mb-2 leading-tight break-words uppercase"
                            >
                              {event.name}
                            </h4>
                            <p 
                              style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
                              className="text-black/80 text-base md:text-lg leading-relaxed"
                            >
                              {event.desc}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            {renderBadge(event.badge, event.badgeType)}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}