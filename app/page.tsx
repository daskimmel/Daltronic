import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillBox from "@/components/SkillBox";
import {ReactNode} from "react";
import AboutSection from "@/components/AboutSection";
import Image from "next/image";

export interface Skill {
    icon: ReactNode;
    title: string;
    description: string;
}


const skills: Skill[] = [
    {
        icon: <Image src="/static/bolt.png" alt="lightning-bolt-icon" width="40" height="40" />,
        title: "Electrical Controls Design",
        description: "Start-to-Finish electrical design for projects of all sizes",
    },
    {
        icon: <Image src="/static/table-layout.png" alt="table-layout-icon" width="40" height="40" />,
        title: "Control System Development",
        description: "Specification of instrumentation and control hardware customized to your application",
    },
    {
        icon: <Image src="/static/square-terminal.png" alt="programming-terminal-icon" width="40" height="40" />,
        title: "PLC/HMI Programming",
        description: "Experienced in controller and user interface programming using any standard platform",
    },
    {
        icon: <Image src="/static/tools.png" alt="tools-icon" width="40" height="40" />,
        title: "System Integration/Onsite Support",
        description: "Your project is seen through from conception through design, installation, start-up and ongoing support",
    },
];

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col justify-between">
        <Header />
        <div>
            <div className="text-white text-xl lg:text-2xl xl:text-2xl px-10">Daltronic is here to help with all your automation needs:</div>
            <div id="skills-container" className="p-8 flex justify-between flex-wrap">
                {skills.map(skill => <SkillBox key={skill.title} skill={skill} />)}
            </div>
        </div>
        <AboutSection />
        <Footer />
    </div>
  );
}
