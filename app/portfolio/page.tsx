import { ProjectCard } from "@/components/project_card"

export default function Portfolio(){
    return (
        <div>
            <div className="fixed left-0 top-0 -z-10 h-full w-full">
                <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
            </div>
            <div className="flex justify-center items-center m-0 p-0">
                <div className="grid grid-cols-2">
                    <ProjectCard prurl="https://github.com/rherbin/shape_game"></ProjectCard>
                    <ProjectCard prurl="https://github.com/rherbin/solarsim"></ProjectCard>
                    <ProjectCard prurl="https://github.com/rherbin/fractals"></ProjectCard>
                    <ProjectCard prurl="https://github.com/rherbin/rosace"></ProjectCard>
                    <ProjectCard prurl="https://github.com/rherbin/collisions"></ProjectCard>
                    <ProjectCard prurl="https://github.com/rherbin/shape_game"></ProjectCard>
                </div>
            </div>
        </div>
    )
}