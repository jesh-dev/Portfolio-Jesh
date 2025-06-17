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

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Jeshrun.dev</h1>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200">
            <a href="#" className="hover:text-blue-500 transition-all">Home</a>
            <a href="#" className="hover:text-blue-500 transition-all">About</a>
            <a href="#" className="hover:text-blue-500 transition-all">Projects</a>
            <a href="#" className="hover:text-blue-500 transition-all">Blog</a>
            <a href="#" className="hover:text-blue-500 transition-all">Contact</a>
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
              <a href="#" className="hover:text-blue-500">Home</a>
              <a href="#" className="hover:text-blue-500">About</a>
              <a href="#" className="hover:text-blue-500">Projects</a>
              <a href="#" className="hover:text-blue-500">Blog</a>
              <a href="#" className="hover:text-blue-500">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
