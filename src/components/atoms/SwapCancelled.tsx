import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";
import { FaCheck } from "react-icons/fa";

interface Props {
  text: string;
  swap: string;
  amount: number;
}

const SwapCancelled = ({ text, swap, amount }: Props) => {
  const store = useStore();
  return (
    <div className="relative z-20 flex  h-[485px] w-[294px] flex-col items-center rounded-[5px] bg-erie-black px-[33px] pt-[68px]">
      <div
        className="absolute top-[18px] right-[18px] cursor-pointer"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="mb-[24px] h-[50px] w-[67px]">
        {" "}
        <FaCheck color="#DBF9CD" size={67} />
      </div>
      <div className="w-[104px] text-center text-[20px] font-medium text-white">
        {text}
      </div>
      <div className="mt-[43px]">
        <div className="flex h-[40px] w-[220px] flex-row justify-between bg-secondaryblack py-[11px] px-[11px] text-[12px]">
          <div className="font-medium text-white opacity-70">Swap</div>
          <div className="font-medium text-white">{swap}</div>
        </div>
        <div className="mt-[8px] flex h-[40px] w-[220px] flex-row justify-between bg-secondaryblack py-[11px] px-[11px] text-[12px]">
          <div className="text-white opacity-70">Amount</div>
          <div className="text-white">{amount} ETH</div>
        </div>
      </div>
      <div className=" absolute bottom-[34px] left-0 right-0  flex flex-row justify-center">
        <button
          className="h-[34px] w-[138px] rounded-full bg-ocean-blue text-[11px] text-white"
          onClick={() => store.updateModal("NULL")}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default SwapCancelled;
