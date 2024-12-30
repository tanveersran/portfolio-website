"use client";
import { motion } from "framer-motion";
import DarkButtonSet from "@/components/buttons/DarkButtonSet";
import SectionTitle from "@/components/SectionTitle";

const MobileNavSection = ({ data }) => {
  return (
    <motion.section
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col pt-32 gap-32 px-4 mx-4 h-screen w-screen max-w-4xl lg:hidden">
      <SectionTitle title={data.sectionOneDescription} />
      <DarkButtonSet portfolioLink={data.portfolioLink} />
    </motion.section>
  )
}

export default MobileNavSection;