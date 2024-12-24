"use client";
import LandingSection from "@/screens/sections/LandingSection";
import MobileNavSection from "@/screens/sections/MobileNavSection";
import AboutSection from "@/screens/sections/AboutSection";

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
  ]
}

export default function Home() {
  return (
    <div className="bg-primary text-primary-dark  flex flex-col items-center justify-between">
      {/* Main Content */}
      <main>
        {/* Landing section */}
        <LandingSection data={data} />

        {/* Navigation button section for mobile */}
        <MobileNavSection data={data}/>

        {/* About section */}
        <AboutSection data={data} />
      </main>
    </div>
  );
}