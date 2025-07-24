import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';

const icons = {
  parks: 'https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=48&q=75',
  resorts: 'https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75',
  offers: 'https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75',
  timings: 'https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=48&q=75',
};

const SidebarMenu = ({ open, onClose, parksDropdown, setParksDropdown, resortsDropdown, setResortsDropdown, LinksDropdown, setLinksDropdown }) => (
  <div className={`fixed top-0 right-0 h-full w-[480px] bg-white shadow-2xl z-[2000] transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
    <div className="flex items-center justify-between px-6 py-6">
      {/* Logo */}
      <img
        src="https://d22pimhl2qmbj7.cloudfront.net/public/wonderla_logo_9d520a1eac.webp?w=256&q=75"
        alt="Wonderla Logo"
        width={132}
        height={52}
        className="object-contain"
      />
      {/* Close Button */}
      <button
        onClick={onClose}
        className="p-2 text-gray-600 hover:text-gray-900 rounded-full border border-gray-300"
      >
        <FaTimes className="text-base" />
      </button>
    </div>
    <div className="flex flex-col overflow-y-auto h-[calc(100vh-96px)] scrollbar-hide">
      {/* Parks Dropdown */}
      <div>
        <div className="px-6 py-2.5">
          <button onClick={() => setParksDropdown((v) => !v)} className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={icons.parks} alt="Parks" className="w-8 h-8" />
              <div className="text-left">
                <h3 className="font-medium font-mulish text-xl capitalize">Parks</h3>
                <div className="text-xs text-gray-500">Explore your favourite Wonderla Park</div>
              </div>
            </div>
            {parksDropdown ? <FaChevronUp className="text-xs text-[rgb(51,77,207)]" /> : <FaChevronDown className="text-xs text-[rgb(51,77,207)]" />}
          </button>
          {parksDropdown && (
            <div className="pl-12 pt-2">
              <a href="#" className="block py-1 text-gray-600 text-sm">Kochi</a>
              <a href="#" className="block py-1 text-gray-600 text-sm">Bengaluru</a>
              <a href="#" className="block py-1 text-gray-600 text-sm">Hyderabad</a>
            </div>
          )}
        </div>
        {/* Separator under Parks */}
        <div className="px-6"><div className="border-t border-gray-200 w-full"></div></div>
      </div>
      {/* Resorts Dropdown */}
      <div>
        <div className="px-6 py-2.5">
          <button onClick={() => setResortsDropdown((v) => !v)} className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={icons.resorts} alt="Resorts" className="w-8 h-8" />
              <div className="text-left">
                <h3 className="font-medium font-mulish text-xl capitalize">Resorts</h3>
                <div className="text-xs text-gray-500">Get a rejuvenating experience at Wonderla Resort</div>
              </div>
            </div>
            {resortsDropdown ? <FaChevronUp className="text-xs text-[rgb(51,77,207)]" /> : <FaChevronDown className="text-xs text-[rgb(51,77,207)]" />}
          </button>
          {resortsDropdown && (
            <div className="pl-12 pt-2">
              <a href="#" className="block py-1 text-gray-600 text-sm">Bengaluru Resort</a>
            </div>
          )}
        </div>
        {/* Separator under Resorts */}
        <div className="px-6"><div className="border-t border-gray-200 w-full"></div></div>
      </div>
      {/* Offers & Combos */}
      <div>
        <div className="px-6 py-2.5">
          <div className="flex items-center gap-4">
            <img src={icons.offers} alt="Offers" className="w-8 h-8" />
            <div className="text-left">
              <h3 className="font-medium font-mulish text-xl capitalize">Offers & combos</h3>
              <div className="text-xs text-gray-500">Plan the perfect day with exciting offers</div>
            </div>
          </div>
        </div>
        {/* Separator under Offers */}
        <div className="px-6"><div className="border-t border-gray-200 w-full"></div></div>
      </div>
      {/* Timings and Guidelines */}
      <div>
        <div className="px-6 py-2.5">
          <div className="flex items-center gap-4">
            <img src={icons.timings} alt="Timings and Guidelines" className="w-8 h-8" />
            <div className="text-left">
              <h3 className="font-medium font-mulish text-xl capitalize">Timings and guidelines</h3>
              <div className="text-xs text-gray-500">Know the timings and other guidelines</div>
            </div>
          </div>
        </div>
        {/* Separator under Timings and Guidelines */}
        <div className="px-6"><div className="border-t border-gray-200 w-full"></div></div>
      </div>
      {/* Special Action Items */}
      <div className="px-6 flex flex-col gap-3 mt-4">
        {/* Group Booking */}
        <a href="#" className="flex items-center gap-4 rounded-lg bg-[rgb(250,214,0)] px-4 py-2.5">
          <img src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75" alt="Group Booking" className="w-8 h-8" />
          <div className="text-left">
            <span className="font-medium font-mulish text-xl capitalize text-gray-900">Group Booking</span>
            <div className="text-xs text-gray-500">Reach out to wonderla team</div>
          </div>
        </a>
        {/* Tour Operator Porter */}
        <a href="#" className="flex items-center gap-4 rounded-lg bg-[rgb(51,77,207)] px-4 py-2.5">
          <img src="https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=96&q=75" alt="Tour Operator Porter" className="w-8 h-8" />
          <div className="text-left">
            <span className="font-medium font-mulish text-xl capitalize text-white">Tour Operator Porter</span>
            <div className="text-xs text-white/80">Reach out to wonderla team</div>
          </div>
        </a>
        {/* How to Reach */}
        <a href="#" className="flex items-center gap-4 rounded-lg bg-[rgb(250,214,0)] px-4 py-2.5">
          <img src="https://d22pimhl2qmbj7.cloudfront.net/public/how_to_reach_f52afe8765.svg?w=96&q=75" alt="How to Reach" className="w-8 h-8" />
          <div className="text-left">
            <span className="font-medium font-mulish text-xl capitalize text-gray-900">How to Reach</span>
            <div className="text-xs text-gray-500">Directions, Routes & Travel Options</div>
          </div>
        </a>
      </div>
      {/* About Us */}
      <div>
        <div className="px-6 py-2.5">
          <div className="flex items-center gap-4">
            <img src="https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=48&q=75" alt="Offers" className="w-8 h-8" />
            <div className="text-left">
              <h3 className="font-medium font-mulish text-xl capitalize">About Us</h3>
              <div className="text-xs text-gray-500">Know all about Wonderla</div>
            </div>
          </div>
        </div>
        {/* Separator under Offers */}
        <div className="px-6"><div className="border-t border-gray-200 w-full"></div></div>
      </div>
      <div>
        <div className="px-6 py-2.5">
          <button onClick={() => setLinksDropdown((v) => !v)} className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=48&q=75" alt="Parks" className="w-8 h-8" />
              <div className="text-left">
                <h3 className="font-medium font-mulish text-xl capitalize">Quick Links</h3>
                <div className="text-xs text-gray-500">Explore all other relevant information here</div>
              </div>
            </div>
            {LinksDropdown ? <FaChevronUp className="text-xs text-[rgb(51,77,207)]" /> : <FaChevronDown className="text-xs text-[rgb(51,77,207)]" />}
          </button>
          {LinksDropdown && (
            <div className="pl-12 pt-2">
              <a href="#" className="block text-sm">Restaurants</a>
              <a href="#" className="block text-sm">Merchandise</a>
              <a href="#" className="block text-sm">Events</a>
            </div>
          )}
        </div>
        <div className="px-6 mb-[40px]"><div className="border-t border-gray-200 w-full"></div></div>
        {/* Contact Us */}
        <div>
        <div className="px-6 py-2.5">
          <a href="https://www.wonderla.com/contact-us" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-4">
            <img src="https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=48&q=75" alt="Contact Us" className="w-8 h-8" />
            <div className="text-left">
              <h3 className="font-medium font-mulish text-xl capitalize">Contact Us</h3>
              <div className="text-xs text-gray-500">Get in touch wonderla team</div>
            </div>
          </div>
          </a>
        </div>
        {/* Separator under Contact Us */}
        <div className="px-6 mb-20"><div className="border-t border-gray-200 w-full"></div></div>
      </div>
      </div>
    </div>
  </div>
);

export default SidebarMenu; 