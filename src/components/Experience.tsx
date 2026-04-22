"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "PLAKBOX",
    role: "Full Stack Developer",
    period: "2025 - Actual",
    description: "Desarrollo de una plataforma web 3D de alta performance utilizando Vue.js y NestJS. Implementación de lógica geométrica compleja para la manipulación de objetos en el espacio, integrando un motor 3D con un sistema de gestión empresarial (SaaS)."
  },
  {
    company: "No Country",
    role: "Desarrollador Web",
    period: "2024 - 2025",
    description: "Trabajé en equipos multidisciplinares en entornos agility desarrollando aplicaciones web tanto para startups como  en proyectos con impacto social."
  },
  {
    company: "Proyectos Personales",
    role: "Desarrollador",
    period: "2023 - 2025",
    description: "Desarrollo de proyectos propios para practicar y crecer como desarrollador."
  }
];

export default function Experience() {
  return (
    <section className="py-16 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 dark:text-white"
      >
        Experiencia
      </motion.h2>

      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-blue-200 dark:bg-blue-900 transform md:-translate-x-1/2" />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Espacio vacío */}
              <div className="hidden md:block flex-1" />

              {/* Punto */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 z-10" />

              {/* Card */}
              <div
                className={`
                  flex-1 bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md
                  ml-16
                  ${isLeft ? "md:mr-12 md:ml-0" : "md:ml-12"}
                `}
              >
                <span className="text-sm text-blue-600 font-semibold">
                  {exp.period}
                </span>
                <h3 className="text-lg font-bold dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}