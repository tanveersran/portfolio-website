import { motion } from "framer-motion";
const ProjectItem = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col text-center items-center justify-center gap-4 p-4 bg-primary-dark border-primary-dark border-2 rounded-lg shadow-md text-primary-tinted"
        >

            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <div className="bg-primary-tinted text-primary-dark rounded-lg p-2">
            <p className="text-center">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-sm text-primary-dark bg-primary rounded-md">{tag}</span>
                ))}
            </div>
            {project.link ? (
                <a href={project.link} className="text-sm text-primary-tinted underline">View demo</a>
            ) : (
                <p className="text-sm text-primary-tinted">Contact for demo</p>
            )}
        </motion.div>
    );
}

export default ProjectItem;