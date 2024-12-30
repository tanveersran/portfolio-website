"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard";

const ExperienceSection = ({ data }) => {
    return (
        <motion.section
            id="experience"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col pt-32 gap-8 px-4 mx-4 w-screen max-w-4xl lg:px-0 lg:mx-0 lg:gap-16">
            <SectionTitle title={data.experienceSectionTitle} />
            {data.experience.map((experience, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                >
                    <ExperienceCard experience={experience} />
                </motion.div>
            ))}
        </motion.section>
    );
}

export default ExperienceSection;