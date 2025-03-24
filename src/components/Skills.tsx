import { skills as data } from "@/data/data"

export default function Skills() {
  const skills = data

  return (
<div className="flex flex-col">
    <h1 className="text-center mb-5 text-2xl font-bold">Skills</h1>
    <div className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] w-[250px] mx-[calc((100%-250px)/2)] md:w-[650px] md:mx-[calc((100%-750px)/2)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 xl:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {skills.map((skill) => (
          <li key={skill} className=" bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            <p  className="block">{skill}</p>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 xl:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {skills.map((skill) => (
          <li key={skill} className=" bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            <p className="block" >{skill}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}


