import { Background } from '../components/Background';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { TechWeek } from '../components/TechWeek';
import { Speakers } from '../components/Speakers';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { Technologies } from '../components/Technologies';
import { Gallery } from '../components/Gallery';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

function SectionWrapper({ children, id }: { children: React.ReactNode, id?: string }) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} className="flex flex-col flex-1 relative z-10 w-full">
      <AnimatePresence>
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-1 w-full relative z-10"
        >
          <Hero />
          
          <SectionWrapper id="about-section">
            <About />
          </SectionWrapper>
          
          <div className="w-full relative">
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col px-6 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24 space-y-32">
              <SectionWrapper id="tech-week-section">
                <TechWeek />
              </SectionWrapper>
              
              <SectionWrapper id="speakers">
                <Speakers />
              </SectionWrapper>
              
              <SectionWrapper id="sponsors">
                <Technologies />
              </SectionWrapper>
              
              <div id="gallery-section" className="w-full relative py-12">
                <Gallery />
              </div>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
