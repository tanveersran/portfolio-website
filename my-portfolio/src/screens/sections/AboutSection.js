import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ImageCarousel from "@/components/carousel/ImageCarousel";

const AboutSection = ({ data }) => {
    return (
        <motion.section className="flex flex-col pt-32 gap-8 px-4 mx-4 h-screen w-screen max-w-7xl lg:px-0 lg:mx-0 lg:pt-0 lg:gap-16">
            <SectionTitle title={data.aboutSectionTitle} />
            <div className="flex flex-col gap-8">
                <div className="flex flex-col text-lg lg:flex-row gap-8 lg:text-xl">
                    <p className="lg:w-1/2">{data.aboutSectionParagraph}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates.</p>
                </div>
                <ImageCarousel slides={data.aboutSectionImages} />
            </div>
        </motion.section>
    )
}

export default AboutSection;