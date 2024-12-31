
const ExperienceCard = ({ experience }) => {
    return (
        <div className="bg-primary-tinted text-primary-dark p-4 rounded-xl shadow-lg border-primary-dark border-2 mb-4">
            <div className="flex items-center gap-8 mb-4">
                <img src={experience.companyLogo} alt={experience.title} className="w-24 h-24 rounded-sm object-contain" />
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <h4 className="text-lg font-semibold">{experience.company}</h4>
                </div>
            </div>
            <p className="text-md">{experience.description}</p>
            <p className="text-md font-semibold pt-2">{experience.date}</p>
        </div>
    );
}

export default ExperienceCard;