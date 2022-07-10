import SwapConnect from "components/atoms/SwapConnect";
import BottomInfo from "components/atoms/BottomInfo";
import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";

interface SwapConnectProps {
  status?: string;
}
const SwapScreen = ({ status }: SwapConnectProps) => {
  const ExampleSwap = {
    tokenFrom: "ETH",
    amountFrom: 2323,
    tokenTo: "USDC",
    amountTo: 4322,
  };

  const store = useStore();

  return (
    <div
      className={`z-20 w-[294px] h-[485px]  rounded-[5px] pt-[33px] px-[33px] relative ${
        status === "completed" ? "bg-ocean-blue" : "bg-erie-black"
      }`}
    >
      {status === "completed" && (
        <div
          className="absolute top-[18px] right-[18px]"
          onClick={() => store.updateModal("NULL")}
        >
          <IoMdClose size={20} color="#FFF" />
        </div>
      )}

      {status === "completed" && (
        <div className="bg-tea-green w-[137px] h-[41px] text-ocean-blue font-bold text-[17px] rounded-[5px] flex flex-row justify-center items-center -ml-[40px] mb-[33px]">
          <span>Completed</span>
        </div>
      )}
      <div className="text-white opacity-60 text-[10px]">Expires in 2d 12h</div>
      <div className="text-[20px] text-white mb-[12px]">Swap #94812</div>
      <div className="text-white text-[10px] mb-[32px] flex flex-row">
        <div>
          <span className="text-white opacity-60">Created by </span>
          <span className="text-tea-green truncate">0xb319Ac09505B1f0….</span>
        </div>
      </div>
      <SwapConnect swap={ExampleSwap} />
      <div className="mt-[24px]">
        <BottomInfo />
      </div>

      {status === "default" && (
        <div className="absolute bottom-[42px] flex flex-row justify-center w-full left-0 right-0">
          {store.wallet === "" ? (
            <button
              className="bg-ocean-blue text-white text-[14px] py-[10px] px-[31px] rounded-full"
              onClick={() => store.updateModal("SelectWallet")}
            >
              Connect & Accept
            </button>
          ) : store.trxStatus ? (
            <button
              className="bg-ocean-blue text-white text-[14px] py-[10px] px-[31px] rounded-full"
              onClick={() => store.updateModal("ProcessingTrx")}
            >
              Accept
            </button>
          ) : (
            <button
              className="bg-ocean-blue text-white text-[14px] py-[10px] px-[31px] rounded-full"
              onClick={() => store.updateModal("ApprovingToken")}
            >
              Approve USDC
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SwapScreen;
