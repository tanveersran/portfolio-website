const SkillItem = ({ skill }) => {
    return (
        <div className="flex flex-col gap-4 text-center">
            <img src={skill.icon} alt={skill.name} className="w-24 h-24" />
            <p className="text-primary-dark font-semibold text-2xl">{skill.name}</p>
        </div>
    );
}

export default SkillItem;