import { useRef, useEffect } from "react";
import footerData from "../data/footer";

const FooterSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 2;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden mt-10 py-10 px-4">
      <div
        ref={scrollRef}
        className="flex gap-5 whitespace-nowrap overflow-x-auto scrollbar-hide"
      >
        {footerData.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-shrink-0 min-w-max gap-5"
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-[118px] h-[68px] object-cover rounded-full"
            />
            <div className="flex flex-row items-center gap-2">
              <h3 className="font-mulish capitalize text-[56px] font-black text-white !leading-none sm:text-[42px]">
                {item.count} 
              </h3>
              <span className="inline-block font-mulish !leading-[1.255] text-white text-lg font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
                {item.name}
              </span>
            </div>
            <span className="inline-block size-[18px] rounded-full bg-[rgb(250,214,0)]"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSlider;
