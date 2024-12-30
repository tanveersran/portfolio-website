import { motion } from "framer-motion";
import Image from "next/image";
const TextImageButton = ({ text, image, onClick }) => {
    return (
        <motion.button
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick} className="bg-primary-dark text-primary py-2 px-6 min-w-min rounded-2xl w-fit flex flex-row items-center gap-2"
        >
            <Image src={image} alt="Button image" width={20} height={20} />
            {text}
        </motion.button>
    );
}

export default TextImageButton;