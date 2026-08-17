import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Initiatives() {
  return (
    <section className="py-12 w-full z-20 relative" id="initiatives">
      <div className="bg-google-white dark:bg-google-grey-900 rounded-3xl border border-google-grey-100 dark:border-google-grey-800 p-8 md:p-12 overflow-hidden relative shadow-sm">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-google-green-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-google-blue-500/10 to-transparent rounded-tr-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-google-green-500/10 text-google-green-600 dark:text-google-green-400 font-bold text-sm tracking-wide uppercase mb-6 border border-google-green-500/20">
              Iniciativa Especial
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-google-black dark:text-google-white mb-4">
              Women Techmakers
            </h2>
            <p className="text-google-grey-700 dark:text-google-grey-300 text-lg leading-relaxed mb-8">
              El programa de Google que proporciona visibilidad, comunidad y recursos para mujeres en la tecnología. En GDG Huancayo promovemos activamente la participación femenina organizando eventos exclusivos y paneles para empoderar a más mujeres en STEAM.
            </p>
            <a href="https://developers.google.com/womentechmakers" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-google-black text-google-white dark:bg-google-white dark:text-google-black font-bold rounded-full hover:scale-105 transition-transform">
              Conocer más <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          
          <div className="flex-1 w-full max-w-sm relative">
            <div className="aspect-square rounded-full border-8 border-google-white dark:border-google-grey-900 shadow-xl overflow-hidden bg-google-grey-100 dark:bg-google-grey-800 relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                 alt="Women Techmakers" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-google-green-500 mix-blend-overlay opacity-20 dark:opacity-30"></div>
            </div>
            
            {/* Shapes */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute -top-6 -right-6 w-24 h-24 border-[6px] border-google-yellow-600 dark:border-google-yellow-600/70 rounded-full opacity-60"
            />
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-4 -left-4 w-16 h-16 bg-google-blue-500 dark:bg-google-blue-500/80 rounded-xl opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
