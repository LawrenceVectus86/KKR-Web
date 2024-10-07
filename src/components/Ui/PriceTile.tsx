import IcCheck from "../../assets/icons/check.svg";

function PriceTile({ text, className }: { text: string; className: string }) {
  return (
    <div className={className}>
      <div className="flex flex-row items-center">
        <img src={IcCheck} alt="icon-check" className="mr-2" />
        <span className="text-[#4C4C4C] font-medium text-sm md:text-base">
          {text}
        </span>
      </div>
    </div>
  );
}

export default PriceTile;
