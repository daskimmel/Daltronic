import {Skill} from "@/app/page";


export default function SkillBox({ skill }: {skill: Skill} ) {
    return (
        <div className="p-2 mb-2 w-full lg:w-1/4 sm:w-1/2 xs:w-full flex flex-col justify-between w-full h-[300px] rounded-lg">
            <div className="p-8 bg-white h-full rounded-xl">
                <div className="h-1/2">
                    {skill.icon}
                </div>
                <div className="h-1/2">
                    <div className="text-black text-xl">{skill.title}</div>
                    <span className="text-gray-400">{skill.description}</span>
                </div>
            </div>
        </div>
    );
}
