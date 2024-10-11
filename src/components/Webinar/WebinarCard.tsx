import { PiArrowUpRight } from "react-icons/pi";

function WebinarCard({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description: string;
}) {
  return (
    <div className="border-t border-l border-r border-b-[15px] border-black p-5 md:p-10 lg:p-15 rounded-[10px] flex flex-col justify-between items-end">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-6xl lg:text-[78px] font-semibold text-black text-right">
          {id}
        </h1>
        <div className="mt-10">
          <h6 className="text-base md:text-lg lg:text-xl font-semibold">
            {name}
          </h6>
          <p className="pt-[10px] text-[#4C4C4D] text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
      <div className="bg-[#FCFCFD] border border-[#F1F1F3] h-8 md:h-11 lg:h-[54px] w-8 md:w-11 lg:w-[54px] flex items-center justify-center rounded-[6px] mt-10 ">
        <PiArrowUpRight className="text-cornflower-blue w-[14px] md:w-5 lg:w-[26px] h-[14px] md:h-5 lg:h-[26px]" />
      </div>
    </div>
  );
}

export default WebinarCard;
