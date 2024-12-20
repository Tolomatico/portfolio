import {  data} from "../data/data"
import { Project } from "../types"
import ProjectCard from "./ProjectCard"


export default function Projects() {
   
   const lastProyects:Project[]=data.filter((_,index)=>index === 0 || index === 1 )

  
    return (
      <section className=" sm:w-7/12 min-w-fit lg:max-w-7xl mx-auto  dark:text-white  transition-colors duration-700 "> 
        <h2 className="text-6xl font-bold mb-4  ">
          Últimos{" "} 
          <span className="text-blue-600 block">
           Proyectos
            </span></h2>
        <div className="flex flex-col gap-5 items-center lg:flex-row flex-wrap">
          {lastProyects.map((item) => (
            <ProjectCard key={item.link} item={item} />
          ))}
        </div>
      </section>
    )
  }
  