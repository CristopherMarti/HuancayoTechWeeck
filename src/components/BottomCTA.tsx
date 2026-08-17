import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function BottomCTA() {
  const containerVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const MotionLink = motion.create(Link);

  const navItems = [
    {
      title: "Newsletter",
      desc: "Únete a la lista",
      link: "/newsletter",
      bgHover: "hover:bg-[#a855f7]",
    },
    {
      title: "Sponsors",
      desc: "Marcas impulsoras",
      link: "/sponsors",
      bgHover: "hover:bg-[#00bcd4]",
    },
    {
      title: "Hosts",
      desc: "Los ponentes",
      link: "/hosts",
      bgHover: "hover:bg-[#ff5f56]",
    },
    {
      title: "Inversores",
      desc: "Fondeando futuro",
      link: "/investors",
      bgHover: "hover:bg-[#74D724]",
    }
  ];

  return (
    <>
      <motion.div 
        className="fixed bottom-4 right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 flex flex-col gap-2 pointer-events-none"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col gap-3 items-end pointer-events-auto">
          {navItems.map((item, index) => (
            <MotionLink 
              key={index}
              variants={itemVariants} 
              to={item.link} 
              className={`group flex flex-col justify-center px-4 py-3 bg-white text-black transition-all duration-300 ease-out border-[4px] border-black border-r-0 rounded-l-2xl shadow-[-6px_6px_0px_0px_#000] hover:-translate-x-2 w-[160px] sm:w-[220px] ${item.bgHover}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-display font-black leading-none text-base md:text-xl uppercase tracking-widest text-black group-hover:text-white transition-colors">
                  {item.title}
                </span>
                <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-45 text-black group-hover:text-white" strokeWidth={3} />
              </div>
              <p className="font-bold text-black/70 group-hover:text-white/90 text-[10px] md:text-xs mt-1 transition-all duration-300 ease-out line-clamp-1 uppercase tracking-widest">
                {item.desc}
              </p>
            </MotionLink>
          ))}
        </div>
      </motion.div>
    </>
  );
}
