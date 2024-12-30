import { motion } from "framer-motion";

/*
    This component is used to display a half circle background component.
    Coded by: Tanveer Sran
*/
const HalfCircleComponent = () => {
    return (<>
        {/* Desktop view */}
        <motion.div
            className="hidden lg:flex absolute top-0 left-0 bg-primary-dark 
            -z-1 w-1/2 h-screen rounded-r-full rounded-bl-none"
            initial={{x: "-100%"}}
            whileInView={{x: "0"}}
            transition={{ type: "spring", stiffness: 30 }}
        />
        {/* Mobile/tablet view */}
        <motion.div
            className="flex absolute top-0 left-0 w-screen bg-primary-dark 
        h-1/4 -z-1 lg:hidden"
            initial={{y: "-100%"}}
            animate={{y: "0"}}
            transition={{ type: "spring", stiffness: 30 }}
        />
    </>
    );
}

export default HalfCircleComponent;