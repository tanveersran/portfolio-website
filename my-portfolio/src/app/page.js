import LandingSection from "@/screens/sections/LandingSection";
import MobileNavSection from "@/screens/sections/MobileNavSection";
import AboutSection from "@/screens/sections/AboutSection";
import ExperienceSection from "@/screens/sections/ExperienceSection";
import SkillSection from "@/screens/sections/SkillSection";
import ProjectSection from "@/screens/sections/ProjectSection";
import ContactSection from "@/screens/sections/ContactSection";
import { data } from "@/data/data";

export default function Home() {
  return (
    <div className="bg-primary text-primary-dark overflow-x-clip flex flex-col items-center justify-between">
      {/* Main Content */}
      <main>
        {/* Landing section */}
        <LandingSection data={data} />

        {/* Navigation button section for mobile */}
        <MobileNavSection data={data} />

        {/* About section */}
        <AboutSection data={data} />

        {/* Experience section */}
        <ExperienceSection data={data} />

        {/* Skills section */}
        <SkillSection data={data} />

        {/* Projects section */}
        <ProjectSection data={data} />

        {/* Contact section */}
        <ContactSection data={data} />
      </main>
    </div>
  );
}