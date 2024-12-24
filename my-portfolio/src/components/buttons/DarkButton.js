import { motion } from "framer-motion";
/*
This component is used to display a dark button with a title.
Coded by: Tanveer Sran
*/
const DarkButton = ({ title, onClick }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick} className="bg-primary-dark text-primary-tinted py-2 px-6 rounded-2xl w-fit h-fit "
    >
      {title}
    </motion.button>
  );
}

export default DarkButton;