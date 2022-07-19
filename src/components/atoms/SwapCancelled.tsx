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
    <div className="z-20 w-[294px] h-[485px]  rounded-[5px] pt-[88px] px-[33px] relative bg-erie-black flex flex-col items-center">
      <div className="absolute top-[18px] right-[18px]">
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="w-[67px] h-[50px] mb-[24px]">
        {" "}
        <FaCheck color="#DBF9CD" size={67} />
      </div>
      <div className="text-white w-[104px] text-center text-[20px]">{text}</div>
      <div className="mt-[43px]">
        <div className="bg-secondaryblack w-[220px] h-[40px] flex flex-row justify-between text-[12px] py-[11px] px-[11px]">
          <div className="opacity-70 text-white">Swap</div>
          <div className="text-white">{swap}</div>
        </div>
        <div className="bg-secondaryblack w-[220px] h-[40px] flex flex-row justify-between text-[12px] py-[11px] px-[11px] mt-[8px]">
          <div className="opacity-70 text-white">Amount</div>
          <div className="text-white">{amount} ETH</div>
        </div>
      </div>
      <div className=" absolute bottom-[34px] left-0 right-0  flex flex-row justify-center">
        <button
          className="text-white w-[138px] h-[34px] rounded-full text-[11px] bg-ocean-blue"
          onClick={() => store.updateModal("NULL")}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default SwapCancelled;
