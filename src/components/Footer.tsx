"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaCode} from "react-icons/fa";
import { socials, user } from "../data/data";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-700 border-t dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-bold mb-4 dark:text-white">Navegación</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center gap-2">
                <FaHome /> Inicio
              </Link>
              <Link href="/proyects" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center gap-2">
                <FaCode /> Proyectos
              </Link>
            </nav>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-bold mb-4 dark:text-white">Contacto</h3>
            <a
              href="mailto:tomasballesty@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center gap-2"
            >
              <FaEnvelope /> Email
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-lg font-bold mb-4 dark:text-white">Redes Sociales</h3>
            <div className="flex justify-center gap-4 text-2xl">
              <motion.a
                href={socials[0].link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, y: -3 }}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href={socials[1].link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, y: -3 }}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t dark:border-gray-700 text-center"
        >
          <p className="flex items-center justify-center gap-2 text-lg font-semibold">
            {user.name} © {currentYear}. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}