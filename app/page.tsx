import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillBox from "@/components/SkillBox";
import {ReactNode} from "react";
import {FaBoltLightning} from "react-icons/fa6";


export interface Skill {
    icon: ReactNode;
    title: string;
    description: string;
}

const skills: Skill[] = [
    {
        icon: <FaBoltLightning color="black" size={32} />,
        title: "Electrical Controls Design",
        description: "Start-to-Finish electrical design for projects of all sizes",
    },
    {
        icon: <FaBoltLightning color="black" size={32} />,
        title: "XXXX",
        description: "XXXXX",
    },
    {
        icon: <FaBoltLightning color="black" size={32} />,
        title: "YYYYY",
        description: "YYYYY",
    },
    {
        icon: <FaBoltLightning color="black" size={32} />,
        title: "ZZZZZZ",
        description: "ZZZZZZZ",
    },
];

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col justify-between">
        <title>Daltronic LLC</title>
        <div>
            <Header />
            <div id="skills-container" className="p-8 flex justify-between flex-wrap">
                {skills.map(skill => <SkillBox key={skill.title} skill={skill} />)}
            </div>
        </div>
        <Footer />
    </div>
  );
}
