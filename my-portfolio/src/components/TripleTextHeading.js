import { motion } from "framer-motion";
/* 
  This component is used to display a heading with a title, subtitle, and description.
  Coded by: Tanveer Sran
*/
const TripleTextHeading = ({ title, subtitle, description }) => {
  return (
    <div className={"flex flex-col gap-4 lg:text-left lg:gap-12 "}>
      <h1 className="text-4xl lg:text-6xl">{title}</h1>
      <h2 className="text-3xl lg:text-4xl">{subtitle}</h2>
      <p className="lg:text-2xl">{description}</p>
    </div>
  );
}

export default TripleTextHeading;