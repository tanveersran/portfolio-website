import { motion } from "framer-motion";
import useIsLgScreen from "@/hooks/useIsScreen";

/*
    This component is used to display a half circle background component.
    Coded by: Tanveer Sran
*/
const HalfCircleComponent = () => {
    const isLgScreen = useIsLgScreen();

    const initialAnimation = isLgScreen ? { x: "-100%" } : { y: "-100%" };
    const animateAnimation = isLgScreen ? { x: "0" } : { y: "0" };

    return (
        <motion.div
            className="flex absolute top-0 left-0 w-screen bg-primary-dark 
            h-1/4 -z-1 rounded-b-3xl
            lg:w-1/2 lg:h-screen lg:rounded-r-full lg:rounded-bl-none"
            initial={initialAnimation}
            animate={animateAnimation}
            transition={{ type: "spring", stiffness: 30 }}
        />
    );
}

export default HalfCircleComponent;