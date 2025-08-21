// Components/SkillBar.jsx
import { motion } from "framer-motion";

export default function SkillBar({ skill, level }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-md font-medium text-gray-800 dark:text-white">{skill}</span>
        <span className="text-sm text-gray-600 dark:text-gray-300">{level}%</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-violet-500 to-orange-500 h-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
