import { Project } from "../types";

type ProjectCardProps = {
  item: Project;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className="flex items-center gap-5 bg-slate-100 dark:bg-slate-900   rounded-lg p-5 min-w-[350px] transition-colors duration-700">
      <div className="flex flex-col space-y-2 ">
        <h1 className="text-xl font-bold text-black  dark:text-white">{item.title}</h1>
        <p className="text-gray-700 dark:text-gray-200 w-4/5">{item.description}</p>
        <div className="space-x-5 py-2">
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer" 
          className=" w-fit bg-slate-950 dark:bg-white text-white dark:text-black text-center rounded-lg p-2 font-bold hover:bg-gray-400 dark:hover:bg-blue-600 focus:ring-2 focus:ring-black transition-colors duration-300"
        >
          Ver Proyecto
        </a>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className=" w-fit bg-slate-950 dark:bg-white text-white dark:text-black text-center rounded-lg p-2 font-bold hover:bg-gray-400 dark:hover:bg-blue-600 focus:ring-2 focus:ring-black transition-colors duration-300"
        >
          Ver Sitio Web
        </a>
          </div> 
      </div> 
    </div>
  );
}