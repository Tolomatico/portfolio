import { socials as data, user } from "../data/data";

export default function Person() {

    const [name, last_name] = user.name.split(" ")
    const socials = data

    return (
        <div className="sm:w-7/12 lg:flex-1  space-y-5 min-w-fit">

            <h1 className="text-8xl font-black dark:text-white transition-all duration-700">
                Soy <p className="text-blue-600">{name}</p>
                <span className="text-blue-600">{last_name}</span>
                </h1>

            <div>
                <span className="text-blue-500  p-2 rounded-lg border-2 animate-color-cycle transition-colors dark:animate-color-cycle">
                    {user.dev}
                </span>


            </div>


            <p className="text-lg text-slate-600 dark:text-slate-200">
                {user.description}
            </p>
            <div className="space-x-5">
                {
                    socials.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold bg-slate-100 hover:bg-blue-600 hover:text-white  p-2 rounded-lg text-black transition-colors duration-300">
                            {item.name}</a>
                    ))
                }
            </div>


        </div>
    )
}
