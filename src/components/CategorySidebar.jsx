import React, { useState } from "react";
import { motion } from "framer-motion";
import kids from "../assets/kids.svg";
import land from "../assets/land.svg";
import water from "../assets/water.svg";

const CategorySidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Pre-defined logo positions
  const logoPositions = [
    { top: "75px", left: "90px" }, // Land
    { top: "250px", left: "180px" }, // Water
    { bottom: "75px", left: "90px" }, // Kids
  ];


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

      {/* Inner circle (donut hole) */}
      <div className="absolute top-[90px] -left-[250px] size-[420px] bg-[rgb(34,48,74)] rounded-full z-1" />

      {/* Logo Buttons */}
      <div className="absolute w-full h-full z-10">
        <button
          onClick={() => setSelectedIndex(0)}
          className="absolute w-[60px] h-[60px] text-[rgb(51,77,207)]"
          style={{ top: "75px", left: "90px" }}
        >
          <img
            src={land}
            alt="Land"
            className="w-full h-full object-contain"
          />
        </button>

        <button
          onClick={() => setSelectedIndex(1)}
          className="absolute w-[60px] h-[60px] text-[rgb(51,77,207)]"
          style={{ top: "250px", left: "180px" }}
        >
          <img
            src={water}
            alt="Water"
            className="w-full h-full object-contain"
          />
        </button>

        <button
          onClick={() => setSelectedIndex(2)}
          className="absolute w-[60px] h-[60px] text-[rgb(51,77,207)]"
          style={{ bottom: "75px", left: "90px" }}
        >
          <img
            src={kids}
            alt="Kids"
            className="w-full h-full object-contain"
          />
        </button>
      </div>

      {/* Selector (yellow outer + white inner) */}
      <motion.div
        className="absolute w-[150px] h-[150px] rounded-full bg-[rgb(250,214,0)] flex items-center justify-center z-20"
        animate={{
          top: logoPositions[selectedIndex].top,
          left: logoPositions[selectedIndex].left,
          right: logoPositions[selectedIndex].right || "auto",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="w-[120px] h-[120px] bg-white rounded-full" />
      </motion.div>
    </div>
  );
};

export default CategorySidebar;
