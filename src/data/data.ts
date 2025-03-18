import { Project, Skill, Social, User } from "../types"

export const user:User = {
  name: "Tomás Ballesty",
  dev: "Full Stack Developer",
  description:  "Soy un desarrollador web con experiencia tanto en frontEnd como en backEnd. Estoy en búsqueda de nuevos desafios y oportunidades para seguir creciendo como un desarrollador profesional."
}
export const data: Project[] = [
  {
    title: 'Mesa 360 - Administrador Gastronómico',
    description: 'Administra los salones,mesas,productos,miembros y facturación de tu local,hecho con typescript,next y node.',
    link: 'https://mesa360.vercel.app/',
    github: "https://github.com/No-Country-simulation/s21-03-m-webapp",
    img:"/mesa360.png"
  },
  {
    title: 'UpTask - Administra Proyectos y Tareas',
    description: 'Administrador de Proyectos y Tareas con autenticación de usuarios,utilzando Reactjs,React-hook-form,React-Query,TypeScript y TailwindCSS.',
    link: 'https://uptask-typescript-react-tailwind.netlify.app/auth/login',
    github: "https://github.com/Tolomatico/upTask_Frontend",
     img:"/uptask.png"

  },
  {
    title: 'CashTracker - Administrado de Presupuestos',
    description: 'Administra tus presupuestos y gastos, utilizando Next y node con TypeScript, y Sequelize con postgress.',
    link: 'https://cash-tracker-front.vercel.app/',
    github: "https://github.com/Tolomatico/cashTrackerBackend",
     img:"/cashtracker.png"
  },
  {
    title: 'PawPet- Comunidad de cuidadores de mascotas',
    description: 'Sitio Web para encontrar a quien te cuide las mascota,utilizando Reactjs,node con TypeScript, y MongoDB.',
    link: 'https://pawpet.netlify.app/',
    github: "https://github.com/No-Country-simulation/s20-13-webapp",
     img:"/pawpet.png"
  },
  {
    title: 'DevTree - Comunidad de Desarrolladores',
    description: 'Comparte tus links, y redes sociales a todo el mundo con DevTree, utilizando Reactjs,TypeScript, TailwindCSS, y MongoDB.',
    link: 'https://devtreetolo.netlify.app/',
    github: "https://github.com/Tolomatico/devtree_frontend",
     img:"/devtree.png"
  }
]

export const skills: Skill[] = ["Javascript", 'React', 'Next', 'TypeScript', 'Tailwind CSS', 'Node', "Express", "Nest", "SQL", "MongoDb", "PostreSQL"]
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