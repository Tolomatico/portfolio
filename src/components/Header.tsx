"use client"

import { useState } from "react";
import DarkMode from "./DarkMode";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
export const redirects = [
    {
        href: "/",
        id: "1",
        text: "Inicio",
        icon: <IoHomeOutline />
    },
    {
        href: "/proyects",
        id: "2",
        text: "Proyectos",
        icon: <IoCodeSlashOutline />
    }
];

export default function Header() {

    const [open, setOpen] = useState(false)


    return (
        <header className="flex-col bg-white dark:bg-black dark:text-white   flex justify-between items-center shadow-lg duration-700 transition-all">
            <div className="flex w-full justify-between items-center">
                <button
                    className="relative sm:absolute m-2"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-12 sm:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>


                <nav className="w-full hidden sm:flex justify-center ">
                    <ul className="flex gap-8">
                        {
                            redirects.map(item => (

                                <li key={item.id} >
                                    <Link
                                        className="text-2xl font-bold  hover:text-blue-600  "
                                        href={item.href}
                                    >
                                        <div className="flex justify-center items-center gap-2">
                                            {item.icon}
                                            {item.text}
                                        </div>

                                    </Link>


                                </li>
                            ))


                        }
                        <li className="text-2xl font-bold bg-blue-500  rounded-2xl py-1 px-2 text-white hover:bg-blue-300 ">
                        
                                <a className="flex justify-center items-center gap-2 "
                                    href="/BALLESTY TOMAS - CV.pdf"
                                    download="BALLESTY TOMAS - CV.pdf"
                                >
                                    <MdOutlineFileDownload />
                                    Descargar cv
                                </a>
                   

                        </li>
                    </ul>


                </nav>
                <div className="p-5">
                    <DarkMode />
                </div>


            </div>


            <div className="w-full">
                {
                    open &&
                    <nav className="sm:hidden">
                        <ul className="flex-col items-center space-y-2 text-center">

                            {
                                redirects.map(item => (
                                    <li className="font-bold" key={item.id}>

                                        <Link href={item.href} className="relative text-xl font-bold hover:text-blue-600 ">{item.text}</Link>
                                    </li>
                                ))


                            }

                        </ul>
                    </nav>
                }

            </div>

        </header>
    )
}
