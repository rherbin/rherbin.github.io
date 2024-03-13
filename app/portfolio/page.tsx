import { ProjectCard } from "@/components/project_card"

export default function Portfolio(){
    return (
        <div className="flex justify-center items-center m-0 p-0">
            <div className="grid grid-cols-2">
                <ProjectCard imgurl=""></ProjectCard>
                <ProjectCard imgurl=""></ProjectCard>
                <ProjectCard imgurl=""></ProjectCard>
                <ProjectCard imgurl=""></ProjectCard>
                <ProjectCard imgurl=""></ProjectCard>
                <ProjectCard imgurl=""></ProjectCard>
            </div>
        </div>
    )
}