import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Projects() {

  const [animating, setAnimating] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="px-4 py-16 bg-white dark:bg-gray-950">
      {/* Footer */}
      <footer className="mt-24 border-t pt-12 dark:border-gray-800 text-center">
        <motion.h4
          className="text-2xl font-bold mb-4 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stay Updated
        </motion.h4>

        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>

        <div className="flex justify-center space-x-4 mb-6">
          {['facebook', 'twitter', 'github', 'linkedin'].map((platform, i) => (
            <motion.a
              key={platform}
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <i className={`fab fa-${platform} text-xl`}></i>
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Jeshrun.dev. All rights reserved.</p>
      </footer>

      <AnimatePresence>
        {showTopButton && (
          <motion.button
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
