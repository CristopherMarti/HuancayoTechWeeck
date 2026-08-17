import { motion } from 'motion/react';
import { recentEvents } from '../data';
import { ExternalLinkIcon, Facebook, Instagram } from 'lucide-react';

export function SocialPortal() {
  const overlayColors = [
    'from-google-blue-500 via-google-blue-500/80',
    'from-google-green-500 via-google-green-500/80',
    'from-google-yellow-600 via-google-yellow-600/80',
    'from-google-red-500 via-google-red-500/80'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="events">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-google-black dark:text-google-white mb-3">Portal Social y Eventos</h2>
          <p className="text-google-grey-700 dark:text-google-grey-300 text-lg">Mantente al tanto de nuestros últimos meetups, talleres y noticias.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/gdghuancayo/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-google-blue-500 font-medium hover:bg-google-grey-100 dark:hover:bg-google-grey-700 transition-colors text-base bg-google-white dark:bg-google-grey-800 p-2.5 rounded-full shadow-sm">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/gdghuancayo/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-google-red-500 font-medium hover:bg-google-grey-100 dark:hover:bg-google-grey-700 transition-colors text-base bg-google-white dark:bg-google-grey-800 p-2.5 rounded-full shadow-sm">
            <Instagram size={20} />
          </a>
        </div>
      </motion.div>

      {/* Bento Grid layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[450px]"
      >
        {recentEvents.map((event, index) => {
          // Make the first item larger in the bento grid
          const isFeatured = index === 0;
          const gridClasses = isFeatured 
            ? "md:col-span-2 md:row-span-2" 
            : "md:col-span-1 md:row-span-1";
          // Pick a vibrant color
          const colorOverlay = overlayColors[index % overlayColors.length];
          
          return (
            <motion.a 
              variants={itemVariants}
              key={event.id}
              href={event.link}
              className={`group relative overflow-hidden rounded-3xl block ${gridClasses} shadow-sm hover:shadow-xl transition-all duration-300 w-full h-full min-h-[220px]`}
            >
              {/* Image with subtle zoom effect */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Vibrant Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${colorOverlay} to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    <span className="px-3 py-1 text-[11px] uppercase tracking-widest font-bold rounded-md bg-google-white/20 text-google-white backdrop-blur-md">
                      {event.platform}
                    </span>
                  </div>
                  
                  <h3 className={`font-bold text-google-white leading-tight ${isFeatured ? 'text-2xl md:text-4xl' : 'text-xl'}`}>
                    {event.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}
