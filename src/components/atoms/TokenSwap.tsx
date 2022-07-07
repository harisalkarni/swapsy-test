import Duration from "./Duration";
import ArrowIcon from "assets/arrow-icon.svg";
import { useState, Dispatch } from "react";
import Coins from "constants/coins";
import { CoinType } from "constants/types";
import Durations from "constants/durations";
import BalanceLabel from "./BalanceLabel";
import CoinOptions from "./CoinOptions";
import FeeLabel from "./FeeLabel";
import { ModalType } from "constants/types";
import AmountLabel from "./AmountLabel";

interface TokenSwapProps {
  address: String;
  actionConnect: () => void;
}

const TokenSwap = ({ actionConnect, address }: TokenSwapProps) => {
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
    <div className="relative z-5">
      <div className="flex flex-row items-center mb-[8px]">
        <div className="w-[124px] md:w-[148px]">
          <CoinOptions selected={from} setSelected={setFrom} />
        </div>
        <BalanceLabel balance={100.1234} />
      </div>
      <div className="text-white/30 flex flex-row items-end w-full  justify-between">
        <AmountLabel amount={1.2212} name={from.name} />
        <button onClick={reverse}>
          <img
            src={ArrowIcon}
            alt="Arrow Icon"
            className="w-[13.5px] h-5 md:w-6 md:h-6 object-contain"
          />
        </button>
      </div>
      <div className="flex flex-row items-center mt-4 mb-[8px]">
        <div className="w-[124px] md:w-[148px]">
          <CoinOptions selected={to} setSelected={setTo} />
        </div>
        <BalanceLabel balance={100.1234} />
      </div>
      <AmountLabel amount={1.2212} name={to.name} />
      <Duration selected={duration} setSelected={setDuration} />
      <div className="text-white/40 flex flex-col mt-9 text-[10px] md:text-xs">
        <FeeLabel label="Price" value="0.007 per USDT" />
        <FeeLabel
          label="Platform Fee"
          value="0.5%"
          classname="my-[2px] md:my-1"
        />
        <FeeLabel label="Total Amount" value={`${total} ETH`} />
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="text-white font-semibold bg-ocean-blue py-[10px] px-[33px] rounded-full text-[14px]"
          onClick={() => actionConnect()}
        >
          {address !== "" ? "Create Swap" : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};
export default TokenSwap;
