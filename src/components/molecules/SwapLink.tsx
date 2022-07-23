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
}
const SwapLink = ({
  text,
  button,
  onCancel,
  to,
  from,
  btnText,
}: SwapLinkprops) => {
  const store = useStore();
  const ExampleSwap = {
    tokenFrom: from,
    amountFrom: 2323,
    tokenTo: to,
    amountTo: 4322,
  };

  return (
    <div
      className={`z-20 w-[294px] h-[485px]  rounded-[5px]  px-[33px] relative bg-erie-black  ${
        button ? "pt-[33px]" : "pt-[69px]"
      }`}
    >
      <div
        className="absolute top-[12px] right-[12px]"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
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
          <button
            className="bg-ocean-blue text-white text-[11px] py-[9px] px-[48px] rounded-full"
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
