"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TripleTextHeading from "../components/TripleTextHeading";
import Button from "@/components/buttons/TextButton";
import HalfCircleComponent from "@/components/background/HalfCircleComponent";
import CircularImage from "@/components/CircularImage";
import TextImageButton from "@/components/buttons/TextImageButton";

const data = {
  sectionOneTitle: "Hi there.",
  sectionOneSubtitle: "Welcome to my portfolio!",
  sectionOneDescription: "Let's take a journey.",
  avatarImage: "/avatar.jpeg",
  avatarImageAlt: "Avatar image",
  fullName: "Tanveer Singh Sran",
  jobTitle: "Developer / UX Designer",
}

export default function Home() {
  return (
    <div className="bg-primary text-primary-dark h-screen flex flex-col items-center justify-between">
      {/* Main Content */}
      <main>
        {/* Landing section */}
        <section className="flex h-screen w-screen max-w-7xl">
          {/* Background component */}
          <HalfCircleComponent />
          {/* Left side, animates on load */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col text-primary-tinted gap-16 justify-center w-1/2 z-10">
            <TripleTextHeading
              title={data.sectionOneTitle}
              subtitle={data.sectionOneSubtitle}
              description={data.sectionOneDescription}
              animated
            />
            <div className="flex flex-wrap gap-8 max-w-sm">
              <Button title="About" />
              <Button title="Skills" />
              <Button title="Experience" />
              <Button title="Projects" />
              <Button title="Contact" />
              <Button title="Resume" />
            </div>
          </motion.div>
          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="flex flex-col w-1/2 justify-center items-center relative z-10 gap-8">
            <CircularImage src={data.avatarImage} alt={data.avatarImageAlt} />
            <text className="text-4xl text-primary-dark font-semibold">{data.fullName}</text>
            <text className="text-2xl text-primary-dark tracking-widest">{data.jobTitle}</text>

            <div className="flex flex-row gap-8">
              <TextImageButton text="LinkedIn" image="/linkedin.png" onClick={() => { window.open("https://www.linkedin.com/in/tanveersran/") }} />
              <TextImageButton text="GitHub" image="/github.png" onClick={() => { window.open("https://github.com/tanveersran") }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Image
              src="/down-arrow.png"
              alt="Down arrow"
              width={50}
              height={50}
              
            />
          </motion.div>
        </section>

        {/* About section */}


      </main>
    </div>
  );
}