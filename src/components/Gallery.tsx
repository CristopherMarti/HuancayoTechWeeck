import foto01 from '../assets/galeriab-01.jpeg';
import foto02 from '../assets/galeria-02.jpeg';
import foto03 from '../assets/galeria-03.jpeg';
import { motion } from 'motion/react';

const photos = [
  { id: 1, url: foto01, alt: "Tech Week Bogotá", tag: "Event", color: "bg-[#00bcd4]" },
  { id: 2, url: foto02, alt: "Comunidad", tag: "Networking", color: "bg-[#74D724]" },
  { id: 3, url: foto03, alt: "Aprendizaje", tag: "Meetup", color: "bg-[#ffbd2e]" },
  { id: 4, url: foto01, alt: "Innovación", tag: "Tech", color: "bg-[#ff5f56]" },
  { id: 5, url: foto02, alt: "Hackathon de IA", tag: "Hackathon", color: "bg-[#a855f7]" },
  { id: 6, url: foto03, alt: "Charlas", tag: "Speakers", color: "bg-[#00bcd4]" },
  { id: 7, url: foto01, alt: "Comunidad", tag: "Networking", color: "bg-[#74D724]" },
  { id: 8, url: foto02, alt: "Aprendizaje", tag: "Meetup", color: "bg-[#ffbd2e]" },
  { id: 9, url: foto03, alt: "Codelabs", tag: "Workshop", color: "bg-[#ff5f56]" },
];

export function Gallery() {
  const col1 = [photos[0], photos[1], photos[2], photos[3]];
  const col2 = [photos[4], photos[5], photos[6], photos[7]];
  const col3 = [photos[8], photos[0], photos[2], photos[4]];

  return (
    <section className="py-20 w-full z-20 relative overflow-hidden bg-[#e0e0e0]" id="gallery">
      {/* Patrón de puntitos de fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 mb-12 md:mb-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 flex-wrap justify-center mb-4">
            
            {/* Título Principal con Segoe UI Black y trazo hueco */}
            <h2 
              style={{ 
                fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", 
                fontWeight: 900,
                WebkitTextStroke: '2px black',
                color: 'white'
              }}
              className="text-6xl md:text-8xl leading-tight uppercase tracking-tighter drop-shadow-md"
            >
              Galería
            </h2>

            {/* Badge Momentos en Segoe UI Black */}
            <span 
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
              className="inline-flex items-center bg-[#a855f7] text-white text-xs md:text-sm px-4 py-2 uppercase tracking-widest border-[4px] border-black shadow-[4px_4px_0px_0px_#000] mt-2 md:mt-0"
            >
              Momentos
            </span>
          </div>

          {/* Descripción con Clash Display Regular */}
          <p 
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 400 }}
            className="text-black text-lg md:text-2xl text-center max-w-2xl bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_#000]"
          >
            Una mirada en vivo a nuestra comunidad en plena acción.
          </p>
        </div>
      </div>

      <div className="w-full relative px-5 lg:px-10 max-w-[1400px] mx-auto z-20 h-[650px] overflow-hidden border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-6 md:p-8 h-full">
          
          {/* Columna 1 (Sube Infinitamente) */}
          <div className="overflow-hidden relative h-[200%] -mt-[20%]">
            <motion.div 
              animate={{ y: ["0%", "-50%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {[...col1, ...col1].map((photo, i) => (
                <div key={`c1-${i}`} className="relative group bg-black border-[4px] border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all hover:-translate-y-1 cursor-pointer">
                  <div className={`h-3 w-full border-b-[4px] border-black ${photo.color}`}></div>
                  <img src={photo.url} alt={photo.alt} className="w-full h-[250px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 bg-white border-[3px] border-black px-3 py-1 shadow-[4px_4px_0px_0px_#000]">
                    <span 
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
                      className="text-xs uppercase tracking-widest text-black"
                    >
                      {photo.tag}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Columna 2 (Baja Infinitamente) */}
          <div className="overflow-hidden relative h-[200%] -mt-[100%]">
            <motion.div 
              animate={{ y: ["-50%", "0%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {[...col2, ...col2].map((photo, i) => (
                <div key={`c2-${i}`} className="relative group bg-black border-[4px] border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all hover:-translate-y-1 cursor-pointer">
                  <div className={`h-3 w-full border-b-[4px] border-black ${photo.color}`}></div>
                  <img src={photo.url} alt={photo.alt} className="w-full h-[320px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 bg-white border-[3px] border-black px-3 py-1 shadow-[4px_4px_0px_0px_#000]">
                    <span 
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
                      className="text-xs uppercase tracking-widest text-black"
                    >
                      {photo.tag}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Columna 3 (Sube Infinitamente) */}
          <div className="overflow-hidden relative h-[200%] -mt-[30%] hidden md:block">
            <motion.div 
              animate={{ y: ["0%", "-50%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {[...col3, ...col3].map((photo, i) => (
                <div key={`c3-${i}`} className="relative group bg-black border-[4px] border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all hover:-translate-y-1 cursor-pointer">
                  <div className={`h-3 w-full border-b-[4px] border-black ${photo.color}`}></div>
                  <img src={photo.url} alt={photo.alt} className="w-full h-[220px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 bg-white border-[3px] border-black px-3 py-1 shadow-[4px_4px_0px_0px_#000]">
                    <span 
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 900 }}
                      className="text-xs uppercase tracking-widest text-black"
                    >
                      {photo.tag}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}