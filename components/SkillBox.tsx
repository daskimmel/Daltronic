import {Skill} from "@/app/page";


export default function SkillBox({ skill }: {skill: Skill} ) {
    return (
        <div className="p-2 mb-2 w-full lg:w-1/4 sm:w-1/2 xs:w-full flex flex-col justify-between w-full h-[300px]">
            <div className="p-4 bg-white h-full">
                <div className="h-1/2">
                    {skill.icon}
                </div>
                <div className="h-1/2">
                    <div className="text-black text-lg leading-5 h-[40px] mb-2 font-semibold">{skill.title}</div>
                    <div className="text-gray-400 text-md lg:text-sm xl:text-sm leading-5">{skill.description}</div>
                </div>
            </div>
        </div>
    );
}
