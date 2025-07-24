import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as KidsIcon } from "../assets/kids.svg";
import { ReactComponent as LandIcon } from "../assets/land.svg";
import { ReactComponent as WaterIcon } from "../assets/water.svg";
import IconicRides from "./IconicRides";

const CategorySidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [category, setCategory] = useState("land");

  useEffect(() => {
    setCategory(categories[selectedIndex].name.toLowerCase());
  }, [selectedIndex]);

  const categories = [
    {
      name: "Land",
      count: "72 Rides",
      Icon: LandIcon,
      position: {
        top: "70px",
        left: "60px",
        labelTop: "70px",
        labelLeft: "195px",
        countTop: "100px",
        countLeft: "195px",
      },
    },
    {
      name: "Water",
      count: "45 Rides",
      Icon: WaterIcon,
      position: {
        top: "260px",
        left: "150px",
        labelTop: "275px",
        labelLeft: "280px",
        countTop: "305px",
        countLeft: "280px",
      },
    },
    {
      name: "Kids",
      count: "30 Rides",
      Icon: KidsIcon,
      position: {
        top: "470px",
        left: "60px",
        labelTop: "460px",
        labelLeft: "195px",
        countTop: "490px",
        countLeft: "195px",
      },
    },
  ];

  const catPosition = [
    { position: { top: "20px", left: "10px" } },
    { position: { top: "220px", left: "100px" } },
    { position: { top: "420px", left: "5px" } },
  ];

  return (
    <div className="flex items-start gap-10 pl-10 mt-[150px]">
      {/* Donut Section */}
      <div className="relative w-[600px] h-[600px] shrink-0">
        {/* Outer Half Donut */}
        <div
          className="absolute top-0 -left-[370px] w-full h-full rounded-full z-0"
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
        <div className="absolute top-[90px] -left-[280px] size-[420px] bg-[rgb(34,48,74)] rounded-full z-1" />

        {/* Selector Circle */}
        <motion.div
          className="absolute w-[160px] h-[160px] rounded-full border-[10px] bg-white border-[rgb(250,214,0)] z-10"
          animate={{
            top: catPosition[selectedIndex].position.top,
            left: catPosition[selectedIndex].position.left,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Icons + Labels */}
        <div className="absolute w-full h-full z-20">
          {categories.map((cat, i) => {
            const Icon = cat.Icon;
            const isActive = selectedIndex === i;

            return (
              <React.Fragment key={cat.name}>
                <button
                  onClick={() => setSelectedIndex(i)}
                  className={`absolute w-[60px] h-[60px] transition-all duration-300 ${
                    isActive ? "scale-125" : ""
                  }`}
                  style={{
                    top: cat.position.top,
                    left: cat.position.left,
                  }}
                >
                  <Icon className="w-full h-full fill-[#334DCF]" />
                </button>

                {/* Label */}
                <div className="flex flex-col items-center font-mulish">
                  <span
                    className="absolute text-white text-xl"
                    style={{
                      top: cat.position.labelTop,
                      left: cat.position.labelLeft,
                    }}
                  >
                    {cat.name}
                  </span>

                  <span
                    className="absolute bg-blue-400 text-white text-sm rounded-full px-3"
                    style={{
                      top: cat.position.countTop,
                      left: cat.position.countLeft,
                    }}
                  >
                    {cat.count}
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Iconic Rides Section */}
    
        <IconicRides currentCategory={category} />

    </div>
  );
};

export default CategorySidebar;