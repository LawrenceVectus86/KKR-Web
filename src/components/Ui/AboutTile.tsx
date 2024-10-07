import { IoArrowForward } from "react-icons/io5";

function AboutTile({ text }: { text: string }) {
  return (
    <div className="flex flex-row items-center m-[14px]">
      <IoArrowForward className="text-chicago w-5 mr-3" color="text-chicago" />
      <span className="text-chicago font-medium text-sm md:text-base">
        {text}
      </span>
    </div>
  );
}

export default AboutTile;
