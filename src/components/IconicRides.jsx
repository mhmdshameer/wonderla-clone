import { useRef, useEffect } from "react";
import rides from "../data/rides";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IconicRides = ({ currentCategory }) => {
  const scrollRef = useRef(null);
  const rideData = rides[currentCategory] || [];

  const scroll = (dir) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      let scrollAmount =
        dir === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      if (dir === "right" && scrollLeft + clientWidth >= scrollWidth) {
        scrollAmount = 0;
      }

      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 3000);
    return () => clearInterval(interval);
  }, [currentCategory]);

  return (
    <div className="relative flex flex-col w-full max-w-[calc(100vw-360px)] -ml-[240px] overflow-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl font-mulish text-[56px] font-black text-white uppercase my-7">
          Our Iconic Rides
        </h1>
        <div className="flex gap-2 pr-10">
          <button
            onClick={() => scroll("left")}
            className="size-[50px] rounded-full bg-[rgb(250,214,0)] text-[rgb(51,77,207)] text-xl flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="size-[50px] rounded-full bg-[rgb(250,214,0)] text-[rgb(51,77,207)] text-xl flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ scrollBehavior: "smooth", paddingBottom: "1rem" }}
      >
        {rideData.map((ride, index) => (
          <div
            key={`${ride.name}-${index}`}
            className="relative flex-shrink-0 w-[246px] h-[346px] rounded-t-[26px] my-3 overflow-hidden bg-black"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={ride.video}
              poster="https://via.placeholder.com/229x394.png?text=Loading..."
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,77,207,0)_42.94%,#334DCF_100%)] lg:bg-[linear-gradient(180deg,rgba(34,48,74,0)_34.08%,#22304A_100%)] p-4 flex flex-col justify-end">
              <h3 className="text-lg font-mulish capitalize !leading-[1.255] font-bold text-white">
                {ride.name}
              </h3>
              <p className="text-xs font-mulish font-normal !leading-[1.255] mt-px text-white opacity-80">
                {ride.place}
              </p>
              <div className="mt-1.5 line-clamp-4 text-xs leading-[1.255] text-white">
                {ride.desc}
              </div>
              <a
                href="https://www.wonderla.com/bengaluru/rides/recoil"
                className="h-10 w-full max-w-[150px] rounded-lg text-xs font-black uppercase leading-tight flex items-center justify-center text-[rgb(51,77,207)] bg-[rgb(250,214,0)] mt-2"
              >
                Ride details
              </a>
            </div>
          </div>
        ))}
      </div>
        <a
  href="https://www.wonderla.com/rides"
  className="inline-block w-full max-w-[328px]"
>
  <div className="capitalize h-14 w-full max-w-[328px] rounded-full text-base font-extrabold leading-tight flex items-center justify-center text-[rgb(51,77,207)] bg-[rgb(250,214,0)] mb-0.5 mt-[60px]">
    Explore All Rides
  </div>
</a>
    </div>
  );
};

export default IconicRides;
