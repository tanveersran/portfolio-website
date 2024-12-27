import LandingSection from "@/screens/sections/LandingSection";
import MobileNavSection from "@/screens/sections/MobileNavSection";
import AboutSection from "@/screens/sections/AboutSection";
import ExperienceSection from "@/screens/sections/ExperienceSection";
import SkillSection from "@/screens/sections/SkillSection";


const data = {
  sectionOneTitle: "Hi there.",
  sectionOneSubtitle: "Welcome to my portfolio!",
  sectionOneDescription: "Let's take a journey.",
  avatarImage: "/avatar.jpeg",
  avatarImageAlt: "Avatar image",
  fullName: "Tanveer Singh Sran",
  jobTitle: "Developer / UX Designer",
  aboutSectionTitle: "About Me",
  aboutSectionParagraph: "I'm a developer and UX designer with a passion for creating beautiful and functional applications. I have experience with a variety of technologies and tools, and I'm always looking to learn more. In my free time, I enjoy reading, hiking, and playing video games.",
  aboutSectionImages: [
    { image: 'https://via.placeholder.com/800x400', caption: 'Caption 1' },
    { image: 'https://via.placeholder.com/800x400', caption: 'Caption 2' },
    { image: 'https://via.placeholder.com/800x400', caption: 'Caption 3' },
  ],
  experienceSectionTitle: "Experience",
  experience: [
    {
      companyLogo: "./mto-logo.png",
      title: "User Experience (UX) Designer",
      company: "Ministry of Transportation Ontario (MTO)",
      date: "Jan 2020 - Present",
      description: "Conducted user research and designed user interfaces for a variety of applications. Worked closely with developers and stakeholders to ensure that designs met user needs and business requirements.",
    },
    {
      companyLogo: "./sheridan-logo.jpeg",
      title: "Software Development Tutor",
      company: "Sheridan College",
      date: "Jan 2018 - Dec 2019",
      description: "Tutored students in software development concepts and programming languages. Developed and delivered workshops on topics such as web development, mobile app development, and software design principles.",
    },
    {
      companyLogo: "./gbc-logo.jpeg",
      title: "Live Transcriber ",
      company: "Accessible Learning Services, George Brown College",
      date: "Jan 2016 - Dec 2017",
      description: "Utilized 200+ words per minute typing speed to provide real-time transcription services for students with disabilities. Ensured accurate and timely transcription of lectures, discussions, and other classroom activities.",
    },
  ],
  skillSectionTitle: "Skills",
  frontEndSkills: [
    {
      name: "HTML",
      icon: "https://via.placeholder.com/100x100?text=HTML",
    },
    {
      name: "CSS",
      icon: "https://via.placeholder.com/100x100?text=CSS",
    },
    {
      name: "JavaScript",
      icon: "https://via.placeholder.com/100x100?text=JavaScript",
    },
    {
      name: "React",
      icon: "https://via.placeholder.com/100x100?text=React",
    },
    {
      name: "Tailwind CSS",
      icon: "https://via.placeholder.com/100x100?text=Tailwind+CSS",
    },
    {
      name: "Figma",
      icon: "https://via.placeholder.com/100x100?text=Figma",
    },
    {
      name: "Adobe XD",
      icon: "https://via.placeholder.com/100x100?text=Adobe+XD",
    },
  ]
}

export default function Home() {
  return (
    <div className="bg-primary text-primary-dark overflow-x-hidden flex flex-col items-center justify-between">
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
      </main>
    </div>
  );
}