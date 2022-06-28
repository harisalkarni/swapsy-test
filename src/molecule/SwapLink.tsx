import SwapConnect from "../atom/SwapConnect";
import BottomInfo from "../atom/BottomInfo";
import { FiCopy } from "react-icons/fi";

const SwapLink = () => {
  const ExampleSwap = {
    tokenFrom: "ETH",
    amountFrom: 2323,
    tokenTo: "USDC",
    amountTo: 4322,
  };

  return (
    <div
      className={`w-[294px] h-[485px]  rounded-[5px] pt-[33px] px-[33px] relative bg-erie-black `}
    >
      <div className="flex flex-col items-center mb-[24px]">
        <div className="text-[20px] text-tea-green">Swap #94812</div>
        <div className="text-white opacity-70 text-[10px]">
          Expires in 2d 12h
        </div>
      </div>

      <SwapConnect swap={ExampleSwap} />

      <div className="mt-[40px] flex flex-row justify-between items-center">
        <div>
          <div className="text-[10px] text-tea-green">Swap Link</div>
          <div className="text-[9px] text-white">
            https://swapsy.io/0x..67e67/94
          </div>
        </div>
        <FiCopy color={"#DBF9CD"} size={20} />
      </div>

      <div className="mt-[16px]">
        <BottomInfo />
      </div>

      <div className="absolute bottom-[42px] flex flex-row justify-center w-full left-0 right-0">
        <button className="bg-ocean-blue text-white text-[11px] py-[9px] px-[48px] rounded-full">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SwapLink;
