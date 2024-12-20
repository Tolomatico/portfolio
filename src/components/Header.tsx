"use client"

import { useState } from "react";
import { user } from "../data/data";
import DarkMode from "./DarkMode";


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
                <h1 className="p-5 text-4xl font-bold  hidden sm:flex">{user.name}</h1>
                
                <nav className="hidden sm:flex">
                    
                       
                    
                </nav>
                <div className="p-5">
                <DarkMode/>
                </div>
               
                        
            </div>

            {



            }

            <div className="w-full">
                {
                    open && 
                    <nav className="sm:hidden">
                    <ul className="flex-col items-center space-y-2 text-center">
                        <li>asd</li>
                        <li>Linkdin</li>
                        <li>Gmail</li>
                    </ul>
                </nav>
                }

            </div>

        </header>
    )
}
