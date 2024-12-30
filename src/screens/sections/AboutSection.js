"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ImageCarousel from "@/components/carousel/ImageCarousel";

const AboutSection = ({ data }) => {
    return (
        <motion.section 
            id="about"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
        className="flex flex-col pt-32 gap-8 px-4 mx-4 min-h-screen w-screen max-w-4xl lg:px-0 lg:mx-0" >
            <SectionTitle title={data.aboutSectionTitle} />
            <div className="flex flex-col gap-8">
                <div className="grid grid-rows-1 md:grid-cols-2 text-lg gap-8 lg:text-lg">
                    <p>{data.aboutSectionParagraph1}</p>
                    <p>{data.aboutSectionParagraph2}</p>
                </div>
                <ImageCarousel slides={data.aboutSectionImages} />
            </div>
        </motion.section>
    )
}

export default AboutSection;