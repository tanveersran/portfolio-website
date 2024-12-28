"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const ContactSection = ({data}) => {
    return (
        <motion.section
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col pt-32 gap-8 px-4 mx-4 min-h-screen w-screen max-w-7xl lg:px-0 lg:mx-0 lg:gap-16"
        >
            <SectionTitle title={data.contactSectionTitle} />
            <p>{data.contactSectionSubtitle}</p>
            <form action={data.contactButtonLink} method="post" className="flex flex-col gap-8">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">{data.contactButtonText}</button>
            </form>

        </motion.section>

    )
}

export default ContactSection;