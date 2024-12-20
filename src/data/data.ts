import { Project, Skill, Social, User } from "../types"

export const user:User = {
  name: "Tomás Ballesty",
  dev: "Full Stack Developer"
}
export const data: Project[] = [
  {
    title: 'UpTask - Administra Proyectos y Tareas',
    description: 'Administrador de Proyectos y Tareas con autenticación de usuarios,utilzando Reactjs,React-hook-form,React-Query,TypeScript y TailwindCSS',
    link: 'https://uptask-typescript-react-tailwind.netlify.app/',
    github: "asd"

  },
  {
    title: 'DevTree - Comunidad de Desarrolladores',
    description: 'Comparte tus links, y redes sociales a todo el mundo con DevTree, utilizando Reactjs,TypeScript, TailwindCSS, y MongoDB',
    link: 'https://devtreetolo.netlify.app/',
    github: "asd"
  },
  {
    title: 'CashTracker - Controla tus Gastos',
    description: 'Controla tus gastos con CashTracker, utilizando Reactjs,TypeScript, TailwindCSS, y PosgreSQL',
    link: 'https://cashtracker-tolo.netlify.app/',
    github: "asd"
  }
]

export const skills: Skill[] = ["Javascript", 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', "Express", "Nest.js", "SQL", "MongoDb", "PostreSQL"]
export const socials: Social[] = [
  {
    name: "Github",
    link: "https://github.com/Tolomatico"
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/tomas-ballesty-582548266/"
  }

]