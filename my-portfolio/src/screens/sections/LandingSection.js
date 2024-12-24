import { motion } from "framer-motion";
import HalfCircleComponent from "../../components/background/HalfCircleComponent";
import TripleTextHeading from "../../components/TripleTextHeading";
import CircularImage from "../../components/CircularImage";
import TextImageButton from "../../components/buttons/TextImageButton";
import LightButtonSet from "../../components/buttons/LightButtonSet";
import Image from "next/image";
const LandingSection = ({data}) => {
    return (
        <motion.section className="flex flex-col h-screen w-screen px-8 
        lg:px-0 lg:flex-row lg:max-w-7xl">
          {/* Background component */}
          <HalfCircleComponent />
          {/* Top side, animates on load (visible for mobile screen only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden flex flex-col text-primary-tinted justify-center gap-16 h-1/4 w-screen z-10">
            <TripleTextHeading
              title={data.sectionOneTitle}
              subtitle={data.sectionOneSubtitle}
              animated
            />
          </motion.div>
          {/* Left side, animates on load (visible for pc screen only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3}}
            className="hidden lg:flex flex-col text-primary-tinted gap-16 justify-center w-1/2 z-10">
            <TripleTextHeading
              title={data.sectionOneTitle}
              subtitle={data.sectionOneSubtitle}
              description={data.sectionOneDescription}
              animated
            />
            <LightButtonSet />
          </motion.div>
          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col text-center justify-center items-center mt-16 z-10 gap-8
            lg:w-1/2 lg:mt-0">
            <CircularImage src={data.avatarImage} alt={data.avatarImageAlt} />
            <span className="text-2xl text-primary-dark font-semibold">{data.fullName}</span>
            <span className="text-xl text-primary-dark tracking-widest">{data.jobTitle}</span>

            <div className="flex flex-row gap-8">
              <TextImageButton text="LinkedIn" image="/linkedin.png" onClick={() => { window.open("https://www.linkedin.com/in/tanveersran/") }} />
              <TextImageButton text="GitHub" image="/github.png" onClick={() => { window.open("https://github.com/tanveersran") }} />
            </div>
          </motion.div>

          {/* Scroll down arrow */}
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-8 left-1/2"
          >
            <Image
              src="/down-arrow.png"
              alt="Down arrow"
              width={50}
              height={50}

            />
          </motion.div>
        </motion.section>
    );
}

export default LandingSection;