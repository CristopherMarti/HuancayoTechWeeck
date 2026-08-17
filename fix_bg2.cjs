const fs = require('fs');

let bg = fs.readFileSync('src/components/Background.tsx', 'utf8');

const newBg = `import React, { useEffect, useState } from 'react';
import FaultyTerminal from './FaultyTerminal';
import { motion } from 'motion/react';

export function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-google-grey-900 overflow-hidden">
      {/* Subtle GDG Color Glows */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-google-blue-500/10 blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-google-red-500/10 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-google-yellow-500/10 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-[20%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-google-green-500/10 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 opacity-10">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#FFFFFF"
          mouseReact={false}
          mouseStrength={0.5}
          pageLoadAnimation={true}
          brightness={0.3}
        />
      </div>
    </div>
  );
}
`

fs.writeFileSync('src/components/Background.tsx', newBg);
console.log('Background updated with GDG glows.');
