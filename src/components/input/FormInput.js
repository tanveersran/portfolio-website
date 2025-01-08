import { motion } from "framer-motion";

const FormInput = ({ label, isTextArea = false, ...otherProps }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
        >
            {label && <label htmlFor={otherProps.name}>{label}</label>}
            {isTextArea ? (
                <textarea
                    className="p-2 border-2 border-primary-dark rounded-md"
                    {...otherProps}
                />
            ) : (
                <input
                    className="p-2 border-2 border-primary-dark rounded-md"
                    {...otherProps}
                />
            )}
        </motion.div>
    );
}


export default FormInput;