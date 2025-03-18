import Card from "@/components/Card";
import { data } from "@/data/data";
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
            <section className=" sm:w-7/12 min-w-fit lg:max-w-7xl mx-auto   dark:text-white  transition-colors duration-700 ">
                <h2 className="text-6xl font-bold mb-4 text-center ">
                            Mis
                    <span className="text-blue-600 block">
                        Proyectos
                    </span></h2>
                <div className="flex flex-wrap gap-5 items-center justify-between px-10">
                    {data.map((item) => (
                        <Card key={item.link} item={item} />
                    ))}
                </div>
            </section>
        </main>
  
    )
}
