import Image from "next/image";
import { Project } from "../types";

type ProjectCardProps = {
  item: Project;
};

export default function Card({ item }: ProjectCardProps) {
  return (
    <div className="max-w-[350px] min-h-[500px]  flex flex-col justify-between items-center rounded-xl bg-slate-100 p-5 gap-2 dark:bg-slate-900 shadow">
      <div className="w-full h-[250px] flex items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={item.img}
          width={200}
          height={200}
          alt={`Imagen de ${item.title}`}
          className="w-200 h-200 object-cover"
        />
      </div>
      <div className="fit-content">
        <h1 className="text-xl font-bold text-black  dark:text-white">{item.title}</h1>
        <p className="text-gray-700 dark:text-gray-200 ">{item.description}</p>
      </div>
      <div className="space-x-5  w-fit  flex">
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className=" dark:hover:text-white bg-slate-950 dark:bg-white text-white dark:text-black text-center rounded-lg p-2 font-bold hover:bg-gray-400 dark:hover:bg-blue-600 focus:ring-2 focus:ring-black transition-colors duration-300"
        >
          Ver Proyecto
        </a>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:hover:text-white bg-slate-950 dark:bg-white text-white dark:text-black text-center rounded-lg p-2 font-bold hover:bg-gray-400 dark:hover:bg-blue-600 focus:ring-2 focus:ring-black transition-colors duration-300"
        >
          Ver Sitio Web
        </a>
      </div>

    </div>
  )
}
