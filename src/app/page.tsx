"use client";

import { motion } from "framer-motion";
import Person from "@/components/Person";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
  
      <main className="min-h-fit dark:bg-black  transition-all duration-700 ">
        <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-5 mx-2 sm:mx-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Person />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Projects />
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center pb-16 "
        >
          <Skills />
        </motion.div>
        <Experience />
        <Contact />
      </main>

  
    </>
  );
}