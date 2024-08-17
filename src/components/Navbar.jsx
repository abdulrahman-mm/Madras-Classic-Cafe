import { FaTimes } from "react-icons/fa";
import { LINKS } from "../constants";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 z-50 flex w-full flex-col items-center justify-center"
    >
      <div className="flex md:w-4/5 w-full md:rounded-full items-center justify-between overflow-y-hidden py-3 px-5 backdrop-blur-xl">
        <a
          href="#hero"
          className="font-semibold text-2xl tracking-wide cursor-pointer"
        >
          MCC
        </a>
        <div className="space-x-6 max-md:hidden flex">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-lg ${
                index !== 0 ? " pl-2" : ""
              } hover:opacity-50`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-2xl md:hidden">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className="block p-4 uppercase tracking-tighter"
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
