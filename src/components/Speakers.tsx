import React, { useState } from 'react';
import { OrbitCardStack, type OrbitStackItem } from './ui/orbit-card-stack';

const speakers: OrbitStackItem[] = [
  {
    name: "Doc",
    role: "Host de Eventos",
    description: "Conduce la Tech Week con energía y dinámicas brutales.",
    initials: "DC",
    stat: "Tech Week",
    accent: "#f8d66d", // Amarillo brutalista
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop&q=80",
    topic: "Host Principal"
  },
  {
    name: "Cusi",
    role: "Host de Eventos",
    description: "Aporta carisma y el toque local a todas las presentaciones.",
    initials: "CS",
    stat: "Tech Week",
    accent: "#ff5252", // Rojo brutalista
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    topic: "Co-Host Principal"
  },
  {
    name: "Ana Soto",
    role: "Frontend Developer",
    description: "Diseño y estructura web hiper rápida con react y tailwind.",
    initials: "AS",
    stat: "Vercel",
    accent: "#78dcca", // Cyan brutalista
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
    topic: "Desarrollo web desde cero"
  },
  {
    name: "Luis Ramírez",
    role: "Startup Founder",
    description: "Mentalidad bootstrap y crecimiento orgánico B2B.",
    initials: "LR",
    stat: "TechAndes",
    accent: "#c49df2", // Morado brutalista
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
    topic: "Construir una empresa sin capital"
  },
  {
    name: "Sofía Torres",
    role: "HealthTech Specialist",
    description: "Optimizando la salud en la región con IA y datos.",
    initials: "ST",
    stat: "Med Innova",
    accent: "#f3f1ea", // Crema brutalista
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    topic: "Salud digital en Junín"
  },
  {
    name: "Diego Valdés",
    role: "DevOps Engineer",
    description: "Infraestructura inquebrantable para apps mundiales.",
    initials: "DV",
    stat: "AWS",
    accent: "#ff914d", // Naranja brutalista
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    topic: "Escalabilidad Global"
  },
  {
    name: "Elena Ríos",
    role: "AI Researcher",
    description: "Creación y despliegue de LLMs en entornos productivos.",
    initials: "ER",
    stat: "DeepMind",
    accent: "#72f1b8", // Verde neón
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    topic: "AI Generativa en Producción"
  },
  {
    name: "Javier Cueva",
    role: "CTO",
    description: "Llevando el talento descentralizado al siguiente nivel.",
    initials: "JC",
    stat: "Startup Perú",
    accent: "#00c4cc", // Turquesa
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
    topic: "Emprender fuera de Lima"
  }
];

export function Speakers() {
  const [activeMember, setActiveMember] = useState(speakers[2]!);

  return (
    <section className="w-full relative py-20 overflow-hidden" id="speakers-section">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col items-center">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 flex-wrap justify-center mb-4">
            <h2 className="font-display font-black text-6xl md:text-8xl leading-tight text-white drop-shadow-md uppercase tracking-tighter" style={{ WebkitTextStroke: '2px black' }}>
              Invitados 2026
            </h2>
            <span className="inline-flex items-center bg-[#4285f4] text-black font-black text-xs md:text-sm px-4 py-2 uppercase tracking-widest border-[4px] border-black shadow-[4px_4px_0px_0px_#000] mt-2 md:mt-0">
              Tech
            </span>
          </div>
          <p className="font-bold text-black text-lg md:text-2xl text-center max-w-2xl bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_#000]">
            Expertos de la industria compartiendo su conocimiento y experiencia. Haz click en las tarjetas para descubrir más.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-12 items-center lg:items-center max-w-6xl mt-8">
          {/* Active Member Display Info */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="bg-white border-[6px] border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full relative z-10 transition-colors duration-500" style={{ borderBottomColor: activeMember.accent, borderBottomWidth: '12px' }}>
              <p className="font-bold text-sm uppercase tracking-widest text-black/70 mb-2 border-b-4 border-black pb-2">
                Viendo a
              </p>
              <h2 className="font-display font-black text-4xl uppercase tracking-tighter text-black mb-2" style={{ color: activeMember.accent, WebkitTextStroke: '1.5px black' }}>
                {activeMember.name}
              </h2>
              <p className="font-black text-lg text-black uppercase mb-4">{activeMember.role}</p>
              <div className="mt-4 bg-black text-white p-4 font-bold border-l-[8px]" style={{ borderColor: activeMember.accent }}>
                <p className="text-xs text-white/70 mb-1">TEMA PRINCIPAL</p>
                <p className="text-xl uppercase">{activeMember.topic}</p>
              </div>
            </div>
          </div>

          {/* Orbit Stack */}
          <div className="w-full lg:w-2/3 h-[500px] md:h-[620px] relative">
            <OrbitCardStack
              items={speakers}
              defaultActiveIndex={2}
              spread={60}
              lift={20}
              onActiveChange={(item) => setActiveMember(item)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
