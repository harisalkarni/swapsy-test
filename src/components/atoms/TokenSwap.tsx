import ListIcon from "./ListIcon";
import Duration from "./Duration";
import ArrowIcon from "assets/arrow-icon.svg";
import { useState } from "react";
import Coins from "constants/coins";
import { CoinType } from "constants/types";
import Durations from "constants/durations";

const TokenSwap = () => {
  const [from, setFrom] = useState<CoinType>(Coins[0]);
  const [to, setTo] = useState<CoinType>(Coins[1]);
  const [duration, setDuration] = useState<string>(Durations[0]);
  const [total, setTotal] = useState("-");

  const reverse = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="relative z-10">
      <div className="flex flex-row items-center mb-[8px]">
        <div className="w-[124px] md:w-[148px]">
          <ListIcon selected={from} setSelected={setFrom} />
        </div>
        <div className="text-[8px] md:text-xs opacity-60 text-white ml-[16px]">
          <div>Balance</div>
          <div>0.00</div>
        </div>
      </div>
      <div className="text-white/30 flex flex-row items-end w-full  justify-between">
        <div className="w-[85px] h-[33px] flex flex-row items-end">
          <div className="text-[24px] md:text-[28px] leading-[24px]">0.00</div>
          <div className="text-[16px] md:text-[20px] ml-1 leading-[20px]">
            {from.name}
          </div>
        </div>
        <button onClick={reverse}>
          <img src={ArrowIcon} alt="Arrow Icon" className="w-[13.5px] h-5 md:w-6 md:h-6 object-contain" />
        </button>
      </div>
      <div className="flex flex-row items-center mt-4 mb-[8px]">
        <div className="w-[124px] md:w-[148px]">
          <ListIcon selected={to} setSelected={setTo} />
        </div>
        <div className="text-[8px] md:text-xs opacity-60 text-white ml-[16px]">
          <div>Balance</div>
          <div>0.00</div>
        </div>
      </div>
      <div className="text-white/30 flex flex-row items-end w-[85px] h-[33px]">
        <div className="text-[24px] md:text-[28px] leading-[24px]">0.00</div>
        <div className="text-[16px] md:text-[20px] ml-1 leading-[20px]">
          {to.name}
        </div>
      </div>
      <div>
        <Duration selected={duration} setSelected={setDuration} />
      </div>
      <div className="text-white/40 flex flex-col mt-9 text-[10px] md:text-xs">
        <div className="flex flex-row justify-between">
          <div>Price</div>
          <div className="text-right">0.007 per USDT</div>
        </div>
        <div className="flex flex-row justify-between my-[2px]">
          <div>Platform Fee</div>
          <div className="text-right">0.5%</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>Total Amount</div>
          <div className="text-right">{total} ETH</div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="text-white bg-ocean-blue py-[10px] px-[33px] rounded-full text-[14px]">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};
export default TokenSwap;
