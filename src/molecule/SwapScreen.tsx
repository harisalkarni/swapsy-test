import { stat } from "fs";
import SwapConnect from "../atom/SwapConnect";

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

  return (
    <div
      className={`w-[294px] h-[485px]  rounded-[5px] pt-[33px] px-[33px] relative ${
        status === "completed" ? "bg-ocean-blue" : "bg-erie-black"
      }`}
    >
      {status === "completed" && (
        <div className="bg-tea-green w-[137px] h-[41px] text-ocean-blue font-bold text-[17px] rounded-[5px] flex flex-row justify-center items-center -ml-[40px] mb-[33px]">
          <span>Completed</span>
        </div>
      )}

      <div className="text-white opacity-60 text-[10px]">Expires in 2d 12h</div>
      <div className="text-[20px] text-white mb-[12px]">Swap #94812</div>
      <div className="text-white text-[10px] mb-[32px]">
        <span className="text-white opacity-60">Created by </span>
        <span className="text-tea-green truncate">0xb319Ac09505B1f0….</span>
      </div>
      <SwapConnect swap={ExampleSwap} />
      <div className="mt-[24px]">
        <div className="text-white opacity-60 flex flex-row justify-between text-[10px]">
          <div>Price</div>
          <div>0.007 per USDT</div>
        </div>
        <div className="text-white opacity-60 flex flex-row justify-between text-[10px]">
          <div>Platform Fee</div>
          <div>0.5%</div>
        </div>
        <div className="text-white opacity-60 flex flex-row justify-between text-[10px]">
          <div>Total Amount</div>
          <div>-ETH</div>
        </div>
        <div className="text-tea-green text-[10px] mt-[16px]">
          View on Eherscan
        </div>
      </div>
      {status === "default" && (
        <div className="absolute bottom-[42px] flex flex-row justify-center w-full left-0 right-0">
          <button className="bg-ocean-blue text-white text-[14px] py-[10px] px-[31px] rounded-full">
            Connect & Accept
          </button>
        </div>
      )}
    </div>
  );
};

export default SwapScreen;
