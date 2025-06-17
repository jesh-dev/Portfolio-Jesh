import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Blog() {
    // State for blog modal
const [selectedBlog, setSelectedBlog] = useState(null);

// Blog content array
const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title 1",
    summary: "A short description of what the blog post is about. It's engaging and informative.",
    content: "This is the full content of Blog Post 1. Here you can elaborate on the topic in more detail, provide insights, and useful examples to your readers."
  },
  {
    id: 2,
    title: "Blog Post Title 2",
    summary: "A short description of what the blog post is about. It's engaging and informative.",
    content: "This is the full content of Blog Post 2. Extend your introduction with useful explanations, code examples, or stories."
  },
  {
    id: 3,
    title: "Blog Post Title 3",
    summary: "A short description of what the blog post is about. It's engaging and informative.",
    content: "This is the full content of Blog Post 3. Dive deeper into the subject matter, include takeaways, and engage the reader."
  }
];

  return (
    <>
{/* Blog Section */}
  <div className="mt-20 max-w-6xl mx-auto scroll-smooth" id="blog">
        <motion.h3
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Blog Posts
        </motion.h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((blog, i) => (
            <motion.div
              key={blog.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              onClick={() => setSelectedBlog(blog)}
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {blog.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {blog.description}
              </p>
              <span className="text-blue-600 hover:underline">Read More →</span>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedBlog && (
            <motion.div
              className="fixed inset-0 bg-transparent backdrop-blur-lg bg-opacity-60 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedBlog.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedBlog.content}
                </p>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </>
  );
}

