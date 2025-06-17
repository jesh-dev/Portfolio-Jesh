import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <section className="px-4 py-16 bg-white dark:bg-gray-950 scroll-smooth" id="projects">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700"
            } transition-all duration-300`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border dark:border-gray-800 rounded-lg shadow-md bg-gray-100 dark:bg-gray-900 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Category: {project.category}
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-transparent backdrop-blur-xl bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
