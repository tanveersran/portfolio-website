"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import FormInput from "@/components/input/FormInput";
import DarkButton from "@/components/buttons/DarkButton";
import Copyright from "@/components/Copyright";

const ContactSection = ({ data }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:${data.contactEmail}?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <motion.section
            id="contact"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center align-middle pt-32 gap-8 px-4 mx-4 min-h-screen w-screen max-w-screen-lg lg:px-0 lg:mx-0 lg:gap-12"
        >
            <SectionTitle title={data.contactSectionTitle} />
            <div className="flex flex-row items-center gap-4">
                <img src={"./email.png"} alt="Contact" className="w-8 h-8" />
                <p>{data.contactEmail}</p>
            </div>
            <p className="text-center">{data.contactSectionParagraph}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 justify-center items-center ">
                <FormInput type="text" name="name" placeholder="Name" required onChange={handleChange} />
                <FormInput type="email" name="email" placeholder="Email" required onChange={handleChange} />
                <FormInput name="message" isTextArea={true} placeholder="Message" required onChange={handleChange} />
                <DarkButton title={data.contactButtonText} type="submit" />
            </form>
            <Copyright data={data}/>
        </motion.section>
    );
}

export default ContactSection;