import ProjectsTree from "@/components/ProjectsTree";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {


    return {
        title: `Tomás Ballesty - Proyectos`,
        description: `Tomás Ballesty - Proyectos`
    }

}


export default function ProjectPage() {

    return (
       <main className="min-h-fit dark:bg-black  transition-all duration-700 pt-10 pb-10">
            <section className=" w-full max-w-4xl mx-auto   dark:text-white  transition-colors duration-700 ">
                <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center ">
                            Mis
                    <span className="text-blue-600 block">
                        Proyectos
                    </span></h2>
                <ProjectsTree />
            </section>
        </main>
  
    )
}