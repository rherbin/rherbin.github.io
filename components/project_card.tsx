"use client"

import Image from "next/image"
import { Separator } from "./ui/separator"

export function ProjectCard({prurl}:{prurl:string}){
    const imgurl = prurl.replace("github", "raw.githubusercontent")+"/main/cover_image.png";
    const prname = prurl.split("/").slice(-1);
    const prlang = fetch(prurl.replace("github.com", "api.github.com/repos"))
    return (
        <div className="rounded-xl border-2 w-96 m-2 overflow-hidden">
            <Image src={imgurl} alt="Project image" className="object-cover h-40 m-0 p-0" unoptimized width={384} height={150}></Image>
            <Separator className="mt-0 pt-0"></Separator>
            <div className="m-4">
                <h1 className="text-xl font-bold m-4">{prname}</h1>
                <div className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore a voluptatibus odio quasi quia quidem quisquam possimus, dolore sed nobis pariatur ratione, ad omnis ab aut? Fugit, delectus harum?
                    <a href="/project" className="mx-2 underline underline-offset-2 decoration-4 hover:text-black hover:bg-gray-400 hover:decoration-slate-400 duration-100">View</a>
                </div>
            </div>
        </div>
    );
}