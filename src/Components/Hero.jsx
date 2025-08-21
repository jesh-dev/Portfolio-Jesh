import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../assets/Images/mrj.png";
import "../index.css"; // ✅ Ensure CSS for typing effect

export default function Hero() {
  const roles = ["Fullstack Developer", "UI Designer", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000); // Change every 4s
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center
     px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-smooth"
      id="home"
    >
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left mt-10 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ✅ Typing Effect for Name */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold 
                     dark:text-white mb-4 typing-effect
                     bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent"
        >
          Jeshrun Lawrence
        </motion.h1>

        {/* ✅ Fade Effect for Roles */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentRole}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold uppercase text-violet-600 dark:text-orange-500 mb-4"
          >
            {roles[currentRole]}
          </motion.h2>
        </AnimatePresence>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
          I craft beautiful and functional web interfaces using React, Tailwind
          CSS, and modern frontend tools. Passionate about creating sleek user
          experiences.
        </p>
        <a
          href="#projects"
          className="inline-block bg-violet-600 shadow-xl shadow-violet-500 text-white dark:bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:scale-125 hover:shadow-orange-500 dark:hover:bg-orange-400 active:animate-ping transition-all duration-500"
        >
          View Projects
        </a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={Profile}
          alt="Jeshrun Lawrence"
          className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-0 shadow-black/50 backdrop-blur-xl border-blue-500 shadow-xl"
        />
      </motion.div>
    </section>
  );
}
