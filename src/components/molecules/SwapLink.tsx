import SwapConnect from "components/atoms/SwapConnect";
import BottomInfo from "components/atoms/BottomInfo";
import { FiCopy } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";
import { CoinType } from "constants/types";

interface SwapLinkprops {
  text: string;
  button: boolean;
  onCancel: () => void;
  from: CoinType;
  to: CoinType;
  btnText: string;
  fromAmount: number;
  toAmount: number;
}
const SwapLink = ({
  text,
  button,
  onCancel,
  to,
  from,
  btnText,
  fromAmount,
  toAmount,
}: SwapLinkprops) => {
  const store = useStore();
  const ExampleSwap = {
    tokenFrom: from,
    amountFrom: fromAmount,
    tokenTo: to,
    amountTo: toAmount,
  };

  return (
    <div
      className={`relative z-20 h-[485px]  w-[294px]  rounded-[5px] bg-erie-black px-[33px]  ${
        button ? "pt-[33px]" : "pt-[69px]"
      }`}
    >
      <div
        className="absolute top-[12px] right-[12px] cursor-pointer"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className={`mb-[24px] flex flex-col items-center `}>
        <div className="text-[20px] text-tea-green">Swap #94812</div>
        <div className="text-[10px] text-white opacity-70">{text}</div>
      </div>

      <SwapConnect swap={ExampleSwap} />

      {button && (
        <div className="mt-[40px] flex flex-row items-center justify-between">
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
        <BottomInfo amount={fromAmount} />
      </div>

      {button && (
        <div className="absolute bottom-[42px] left-0 right-0 flex w-full flex-row justify-center">
          <button
            className="rounded-full bg-ocean-blue py-[9px] px-[48px] text-[11px] text-white"
            onClick={() => onCancel()}
          >
            {btnText}
          </button>
        </div>
      )}
    </div>
  );
};

export default SwapLink;
