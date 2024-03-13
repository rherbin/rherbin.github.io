"use client"

import Image from "next/image"
import { Separator } from "./ui/separator"

export function ProjectCard({prurl}:{prurl:string}){
    const imgurl = "https://raw.githubusercontent.com/rherbin/rherbin.github.io/main/docs/me.png";
    "https://raw.githubusercontent.com/UserName/NameRepo/Branch/"
    return (
        <div className="rounded-xl border-2 w-96 m-2">
            <Image src={imgurl} alt="Project image" width={384} height={150} className="m-0 p-0" unoptimized></Image>
            <Separator className="mt-0 pt-0"></Separator>
            <div className="m-4">
                <h1 className="text-center text-xl font-bold m-4">Project Name</h1>
                <div className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore a voluptatibus odio quasi quia quidem quisquam possimus, dolore sed nobis pariatur ratione, ad omnis ab aut? Fugit, delectus harum? <a href="/project" className="underline underline-offset-2 decoration-4 hover:text-black hover:bg-gray-400 hover:decoration-slate-400 duration-100">View</a>
                </div>
            </div>
        </div>
    )
}