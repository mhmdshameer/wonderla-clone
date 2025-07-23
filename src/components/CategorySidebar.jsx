import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Ferris from '../assets/Ferris.png';
import Water from '../assets/Water.webp';

const logos = [Ferris, Water, Ferris];

const arcAngles = [240, 270, 300]; // degrees along the arc
const radius = 110;

const CategorySidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative size-[600px] mt-[150px]">
      {/* Outer Half Donut */}
      <div
  className="absolute top-0 -left-[350px] w-full h-full rounded-full z-0"
  style={{
    background: `conic-gradient(
      from 0deg,
      rgb(232, 233, 241) -55deg,
      rgb(250, 213, 0) 15deg,
      rgb(250, 213, 0) 65deg,
      rgb(232, 233, 241) 135deg,
      rgb(232, 233, 241)
    )`,
  }}
/>

      {/* Inner Background to create donut effect */}
      <div className="absolute top-[90px] pb-[100px] -left-[250px] size-[420px] bg-[rgb(34,48,74)] rounded-full z-1" />

      {/* Logos Positioned on Arc */}
      <div className="absolute w-full h-full z-10 origin-center flex items-center justify-center">
        <div className="relative w-[220px] h-[220px]">
          {logos.map((logo, i) => {
            const angle = arcAngles[i];
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${110 + x}px`, top: `${110 - y}px` }}
              >
                <img src={logo} alt={`Logo ${i}`} className="w-10 h-10" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Selector (Outer Circle + Inner White Circle) */}
      <motion.div
        className="absolute w-[64px] h-[64px] rounded-full bg-[#FBD462] flex items-center justify-center z-20"
        animate={{
          top: `${110 - radius * Math.sin((arcAngles[selectedIndex] * Math.PI) / 180) - 32}px`,
          left: `${110 + radius * Math.cos((arcAngles[selectedIndex] * Math.PI) / 180) - 32}px`,
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-[36px] h-[36px] bg-white rounded-full" />
      </motion.div>
    </div>
  );
};

export default CategorySidebar;
