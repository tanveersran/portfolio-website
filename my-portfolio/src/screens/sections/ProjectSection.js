"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ProjectItem from "@/components/ProjectItem";

const ProjectSection = ({ data }) => {
    return (
        <motion.section
            id="projects"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col pt-32 gap-8 px-4 mx-4 min-h-screen w-screen max-w-7xl lg:px-0 lg:mx-0 lg:gap-16"
        >
            <SectionTitle title={data.projectSectionTitle} />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {data.projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </motion.section>

    )
}

export default ProjectSection;