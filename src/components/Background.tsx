import React, { useEffect, useState } from 'react';
import { GridScan } from './GridScan';
import { useScroll } from 'motion/react';

export function Background() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#d9f9d9]">
      {/* GridScan 3D Animation */}
      <div className="absolute inset-0 opacity-90">
        <GridScan
          sensitivity={0.55}
          lineThickness={1.8}
          linesColor="#2e5932" // Dark green lines
          gridScale={0.12}
          scanColor="#74D724" // Neon Green scan
          scanOpacity={0.7}
          enablePost={true}
          bloomIntensity={0.6}
          chromaticAberration={0.003}
          noiseIntensity={0.01}
          lineJitter={0.03}
          scanGlow={0.8}
          scanSoftness={2}
          enableGyro={false}
          scanOnClick={false}
          scanDuration={2.0}
          scanDelay={0.0}
          scrollProgress={scrollYProgress}
        />
      </div>
    </div>
  );
}

