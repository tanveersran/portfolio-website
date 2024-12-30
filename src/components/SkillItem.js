import { motion } from "framer-motion";
const SkillItem = ({ skill }) => {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3}}
        className="flex flex-col gap-4 text-center justify-center items-center">
            <img src={skill.icon} alt={skill.name} className="w-24 h-24 rounded-[32]" />
            <p className="text-primary-dark font-semibold text-2xl">{skill.name}</p>
        </motion.div>
    );
}

export default SkillItem;