import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard";

const ExperienceSection = ({ data }) => {
    return (
        <motion.section className="flex flex-col pt-32 gap-8 px-4 mx-4 h-screen w-screen max-w-7xl lg:px-0 lg:mx-0 lg:gap-16">
            <SectionTitle title={data.experienceSectionTitle} />
            {data.experience.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
            ))}
        </motion.section>
    );
}

export default ExperienceSection;