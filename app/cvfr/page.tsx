import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

export default function Cv(){
    return (
        <div>
            <Link href="/cven" className="absolute left-3 top-3 border-2 rounded-xl p-3">English</Link>
            <div className="fixed left-0 top-0 -z-10 h-full w-full">
                <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
            </div>
            <div className="flex justify-center my-5">
                <div className="border-2 rounded-xl">

                    <div className="flex items-center justify-center">
                        <Image alt="Profile picture" className="rounded-xl border-2 m-4 mr-auto" unoptimized width={200} height={300} src="/20240902_165937566_iOS.png"></Image>
                        <div className="text-center mr-auto">
                            <h1 className="m-4 font-bold text-5xl">Rodolphe Herbin</h1>
                            <h2 className="m-2 font-semibold text-3xl text-gray-400">Étudiant</h2>
                        </div>
                    </div>

                    <Separator className="mx-10 mt-5 mb-8 w-auto"></Separator>

                    <div className="flex h-10 space-x-4 items-center text-base m-4 justify-center text-gray-400">
                        <div>E-mail : rodolpherbin[at]gmail.com</div>
                        <Separator orientation="vertical" className="m-2"></Separator>
                        <div>Github : <a href="https://github.com/rherbin" target="_blank" className="underline underline-offset-2 decoration-4 hover:text-black hover:bg-gray-400 hover:decoration-slate-400 duration-100">rherbin</a></div>
                        <Separator orientation="vertical" className="m-2"></Separator>
                        <div>Phone : +33 6 43 51 72 05</div>
                        <Separator orientation="vertical" className="m-2"></Separator>
                        <div>Site : <a href="https://rherbin.github.io/" target="_blank" className="underline underline-offset-2 decoration-4 hover:text-black hover:bg-gray-400 hover:decoration-slate-400 duration-100">rherbin.github.io</a></div>
                    </div>

                    <Separator className="mx-10 mt-8 mb-2 w-auto"></Separator>
                    
                    <div className="flex space-x-4 w-full">
                        <div className="w-80 m-5">
                            <h2 className="text-2xl m-5 font-bold">Compétences</h2>

                            <div className="rounded-xl border-2 my-5 p-4">
                                <h3 className="m-2 font-semibold text-xl">Programmation</h3>
                                <div className="p-2">
                                    <div>Python</div><Progress value={95} className="w-[100%]"></Progress>
                                </div>
                                <div className="p-2">
                                    <div>C</div><Progress value={70} className="w-[100%]"></Progress>
                                </div>
                                <div className="p-2">
                                    <div>Java</div><Progress value={60} className="w-[100%]"></Progress>
                                </div>
                                <div className="p-2">
                                    <div>Javascript/Typescript</div><Progress value={50} className="w-[100%]"></Progress>
                                </div>
                                <div className="p-2">
                                    <div>Haskell</div><Progress value={30} className="w-[100%]"></Progress>
                                </div>
                            </div>
                            
                            <div className="rounded-xl border-2 my-5 p-4">
                                <h3 className="m-2 font-semibold text-xl">Langues</h3>
                                <div className="p-2">
                                    <div>Français</div><Progress value={100} className="w-[100%]"></Progress>
                                </div>
                                <div className="p-2">
                                    <div>Anglais</div><Progress value={80} className="w-[100%]"></Progress>
                                </div>
                                <div className="p-2">
                                    <div>Allemand</div><Progress value={50} className="w-[100%]"></Progress>
                                </div>
                            </div>

                            <div className="rounded-xl border-2 my-5 p-4">
                                <h3 className="m-2 font-semibold text-xl">Passions</h3>
                                <ul className="p-4 list-disc">
                                    <li className="p-1">Informatique</li>
                                    <li className="p-1">Jeux vidéo</li>
                                    <li className="p-1">Cinéma</li>
                                    <li className="p-1">Finance</li>
                                    <li className="p-1">Musique</li>
                                </ul>
                            </div>
                        </div>

                        <Separator orientation="vertical" className="h-auto my-8"></Separator>

                        <div className="m-5 pl-3">
                            
                            <div className="my-5">
                                <h2 className="text-2xl m-5 font-bold">Formation</h2>

                                <div className="rounded-xl border-2 m-2 mr-5 p-6">
                                    <div className="font-bold mb-1">Depuis 2022</div><div>Université Paris Dauphine, Paris 75116</div><div>Licence Mathématiques Informatique, filière IM2D</div>
                                </div>

                                <div className="rounded-xl border-2 m-2 mr-5 p-6">
                                    <div className="font-bold mb-1">2021 - 2022</div><div>Lycée Victor Duruy, Paris 75007 | Diplôme : Baccalauréat</div><div>Spécialités : Mathématiques - NSI</div>
                                </div>

                                <div className="rounded-xl border-2 m-2 mr-5 p-6">
                                    <div className="font-bold mb-1">2019 - 2021</div><div>Lycée Jean Baptiste Say, Paris 75016</div><div>Spécialités : Mathématiques - Physique Chimie - NSI</div>
                                </div>

                                <div className="rounded-xl border-2 m-2 mr-5 p-6">
                                    <div className="font-bold mb-1">2015 - 2019</div><div>Collège Claude Debussy, Paris 75015 | Diplôme : Brevet des Collèges</div>
                                </div>
                            </div>

                            <Separator className="w-auto mr-8 mt-8"></Separator>                        

                            <div className="my-5">
                                <h2 className="text-2xl m-5 font-bold">Expérience</h2>
                                <div className="rounded-xl border-2 m-2 mr-5 p-6">
                                    <div className="font-bold mb-1">Juin 2023 - Juillet 2023</div><div>Pharmacie Matignon - Assistant en Pharmacie</div><div>Logistique & Réorganisation des Rayons</div>
                                </div>
                                <div className="rounded-xl border-2 m-2 mr-5 p-6">
                                    <div className="font-bold mb-1">2019</div><div>Office National d&#39;Études et de Recherches Aérospatiales - Stage</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}