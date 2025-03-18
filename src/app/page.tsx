import Person from "@/components/Person";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
   
      <main className="min-h-fit dark:bg-black  transition-all duration-700 ">
        <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-5 mx-2 sm:mx-14">
          <Person />
          <Projects />
        </section>
        <div className="flex items-center justify-center pb-16 ">
          <Skills />
        </div>
      </main>

 
    </>
  );
}