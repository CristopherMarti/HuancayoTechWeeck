import { useState } from 'react';
import { motion } from 'motion/react';
import { technologies } from '../data';
import { Technology } from '../types';

const BrandIcons = {
  Android: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414C17.523 15.6561 17.2681 15.911 16.9534 15.911H7.04655C6.73185 15.911 6.47693 15.6561 6.47693 15.3414V11.2588H17.523V15.3414ZM17.2662 9.68069L19.0305 6.62143C19.1416 6.42921 19.0762 6.18247 18.8841 6.07127C18.6918 5.96024 18.445 6.02568 18.334 6.21773L16.5165 9.36647C15.176 8.75231 13.6393 8.39682 12.0001 8.39682C10.3608 8.39682 8.824 8.75231 7.48356 9.36647L5.66611 6.21773C5.55437 6.02482 5.30689 5.9599 5.11434 6.07229C4.92196 6.18434 4.85704 6.43181 4.96944 6.62415L6.7338 9.68069C4.04359 11.1685 2.19119 13.9189 2.0166 17.1685H21.9836C21.809 13.9189 19.9566 11.1685 17.2662 9.68069ZM8.24357 14.3315C7.81057 14.3315 7.45952 13.9805 7.45952 13.5475C7.45952 13.1145 7.81057 12.7635 8.24357 12.7635C8.67656 12.7635 9.02761 13.1145 9.02761 13.5475C9.02761 13.9805 8.67656 14.3315 8.24357 14.3315ZM15.7566 14.3315C15.3236 14.3315 14.9725 13.9805 14.9725 13.5475C14.9725 13.1145 15.3236 12.7635 15.7566 12.7635C16.1896 12.7635 16.5406 13.1145 16.5406 13.5475C16.5406 13.9805 16.1896 14.3315 15.7566 14.3315Z"/>
    </svg>
  ),
  'Google Cloud': (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M12.02 4.19c-2.3 0-4.32 1.45-5.06 3.56A4.95 4.95 0 0 0 2 12.5c0 2.76 2.24 5 5 5h10c3.31 0 6-2.69 6-6s-2.69-6-6-6c-.34 0-.68.03-1.01.09A6.974 6.974 0 0 0 12.02 4.19zM7 15.5h10c2.21 0 4-1.79 4-4s-1.79-4-4-4v2c1.1 0 2 .9 2 2s-.9 2-2 2H7c-1.65 0-3-1.35-3-3s1.35-3 3-3V7.5C4.24 7.5 2 9.74 2 12.5s2.24 5 5 5z"/>
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M3.89 15.672L6.155 1.48a.563.563 0 0 1 1.066-.192l2.673 5.485-6.004 8.899zM20.258 16.115l-6-10.8a.56.56 0 0 0-.964-.012l-2.036 3.498 6.425 6.425 2.575 1.503a.035.035 0 0 0 .048-.052l-.048-.562zm-6.273-1.895L11.53 11.758l-5.698 8.441a1.272 1.272 0 0 0 .428 1.493 1.258 1.258 0 0 0 1.2.22l6.5-1.42 1.706-1.574-.951-4.7-2.73-2.11z"/>
    </svg>
  ),
  TensorFlow: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M12 21.603V11.23L5.438 7.421 2.227 9.29v3.743l1.83 1.05v-1.828l1.381-.796v4.619L12 19.865v1.738zm1.38-10.373v5.823l1.83 1.051V10.27l1.38-.797v4.618l3.183-1.832v-3.744L15.21 4.54l-1.83 1.05v3.136l-1.83 1.051v-3.136l-1.382.796z"/>
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M14.314 0L2.3 12 6 15.7 21.684.001h-7.37zm.014 11.072L7.857 17.53l3.67 3.67 6.447-6.447H21.66l-7.332-3.681z"/>
    </svg>
  ),
  'Web Tech': (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  )
};

export function Technologies() {
  return (
    <section id="sponsors-section" className="py-20 w-full relative">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 flex-wrap justify-center mb-4">
            
            {/* Título: Segoe UI Black con trazo hueco */}
            <h2 
              style={{ 
                fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", 
                fontWeight: 900,
                WebkitTextStroke: '2px black',
                color: 'white'
              }} 
              className="text-6xl md:text-8xl leading-tight uppercase tracking-tighter drop-shadow-md"
            >
              Partners
            </h2>

            {/* Badge Top */}
            <span 
              style={{ fontFamily: "'Segoe UI', 'Space Grotesk', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
              className="inline-flex items-center bg-[#a855f7] text-black text-xs md:text-sm px-4 py-2 uppercase tracking-widest border-[4px] border-black shadow-[4px_4px_0px_0px_#000] mt-2 md:mt-0"
            >
              Top
            </span>
          </div>

          {/* Descripción: Clash Display Regular */}
          <p 
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
            className="text-black text-lg md:text-2xl text-center max-w-2xl bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_#000]"
          >
            Con el respaldo de las mejores tecnologías e instituciones.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {technologies.map((tech, idx) => (
            <motion.div 
              key={tech.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <TechCard tech={tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech }: { tech: Technology }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorMap: Record<string, string> = {
    'bg-google-green-500': 'bg-[#74D724]',
    'bg-google-blue-500': 'bg-[#00bcd4]',
    'bg-google-yellow-600': 'bg-[#ffbd2e]',
    'bg-google-red-500': 'bg-[#ff5f56]',
  };

  const bgColor = colorMap[tech.color] || 'bg-[#a855f7]';

  return (
    <motion.div
      className={`border-[4px] border-black shadow-[6px_6px_0px_0px_#000] flex flex-col items-center justify-center cursor-pointer relative overflow-hidden h-40 md:h-48 transition-all duration-300 ${
        isHovered 
          ? `${bgColor} shadow-[8px_8px_0px_0px_#000] -translate-y-1` 
          : 'bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className={`transition-all duration-300 ${isHovered ? 'text-black scale-110' : 'text-black'}`}>
          {BrandIcons[tech.name as keyof typeof BrandIcons] || BrandIcons['Web Tech']}
        </div>
        
        {/* Nombres de tarjetas en Segoe UI Black */}
        <span 
          style={{ fontFamily: "'Segoe UI', 'Space Grotesk', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
          className={`uppercase tracking-widest text-xs md:text-sm text-center transition-all duration-300 ${isHovered ? 'text-black' : 'text-black'}`}
        >
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}