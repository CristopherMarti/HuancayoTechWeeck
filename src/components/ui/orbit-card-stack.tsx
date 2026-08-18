import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface OrbitStackItem {
  name: string;
  role: string;
  description: string;
  initials: string;
  stat: string;
  accent: string;
  image: string;
  topic?: string;
}

interface OrbitCardStackProps {
  items: OrbitStackItem[];
  defaultActiveIndex?: number;
  spread?: number;
  lift?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  onActiveChange?: (item: OrbitStackItem) => void;
}

export function OrbitCardStack({
  items,
  defaultActiveIndex = 0,
  spread = 150,
  lift = 40,
  autoPlay = true,
  autoPlayInterval = 3000,
  onActiveChange
}: OrbitCardStackProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % items.length;
        if (onActiveChange) onActiveChange(items[next]);
        return next;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, items, onActiveChange]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (onActiveChange) {
      onActiveChange(items[index]);
    }
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center perspective-[1200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {items.map((item, index) => {
          const count = items.length;
          let distance = index - activeIndex;
          if (distance > count / 2) distance -= count;
          if (distance < -count / 2) distance += count;
          
          const xOffset = distance * spread;
          const yOffset = Math.abs(distance) * lift + (distance === 0 ? -15 : 0);
          const scale = 1 - Math.abs(distance) * 0.12;
          
          const baseRotate = distance * 8;
          const messyRotate = (index % 3 === 0 ? 3 : index % 2 === 0 ? -2 : 1) * Math.abs(distance);
          const rotateZ = distance === 0 ? 0 : baseRotate + messyRotate;
          
          const zIndex = items.length - Math.abs(distance);
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={item.name}
              initial={false}
              animate={{
                x: xOffset,
                y: yOffset,
                scale: scale,
                rotateZ: rotateZ,
                zIndex: zIndex,
                opacity: Math.abs(distance) > 2 ? 0 : 1
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
                mass: 1.2
              }}
              className="absolute cursor-pointer w-[320px] md:w-[380px]"
              onClick={() => handleClick(index)}
              whileHover={{ 
                scale: isActive ? 1.05 : scale * 1.05,
                y: isActive ? -25 : yOffset - 15,
                rotateZ: isActive ? 0 : rotateZ + (distance > 0 ? 5 : -5)
              }}
            >
              <div 
                className="w-full bg-white border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 flex flex-col gap-4 overflow-hidden transition-colors duration-300 relative group"
                style={{
                  borderTopColor: item.accent,
                  borderTopWidth: '16px'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: item.accent }}
                ></div>

                <div className="flex justify-between items-start z-10 relative">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[5px] border-black overflow-hidden bg-gray-200 shrink-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] grayscale group-hover:grayscale-0 transition-all duration-300">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span 
                      style={{ 
                        backgroundColor: item.accent, 
                        fontFamily: "'Segoe UI', system-ui, sans-serif", 
                        fontWeight: 900 
                      }}
                      className="text-black uppercase text-xs md:text-sm px-4 py-1.5 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {item.stat}
                    </span>
                    <span 
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
                      className="text-black text-sm md:text-base uppercase mt-2 tracking-widest"
                    >
                      {item.initials}
                    </span>
                  </div>
                </div>

                <div className="z-10 relative mt-4">
                  {/* Nombre del Speaker */}
                  <h3 
                    style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", fontWeight: 900 }}
                    className="text-3xl md:text-4xl uppercase tracking-tight leading-none mb-2 text-black"
                  >
                    {item.name}
                  </h3>

                  {/* Rol / Cargo */}
                  <p 
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
                    className="text-sm md:text-base uppercase tracking-widest text-black/70 mb-5"
                  >
                    {item.role}
                  </p>
                  
                  {/* Caja de Detalles */}
                  <div className="bg-[#f0f0f0] border-[4px] border-black p-4 md:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {/* Descripción con Clash Display Regular */}
                    <p 
                      style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
                      className="text-sm md:text-base text-black leading-tight"
                    >
                      {item.description}
                    </p>

                    {/* Tema con Segoe UI Black */}
                    {item.topic && (
                      <p 
                        style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
                        className="text-sm md:text-base text-black mt-3 uppercase border-t-[3px] border-black pt-3"
                      >
                        "{item.topic}"
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}