const ExperienceCard = ({ experience }) => {
  return (
    <div className="items-center bg-primary-tinted text-primary-dark rounded-xl shadow-lg border-primary-dark border-2 lg:grid lg:grid-cols-2">
      <div className="bg-primary-dark text-primary-tinted flex flex-col justify-center items-center gap-8 p-8 ">
        <img
          src={experience.companyLogo}
          alt={experience.title}
          className="w-24 h-24 rounded-full object-contain"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{experience.title}</h3>
          <h4 className="text-md font-semibold">{experience.company}</h4>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-8">
        <p className="text-md">{experience.description}</p>
        <h5 className="text-sm font-semibold pt-2">{experience.date}</h5>
      </div>
    </div>
  );
};

export default ExperienceCard;
