
import React, { useRef } from "react";
import rides from "../data/rides";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IconicRides = ({ currentCategory }) => {
  const scrollRef = useRef(null);
  const rideData = rides[currentCategory] || [];

  const scroll = (dir) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex mt-10 -ml-[150px]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-mulish text-[56px] font-black text-white uppercase">
          Our Iconic Rides
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="size-10 rounded-full bg-yellow text-blue flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="size-10 rounded-full bg-yellow text-blue flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-6 flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
      >
        {rideData.map((ride) => (
          <div
            key={ride.id}
            className="relative flex-shrink-0 w-[229px] h-[394px] rounded-t-[26px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${ride.video})` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,77,207,0)_42.94%,#334DCF_100%)] lg:bg-[linear-gradient(180deg,rgba(34,48,74,0)_34.08%,#22304A_100%)] p-4 flex flex-col justify-end">
              <h3 className="text-lg font-mulish capitalize !leading-[1.255] font-bold text-white">
                {ride.title}
              </h3>
              <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] mt-px text-white opacity-80">
                {ride.place}
              </p>
              <div className="mt-1.5 line-clamp-4 text-xs leading-[1.255] text-white">
                {ride.desc}
              </div>
              <a
                href="https://www.wonderla.com/bengaluru/rides/jumping-frog"
                className="h-10 w-full max-w-[150px] rounded-lg text-xs font-black uppercase leading-tight flex items-center justify-center text-blue bg-yellow mt-2"
              >
                Ride details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconicRides;

