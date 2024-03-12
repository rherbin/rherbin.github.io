import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

export default function Cv(){
    return (
        <div className="grid grid-cols-5">
            <div className="col-start-2 col-span-3 border-2 rounded-xl justify-center">

                <div className="flex items-center justify-center">
                    <Image className="rounded-xl border-2 m-4 mr-auto" width={200} height={300} src="/me.png"></Image>
                    <div className='text-center mr-auto'>
                        <h1 className="m-4 font-bold text-5xl">Rodolphe Herbin</h1>
                    </div>
                </div>

                <div className='flex h-5 space-x-4 items-center text-base m-4 justify-center text-gray-400'>
                    <div>E-mail : rodolpherbin@gmail.com</div>
                    <Separator orientation='vertical' className="m-2"></Separator>
                    <div>Github : <a href="https://github.com/rherbin">rherbin</a></div>
                    <Separator orientation='vertical' className="m-2"></Separator>
                    <div>Phone : +33 6 43 51 72 05</div>
                </div>

                <Separator className="mx-10 mt-8 mb-5 w-auto"></Separator>
                
                <div className='flex m-10 space-x-4 w-full'>
                    <div className='w-80'>
                        <h2 className='text-2xl m-5 font-bold'>Compétences</h2>
                        <div>Python</div>
                        <div>C/C++</div>
                        <div>Javascript</div>
                        <div>Haskell</div>
                    </div>
                    <Separator orientation="vertical" className="h-auto">

                    </Separator>
                    <div className=''>
                        <h2 className='text-2xl m-5 font-bold'>Formation</h2>

                        <div className='rounded-xl border-2 m-2 p-6'>
                            <div className='font-bold'>2015 - 2019</div><div>Collège Claude Debussy, Paris 75015</div><div>Diplôme : Diplôme National du Brevet des Collèges</div>
                        </div>

                        <div className='rounded-xl border-2 m-2 p-6'>
                            <div className='font-bold'>2019 - 2021</div><div>Lycée Jean Baptiste Say, Paris 75016</div><div>Spécialités : Mathématiques - Physique Chimie - NSI</div><div>Diplôme : Baccalauréat</div>
                        </div>

                        <div className='rounded-xl border-2 m-2 p-6'>
                            <div className='font-bold'>2021 - 2022</div><div>Lycée Victor Duruy, Paris 75007</div><div>Spécialités : Mathématiques - NSI</div>
                        </div>

                        <div className='rounded-xl border-2 m-2 p-6'>
                            <div className='font-bold'>Depuis 2022</div><div>Université Paris Dauphine, Paris 75116</div><div>Filière : MIDO Mathématiques Informatique</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}