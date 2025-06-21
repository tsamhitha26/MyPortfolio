import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="flex space-x-8 text-lg font-medium">
      <li>
        <a href="#home" className="text-white hover:text-gray-400 transition">Home</a>
      </li>
      <li>
        <a href="#about" className="text-white hover:text-gray-400 transition">About</a>
      </li>
      <li>
        <a href="#work" className="text-white hover:text-gray-400 transition">Work</a>
      </li>
      <li>
        <a href="#contact" className="text-white hover:text-gray-400 transition">Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl  font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Samhitha
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
