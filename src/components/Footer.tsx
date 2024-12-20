import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials, user } from "../data/data";

export default function Footer() {
  return (
    <footer
      className="space-y-5 p-5  bg-slate-100   dark:text-white  dark:bg-black transition-colors duration-700">
      <div className="flex justify-center items-center gap-5 text-2xl">
        <p className="font-black">Mis redes sociales:</p>
        <a
          href={socials[0].link}
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href={socials[1].link}
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>

      </div>
      <div>
        <p className="text-center font-black text-2xl">All Rights Reserved. {user.name} ({new Date().toLocaleDateString()}).</p>
      </div>

    </footer>
  )
}
