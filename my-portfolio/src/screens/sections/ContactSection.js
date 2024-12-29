"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import FormInput from "@/components/input/FormInput";
import DarkButton from "@/components/buttons/DarkButton";

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
        const mailtoLink = `${data.contactButtonLink}?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <motion.section
            id="contact"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col pt-32 gap-8 px-4 mx-4 min-h-screen w-screen max-w-7xl lg:px-0 lg:mx-0 lg:gap-16"
        >
            <SectionTitle title={data.contactSectionTitle} />
            <p>{data.contactSectionSubtitle}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 ">
                <FormInput type="text" name="name" placeholder="Name" required onChange={handleChange} />
                <FormInput type="email" name="email" placeholder="Email" required onChange={handleChange} />
                <FormInput name="message" isTextArea={true} placeholder="Message" required onChange={handleChange} />
                <DarkButton title={data.contactButtonText} type="submit" />
            </form>
        </motion.section>
    );
}

export default ContactSection;