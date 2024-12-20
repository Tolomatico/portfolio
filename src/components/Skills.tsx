import { skills as data } from "@/data/data"

export default function Skills() {
  const skills = data

  return (
    <section >
      <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}


