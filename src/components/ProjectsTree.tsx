"use client";

import { motion } from "framer-motion";
import { data } from "../data/data";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";

export default function ProjectsTree() {
  const allProjects: Project[] = data;

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Línea */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-blue-200 dark:bg-blue-900 md:-translate-x-1/2" />

      {allProjects.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={item.link}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative flex items-center mb-12 ${
              isLeft ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Espacio */}
            <div className="hidden md:block flex-1" />

            {/* Punto */}
            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 z-10" />

            {/* Card */}
            <div
              className={`
                w-full max-w-md
                ml-16
                ${isLeft ? "md:mr-12 md:ml-0" : "md:ml-12"}
              `}
            >
              <ProjectCard item={item} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}