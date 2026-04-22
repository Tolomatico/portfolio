"use client";

import { socials as data, user } from "../data/data";
import { motion } from "framer-motion";

export default function Person() {

    const [name, last_name] = user.name.split(" ")
    const socials = data

    return (
        <div className="sm:w-7/12 lg:flex-1  space-y-5 min-w-fit">

            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-8xl font-black dark:text-white transition-all duration-700"
            >
                Soy <p className="text-blue-600">{name}</p>
                <span className="text-blue-600">{last_name}</span>
                </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <span className="text-blue-500  p-2 rounded-lg border-2 animate-color-cycle transition-colors dark:animate-color-cycle">
                    {user.dev}
                </span>


            </motion.div>


            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-slate-200"
            >
                {user.description}
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-x-5"
            >
                {
                    socials.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="font-bold bg-slate-100 hover:bg-blue-600 hover:text-white  p-2 rounded-lg text-black transition-colors duration-300 inline-block">
                            {item.name}</motion.a>
                    ))
                }
            </motion.div>


        </div>
    )
}
