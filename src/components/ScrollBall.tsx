import { motion, useScroll, useTransform } from 'motion/react';

export function ScrollBall() {
  const { scrollYProgress } = useScroll();

  // Move vertically based on scroll progress (rolling down the page)
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "85vh"]);
  
  // Move horizontally from side to side
  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["5vw", "85vw", "5vw", "85vw", "5vw"]);
  
  // Rotate as it goes down
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1080]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
      <motion.div
        style={{ x, y }} 
        className="absolute top-0 left-0"
      >
        {/* Continuous independent bounce */}
        <motion.div 
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* The rolling green ball */}
          <motion.div
            style={{ rotate }}
            className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-[6px] border-black bg-[#74D724] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
