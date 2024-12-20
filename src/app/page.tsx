import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Person from "@/components/Person";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-fit dark:bg-black  transition-all duration-700 ">
        <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-5 mx-14">
          <Person />
          <Projects />
        </section>
        <div className="flex items-center justify-center pb-16 ">
          <Skills />
        </div>
      </main>

      <Footer />
    </>
  );
}