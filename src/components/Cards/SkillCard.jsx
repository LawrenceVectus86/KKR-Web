function SkillCard({
    name,
    description,
    icon,
  }) {
    return (
      <div className="p-5 md:p-7 lg:p-[34px] border border-black rounded-3xl">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-center">
            <img
              src={icon}
              alt={name}
              className="h-8 md:h-11 lg:h-14 w-8 md:w-11 lg:w-14 rounded-full"
            />
            <h6 className="text-base md:text-lg lg:text-xl font-semibold text-black ml-3">
              {name}
            </h6>
          </div>
          <div className="border border-black rounded-[20px] p-5 md:p-6 mt-5">
            <p className="text-chicago text-sm md:text-base">{description}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default SkillCard;

