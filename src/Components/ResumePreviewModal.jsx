// ResumePreviewModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ResumePreviewModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[90%] md:w-[800px] h-[90%] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Resume Preview</h2>
              <button onClick={onClose} className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition">
                <X />
              </button>
            </div>

            {/* Resume Content */}
            <div className="flex-1 overflow-auto">
              <iframe
                src="/Assets/resume.pdf"
                title="Resume"
                className="w-full h-full"
                frameBorder="0"
              ></iframe>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
