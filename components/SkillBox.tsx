import {Skill} from "@/app/page";


export default function SkillBox({ skill }: {skill: Skill} ) {
    return (
        <div className="p-4 max-w-[300px] flex flex-col justify-between bg-white w-full mx-4 h-[300px] rounded-md">
            <div className="h-1/2">
                {skill.icon}
            </div>
            <div className="h-1/2">
                <div className="text-black text-xl">{skill.title}</div>
                <span className="text-gray-400">{skill.description}</span>
            </div>
        </div>
    );
}
