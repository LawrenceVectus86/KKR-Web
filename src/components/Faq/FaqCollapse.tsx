import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";

interface IProps {
  open?: boolean;
  name: string;
  desc: string;
}

const FaqCollapse: React.FC<IProps> = ({ open = false, name, desc }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      className="flex flex-col border border-[#F1F1F3] px-5 md:px-10 py-3 md:py-6 rounded-[6px] mb-[30px] cursor-pointer "
      onClick={handleOpen}
      id={"id"}
    >
      <div className="flex items-center justify-between w-full">
        <h6 className="text-base md:text-lg font-medium">{name}</h6>
        <div
          className={
            isOpen
              ? "bg-cornflower-blue border border-cornflower-blue rounded-[6px] h-8 md:h-11 w-8 md:w-11 flex items-center justify-center"
              : "bg-white border border-[#E5EFFF] rounded-[6px] h-8 md:h-11 w-8 md:w-11 flex items-center justify-center"
          }
        >
          {isOpen ? (
            <CgClose className="text-white h-4 md:h-6 w-4 md:w-6" />
          ) : (
            <FaPlus className="text-[#4C4C4C] h-4 md:h-6 w-4 md:w-6" />
          )}
        </div>
      </div>
      {isOpen ? (
        <div className="mt-4 text-sm md:text-base ">{desc}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FaqCollapse;
