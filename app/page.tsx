import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col justify-between">
        <Header />
        <SkillSection />
        <AboutSection />
        <Footer />
    </div>
  );
}
