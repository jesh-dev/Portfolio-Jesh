// Hero.jsx
import { motion } from "framer-motion";
import Profile from '../assets/Images/profile.png';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left mt-10 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
       
      <motion.h1
  className="text-4xl md:text-6xl uppercase font-bold text-gray-900 dark:text-white mb-4 typing-effect"
>
  Jeshrun Lawrence
</motion.h1>



        <h2 className="text-xl uppercase md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          Fullstack Developer
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
          I craft beautiful and functional web interfaces using React, Tailwind CSS, and modern frontend tools. Passionate about creating sleek user experiences.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white dark:bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-400 transition-all"
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
          src= {Profile} // Replace with your path
          alt="Jeshrun Lawrence"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </motion.div>
    </section>
  );
}
