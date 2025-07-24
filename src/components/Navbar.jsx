import { useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaGift, FaChair, FaCalendarAlt, FaTicketAlt, FaChevronDown, FaChevronUp, FaBars, FaUser } from 'react-icons/fa';
import SidebarMenu from './SidebarMenu';

const Navbar = () => {
  const [parkDropdown, setParkDropdown] = useState(false);
  const [resortDropdown, setResortDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarParksDropdown, setSidebarParksDropdown] = useState(false);
  const [sidebarResortsDropdown, setSidebarResortsDropdown] = useState(false);
  const [sidebarLinksDropdown, setSidebarLinksDropdown] = useState(false);
  const navLinks = [
    { name: 'PARK', icon: <FaMapMarkerAlt />, dropdown: true, setter: setParkDropdown, state: parkDropdown, items: ['Kochi', 'Bengaluru', 'Hyderabad'] },
    { name: 'RESORTS', icon: <FaBuilding />, dropdown: true, setter: setResortDropdown, state: resortDropdown, items: ['Bengaluru Resort'] },
    { name: 'OFFERS', icon: <FaGift /> },
    { name: 'RIDES', icon: <FaTicketAlt /> },
    { name: 'RESTAURANTS', icon: <FaChair /> },
    { name: 'EVENTS', icon: <FaCalendarAlt /> },
  ];

  return (
    <>
      <div className="fixed left-0 right-0 top-0 lg:left-12 lg:right-12 lg:top-[35px] xl:left-[60px] xl:right-[60px] z-[1000]">
        <div className="bg-white flex h-[68px] items-center justify-between gap-5 rounded-bl-2xl rounded-br-2xl px-4 transition duration-300 ease-in-out md:h-[68px] md:pl-[30px] md:pr-[38px] lg:rounded-2xl text-blue-gray shadow-[0px_4px_8px_0px_#0000001A] lg:shadow-none ">
          <a href="/" className="inline-block">
            <div
              className="inline-block capitalize -ml-4 aspect-[118/38] w-[132px] lg:w-[152px]"
              tabIndex="0"
              style={{ transform: "none" }}
            >
              <img
                fetchPriority="high"
                width="150"
                height="48"
                decoding="async"
                data-nimg="1"
                className="object-contain h-[48px] w-[150px]"
                srcSet="https://d22pimhl2qmbj7.cloudfront.net/public/wonderla_logo_9d520a1eac.webp?w=256&q=75 1x https://d22pimhl2qmbj7.cloudfront.net/public/wonderla_logo_9d520a1eac.webp?w=256&q=75 2x"
                src="https://d22pimhl2qmbj7.cloudfront.net/public/wonderla_logo_9d520a1eac.webp?w=256&q=75"
                alt="Desktop Logo"
                style={{ color: "transparent" }}
              />
            </div>
          </a>
          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => link.dropdown && link.setter(true)}
                  onMouseLeave={() => link.dropdown && link.setter(false)}
                >
                  <a href="#" className="flex items-center gap-2 font-black font-mulish text-sm text-gray-500">
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                    {link.dropdown && (
                      <span className="ml-1 text-xs">
                        {link.state ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    )}
                  </a>
                  {link.dropdown && link.state && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                      {link.items.map(item => (
                        <a href="#" key={item} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{item}</a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:flex items-center gap-1 text-gray-500">
              <FaUser className="text-sm text-[rgb(51,77,207)]" />
              <span className="font-black font-mulish text-sm">LOGIN</span>
            </a>
            <button className="hidden sm:flex items-center gap-2 bg-[rgb(250,214,0)] text-[rgb(51,77,207)] font-black font-mulish text-xs py-2 px-4 rounded-lg">
              <span>BOOK TICKETS</span>
              <FaTicketAlt />
            </button>
            <button className="text-2xl text-[#334dcf]" onClick={() => setSidebarOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      {/* Overlay for sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[1999]"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      {/* Sidebar for mobile menu */}
      <SidebarMenu
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        parksDropdown={sidebarParksDropdown}
        setParksDropdown={setSidebarParksDropdown}
        resortsDropdown={sidebarResortsDropdown}
        setResortsDropdown={setSidebarResortsDropdown}
        LinksDropdown={sidebarLinksDropdown}
        setLinksDropdown={setSidebarLinksDropdown}
      />
    </>
  );
};

export default Navbar;
