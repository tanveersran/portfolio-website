"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ImageCarousel from "@/components/carousel/ImageCarousel";

const AboutSection = ({ data }) => {
    return (
        <motion.section 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
        className="flex flex-col pt-32 gap-8 px-4 mx-4 h-screen w-screen max-w-7xl lg:px-0 lg:mx-0 lg:gap-16">
            <SectionTitle title={data.aboutSectionTitle} />
            <div className="flex flex-col gap-8">
                <div className="flex flex-col text-lg lg:flex-row gap-8 lg:text-2xl">
                    <p className="lg:w-1/2">{data.aboutSectionParagraph}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates.</p>
                </div>
                <ImageCarousel slides={data.aboutSectionImages} />
            </div>
        </motion.section>
    )
}

export default AboutSection;