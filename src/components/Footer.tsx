import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials, user } from "../data/data";

export default function Footer() {
  return (
    <footer className="p-6 bg-slate-100 dark:bg-black text-center text-gray-700 dark:text-gray-300 transition-colors duration-700 dark:border-t-2 border-gray-300 dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 text-xl">
        <p className="font-bold text-lg">Mis redes sociales:</p>
        <div className="flex gap-4 text-3xl">
          <a
            href={socials[0].link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-500 dark:hover:text-gray-300  "
          >
            <FaGithub />
          </a>
          <a
            href={socials[1].link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-500 dark:hover:text-gray-300 "
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold">
        All Rights Reserved.{user.name}({new Date().getFullYear()}).
      </p>
    </footer>
  );
}
