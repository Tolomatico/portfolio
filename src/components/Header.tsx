"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarkMode from "./DarkMode";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const navItems = [
  { href: "/", id: "1", text: "Inicio", icon: <IoHomeOutline /> },
  { href: "/proyects", id: "2", text: "Proyectos", icon: <IoCodeSlashOutline /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl flex-col dark:text-white flex justify-between items-center duration-700 transition-all border-b dark:border-gray-800">
      <div className="flex w-full justify-between items-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="py-3"
        >
          <Link href="/" className="text-2xl font-black">
            <span className="text-blue-600">TB</span>
            <span className="dark:text-white text-black">.dev</span>
          </Link>
        </motion.div>

        <button
          className="sm:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="size-8" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <nav className="hidden sm:flex justify-center">
          <ul className="flex gap-2">
            {navItems.map((item) => (
              <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
                <Link
                  className="text-lg font-semibold px-4 py-2 rounded-lg  hover:text-blue-600 "
                  href={item.href}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.text}
                  </span>
                </Link>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.05 }}>
              <div className="flex justify-center items-center h-full">
              <a
                href="/BALLESTY TOMAS - CV.pdf"
                download
                className="flex items-center  gap-2 text-lg font-semibold px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <MdOutlineFileDownload />
                CV
              </a>
              </div>
            </motion.li>          
          </ul>
        </nav>

        <div className="hidden sm:block">
          <DarkMode />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden w-full overflow-hidden bg-white dark:bg-black"
          >
            <ul className="flex flex-col items-center py-4 gap-4 border-t dark:border-gray-800">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-semibold flex items-center gap-2 hover:text-blue-600"
                  >
                    {item.icon}
                    {item.text}
                  </Link>
                </motion.li>
              ))}
              <motion.li whileTap={{ scale: 0.95 }}>
                <a
                  href="/BALLESTY TOMAS - CV.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-xl font-semibold px-4 py-2 rounded-lg bg-blue-600 text-white"
                >
                  <MdOutlineFileDownload />
                  Descargar CV
                </a>
              </motion.li>
              <div className="pt-2">
                <DarkMode />
              </div>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}