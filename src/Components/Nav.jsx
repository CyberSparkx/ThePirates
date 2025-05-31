import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/60 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Goonies</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-lg font-semibold">
          <p className="hover:underline cursor-pointer">Plot</p>
          <p className="hover:underline cursor-pointer">Goonies</p>
          <p className="hover:underline cursor-pointer">Credits</p>
          <p className="hover:underline cursor-pointer">Gallery</p>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer z-50" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-lg font-semibold">
          <p className="hover:underline cursor-pointer">Plot</p>
          <p className="hover:underline cursor-pointer">Goonies</p>
          <p className="hover:underline cursor-pointer">Credits</p>
          <p className="hover:underline cursor-pointer">Gallery</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
