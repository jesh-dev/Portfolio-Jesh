import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const testimonialRef = useRef(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const allProjects = [
    { title: "Portfolio Website", category: "Web", image: "/images/portfolio.png" },
    { title: "E-commerce App", category: "Mobile", image: "/images/ecommerce.png" },
    { title: "Admin Dashboard", category: "Web", image: "/images/dashboard.png" },
    { title: "Chat App", category: "Mobile", image: "/images/chat.png" },
  ];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  const categories = ["All", "Web", "Mobile"];

  const testimonials = [
    {
      name: "Jane Doe",
      quote: "Working with Jeshrun was a pleasure. The quality of work exceeded my expectations!",
      role: "Product Manager at TechCorp"
    },
    {
      name: "John Smith",
      quote: "Jeshrun is a talented developer who delivers on time and communicates clearly.",
      role: "CEO at StartupX"
    },
    {
      name: "Emily Wilson",
      quote: "Creative and committed to excellence. Highly recommended!",
      role: "Freelance Designer"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setAnimating(false), 600);
  };

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 600);
  };

  return (
    <section className="px-4 py-16 bg-white dark:bg-gray-950">

      {/* Testimonials */}
      <div className="mt-20 max-w-3xl mx-auto">
        <motion.h3
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h3>

        <div className="relative">
          <motion.div
            ref={testimonialRef}
            key={testimonialIndex}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
              "{testimonials[testimonialIndex].quote}"
            </p>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              {testimonials[testimonialIndex].name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonials[testimonialIndex].role}
            </p>
          </motion.div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mb-2 mt-6">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  testimonialIndex === idx
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
