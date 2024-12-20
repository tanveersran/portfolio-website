import { motion } from "framer-motion";

/*
    This component is used to display a half circle background component.
    Coded by: Tanveer Sran
*/
const HalfCircleComponent = () => {
    return (
        <motion.div
            className="w-1/2 text-primary bg-primary-dark rounded-r-full
            flex flex-col justify-center px-52 gap-8 absolute top-0 left-0 h-screen -z-1"
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            transition={{ type: "spring", stiffness: 30 }}
          />
    );
}

export default HalfCircleComponent;