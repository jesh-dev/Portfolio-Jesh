import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import ResumePreviewModal from "./ResumePreviewModal";
import resume from '../assets/Images/resume.pdf'

export default function ResumeSection() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20 px-4 scroll-smooth" id="resume">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-syne font-bold text-gray-900 dark:text-white tracking-wider mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Download or preview my professional resume.
        </motion.p>

        <div className="flex justify-center gap-4 flex-wrap">
          <motion.a
            href={ resume }
            download
            className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>

          <motion.button
            onClick={() => setPreviewOpen(true)}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-5 h-5" />
            Preview CV
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <ResumePreviewModal isOpen={previewOpen} onClose={() => setPreviewOpen(false)} />
    </section>
  );
}
