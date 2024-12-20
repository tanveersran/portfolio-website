import { motion } from "framer-motion";
/* 
  This component is used to display a heading with a title, subtitle, and description.
  It will animate the opacity of the component when the animated prop is set to true.
  Coded by: Tanveer Sran
*/
const TripleTextHeading = ({ title, subtitle, description, animated }) => {
  return (
    <motion.div
    initial={animated ? { opacity: 0 } : {}}
    animate={animated ? { opacity: 1 } : {}}
    transition={animated ? { duration: 0.5, delay: 0.3 } : {}}
      className={"flex flex-col text-left gap-6 "}>
      <h1 className="text-6xl">{title}</h1>
      <h2 className="text-4xl">{subtitle}</h2>
      <p className="text-xl">{description}</p>
    </motion.div>
  );
}

export default TripleTextHeading;