// Navbar.jsx
import { useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  const handleScroll = (sectionId) => {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors scroll-smooth duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Jeshrun.dev</h1>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200">
            <a href="#home" className="hover:text-blue-500 transition-all">Home</a>
            <a href="#resume" className="hover:text-blue-500 transition-all">Resume</a>
            <a href="#skills" className="hover:text-blue-500 transition-all">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-all">Projects</a>
            <a href="#blog" className="hover:text-blue-500 transition-all">Blog</a>
            <a href="#testimonials" className="hover:text-blue-500 transition-all">Testimonials</a>
            <a href="#contact" className="hover:text-blue-500 transition-all">Contact</a>
            <a href="#newsletter" className="hover:text-blue-500 transition-all">Newsletter</a>
            <a href="#about" className="hover:text-blue-500 transition-all">About</a>
          </nav>

          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            whileTap={{ rotate: 360 }}
          >
            {darkMode === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}

          </motion.button>

          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            initial={false}
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-6 h-[2px] bg-gray-800 dark:bg-white mb-1" />
            <div className="w-6 h-[2px] bg-gray-800 dark:bg-white mb-1" />
            <div className="w-6 h-[2px] bg-gray-800 dark:bg-white" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 p-6 shadow-lg md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {/* ✅ Close Button inside sidebar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-xl font-bold"
              aria-label="Close Menu"
            >
              &times;
            </button>

            <nav className="flex flex-col gap-6 text-gray-800 dark:text-gray-200 mt-10">
              {/* <a href="#" className="hover:text-blue-500">Home</a>
              <a href="#" className="hover:text-blue-500">About</a>
              <a href="#" className="hover:text-blue-500">Projects</a>
              <a href="#" className="hover:text-blue-500">Blog</a> */}
              {/* <a href="#" >Contact</a> */}
              <button onClick={() => handleScroll('home')} className="hover:text-blue-500 hover:border-white hover:border-t-2 pr-40">Home</button>
              <button onClick={() => handleScroll('resume')} className="hover:text-blue-500 pr-40">Resume</button>
              <button onClick={() => handleScroll('skills')} className="hover:text-blue-500 pr-45">Skill</button>
              <button onClick={() => handleScroll('projects')} className="hover:text-blue-500 pr-40">Projects</button>
              <button onClick={() => handleScroll('blog')} className="hover:text-blue-500 pr-45">Blog</button>
              <button onClick={() => handleScroll('testimonials')} className="hover:text-blue-500 pr-40">Testimonials</button>
              <button onClick={() => handleScroll('contact')} className="hover:text-blue-500 pr-40">Contact</button>
              <button onClick={() => handleScroll('newsletter')} className="hover:text-blue-500 pr-40">Newsletter</button>
              {/* <button onClick={() => handleScroll('contact')} className="hover:text-blue-500 pr-40">Contact</button> */}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
