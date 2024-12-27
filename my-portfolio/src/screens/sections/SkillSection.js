"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import SelectableButton from "@/components/buttons/SelectableButton";
import SkillItem from "@/components/SkillItem";

const SkillSection = ({ data }) => {
    const [selected, setSelected] = useState("Frontend");

    const handleSelection = (category) => {
        setSelected(category);
    };

    const skillDescriptions = {
        Frontend: data.frontEndSkills,
        Backend: "Node.js, Express.js, MongoDB, SQL, Python, Django, and more!",
        Extracurricular: "Git, GitHub, Heroku, Netlify, and more!",
    };

    return (
        <motion.section
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col pt-32 gap-8 px-4 mx-4 h-screen w-screen max-w-7xl lg:px-0 lg:mx-0 lg:gap-16"
        >
            <SectionTitle title={data.skillSectionTitle} />
            <div className="flex flex-row gap-8 flex-wrap">
                {["Frontend", "Backend", "Extracurricular"].map((category) => (
                    <SelectableButton
                        key={category}
                        title={category}
                        selected={selected === category}
                        onClick={() => handleSelection(category)}
                    />
                ))}
            </div>

            <div className="flex flex-col gap-8">
                <div className="flex flex-col text-lg lg:flex-row gap-8 lg:text-2xl">
                    {skillDescriptions[selected].map((skill, index) => (
                      <SkillItem key={index} skill={skill} />  
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default SkillSection;
