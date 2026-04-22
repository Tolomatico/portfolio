"use client";

import { motion } from "framer-motion";
import { skills as data } from "@/data/data";
import { FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiNestjs, SiPostgresql, SiMongodb, SiExpress } from "react-icons/si";

const iconMap: Record<string, React.ReactNode> = {
  Javascript: <FaJs className="text-yellow-500 text-xl" />,
  React: <FaReact className="text-blue-500 text-xl" />,
  Next: <SiNextdotjs className="text-white text-xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-xl" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-500 text-xl" />,
  Node: <FaNodeJs className="text-green-600 text-xl" />,
  Express: <SiExpress className="text-gray-300 text-xl" />,
  Nest: <SiNestjs className="text-red-500 text-xl" />,
  SQL: <FaDatabase className="text-blue-400 text-xl" />,
  MongoDb: <SiMongodb className="text-green-500 text-xl" />,
  PostgreSQL: <SiPostgresql className="text-blue-700 text-xl" />,
};

export default function Skills() {
  const skills = data;

  return (
    <div className="flex flex-col items-center w-full">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 text-3xl md:text-4xl font-bold dark:text-white"
      >
        Skills
      </motion.h1>
      
      <div className="w-full max-w-4xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-2">
                {iconMap[skill] || <FaJs className="text-yellow-500 text-xl" />}
              </div>
              <span className="text-sm md:text-base font-semibold dark:text-white">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}