import { motion } from "framer-motion";
const ProjectItem = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 p-4 bg-primary-tinted border-primary-dark border-2 rounded-lg shadow-md"
        >

            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-center">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-sm text-primary-dark bg-primary rounded-md">{tag}</span>
                ))}
            </div>
            {project.link ? (
                <a href={project.link} className="text-sm text-primary-dark underline">View demo</a>
            ) : (
                <p className="text-sm text-primary-dark">Contact for demo</p>
            )}
        </motion.div>
    );
}

export default ProjectItem;