import SwapConnect from "../atom/SwapConnect";
import BottomInfo from "../atom/BottomInfo";
import { FiCopy } from "react-icons/fi";

interface SwapLinkprops {
  text: string;
  button: boolean;
}
const SwapLink = ({ text, button }: SwapLinkprops) => {
  const ExampleSwap = {
    tokenFrom: "ETH",
    amountFrom: 2323,
    tokenTo: "USDC",
    amountTo: 4322,
  };

  return (
    <div
      className={`w-[294px] h-[485px]  rounded-[5px]  px-[33px] relative bg-erie-black  ${
        button ? "pt-[33px]" : "pt-[69px]"
      }`}
    >
      <div className={`flex flex-col items-center mb-[24px] `}>
        <div className="text-[20px] text-tea-green">Swap #94812</div>
        <div className="text-white opacity-70 text-[10px]">{text}</div>
      </div>

      <SwapConnect swap={ExampleSwap} />

      {button && (
        <div className="mt-[40px] flex flex-row justify-between items-center">
          <div>
            <div className="text-[10px] text-tea-green">Swap Link</div>
            <div className="text-[9px] text-white">
              https://swapsy.io/0x..67e67/94
            </div>
          </div>
          <FiCopy color={"#DBF9CD"} size={20} />
        </div>
      )}

      <div className={`${button ? "mt-[16px]" : "mt-[60px]"}`}>
        <BottomInfo />
      </div>

      {button && (
        <div className="absolute bottom-[42px] flex flex-row justify-center w-full left-0 right-0">
          <button className="bg-ocean-blue text-white text-[11px] py-[9px] px-[48px] rounded-full">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default SwapLink;
