"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TripleTextHeading from "../components/TripleTextHeading";
import Button from "@/components/Button";
import HalfCircleComponent from "@/components/background/HalfCircleComponent";

const data = {
  sectionOneTitle: "Hi there.",
  sectionOneSubtitle: "Welcome to my portfolio!",
  sectionOneDescription: "Let's have a journey.",
}

export default function Home() {
  return (
    <div className="bg-primary text-primary-dark h-screen flex flex-col items-center justify-between">
      {/* Main Content */}
      <main>
        {/* Landing section */}
        <section className="flex h-screen w-screen">
          {/* Background component */}
          <HalfCircleComponent />
          {/* Left side */}
          <div className="flex flex-col text-primary-tinted items-center justify-center w-1/2 z-10">
            <TripleTextHeading
              title={data.sectionOneTitle}
              subtitle={data.sectionOneSubtitle}
              description={data.sectionOneDescription}
              animated
            />
            <Button title="Get to know me" />
          </div>
          {/* Right side */}
          <div className="flex items-center relative z-10">
            {/* Add content here */}
          </div>
        </section>
      </main>
    </div>
  );
}