"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const ContactSection = ({data}) => {
    return (
        <motion.section
        className="flex flex-col pt-32 gap-8 px-4 mx-4 min-h-screen w-screen max-w-7xl lg:px-0 lg:mx-0 lg:gap-16"
        >
            <SectionTitle title={data.contactSectionTitle} />
        </motion.section>

    )
}

export default ContactSection;