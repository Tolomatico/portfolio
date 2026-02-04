import Image from "next/image";
import { Project } from "../types";

type ProjectCardProps = {
  item: Project;
};

export default function Card({ item }: ProjectCardProps) {
  return (
    <div className="group relative flex min-h-[520px] w-full max-w-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700/60 dark:bg-slate-900/80 backdrop-blur">
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-slate-200/60 p-4 dark:bg-slate-800/60 aspect-[4/3]">
        <Image
          src={item.img}
          alt={`Imagen de ${item.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {item.title}
        </h1>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {item.description}
        </p>
      </div>

      <div className="mt-auto flex w-full gap-3 pt-3">
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/30 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:focus:ring-white/40"
        >
          Ver Proyecto
        </a>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 dark:focus:ring-white/30"
        >
          Ver Sitio Web
        </a>
      </div>
    </div>
  );
}
