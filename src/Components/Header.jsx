import { useState, useEffect } from "react";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );
  const [dropdown, setDropdown] = useState(false);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          JESH
        </h1>

        {/* Desktop Nav */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200 relative">
            <a href="#home" className="hover:text-blue-500 transition-all">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500 transition-all">
              About Us
            </a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-1 hover:text-blue-500 transition-all"
              >
                Others <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2"
                  >
                    <a
                      href="#projects"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Projects
                    </a>
                    <a
                      href="#blog"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Blog
                    </a>
                    <a
                      href="#contact"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Contact
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            whileTap={{ rotate: 360 }}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
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

      {/* Mobile Sidebar */}
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
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-xl font-bold"
            >
              &times;
            </button>

            {/* Sidebar Nav */}
            <nav className="flex flex-col gap-6 text-gray-800 dark:text-gray-200 mt-10">
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
              <a href="#about" className="hover:text-blue-500">
                About Us
              </a>

              {/* Dropdown inside Mobile */}
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer hover:text-blue-500">
                  Others
                  <ChevronDown
                    size={16}
                    className="group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <a href="#projects" className="hover:text-blue-500">
                    Projects
                  </a>
                  <a href="#blog" className="hover:text-blue-500">
                    Blog
                  </a>
                  <a href="#contact" className="hover:text-blue-500">
                    Contact
                  </a>
                </div>
              </details>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
