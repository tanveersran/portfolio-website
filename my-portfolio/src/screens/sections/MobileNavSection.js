import { motion } from "framer-motion";
import DarkButtonSet from "@/components/buttons/DarkButtonSet";
import SectionTitle from "@/components/SectionTitle";

const MobileNavSection = ({data}) => {
    return (
        <motion.section className="flex flex-col pt-32 gap-32 px-4 mx-4 h-screen w-screen max-w-7xl lg:hidden">
          <SectionTitle title={data.sectionOneDescription}/>
          <DarkButtonSet />
        </motion.section>
    )
}

export default MobileNavSection;