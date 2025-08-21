// Components/SkillsSection.jsx
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";

const skills = [
  { skill: "JavaScript", level: 60 },
  { skill: "React.js", level: 80 },
  { skill: "Tailwind CSS", level: 70 },
  { skill: "Laravel", level: 50 },
  { skill: "Node.js", level: 40 },
  { skill: "MySQL", level: 60 },
  { skill: "Git & GitHub", level: 60 },
];

export default function SkillsSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4 scroll-smooth" id="skills">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-syne font-bold text-transparent bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((s, i) => (
            <SkillBar key={i} skill={s.skill} level={s.level} />
          ))}
        </div>
      </div>
    </section>
  );
}
