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
                    className="p-2 border-2 border-primary-dark rounded-md md:w-2/3 lg:w-3/5"
                    {...otherProps}
                />
            ) : (
                <input
                    className="p-2 border-2 border-primary-dark rounded-md md:w-1/2 lg:w-1/3"
                    {...otherProps}
                />
            )}
        </motion.div>
    );
}


export default FormInput;