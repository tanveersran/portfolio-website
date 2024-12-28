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
        Frontend: data.frontendSkills,
        Backend: data.backendSkills,
        Soft: data.softSkills,
    };

    return (
        <motion.section
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col pt-32 gap-8 px-4 mx-4 min-h-screen w-screen max-w-7xl lg:px-0 lg:mx-0 lg:gap-16"
        >
            <SectionTitle title={data.skillSectionTitle} />
            <p className="text-lg lg:text-2xl">{data.skillSectionDescription}</p>
            <div className="flex flex-row gap-8 flex-wrap align-middle justify-center">
                {["Frontend", "Backend", "Soft"].map((category) => (
                    <SelectableButton
                        key={category}
                        title={category}
                        selected={selected === category}
                        onClick={() => handleSelection(category)}
                    />
                ))}
            </div>

            <div className="flex flex-col gap-8 mt-8">
                <div className="flex text-lg flex-wrap justify-center gap-8 lg:text-2xl">
                    {skillDescriptions[selected].map((skill, index) => (
                      <SkillItem key={index} skill={skill} />  
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default SkillSection;
