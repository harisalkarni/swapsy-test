import Duration from "./Duration";
import ArrowIcon from "assets/arrow-icon.svg";
import React, { useState, Dispatch } from "react";

import Durations from "constants/durations";
import BalanceLabel from "./BalanceLabel";
import CoinOptions from "./CoinOptions";
import FeeLabel from "./FeeLabel";
import AmountLabel from "./AmountLabel";
import useStore from "utils/store";
import { CoinType } from "constants/types";

interface TokenSwapProps {
  address: String;
  actionConnect: () => void;
  to: CoinType;
  setTo: Dispatch<React.SetStateAction<CoinType>>;
  from: CoinType;
  setFrom: Dispatch<React.SetStateAction<CoinType>>;
}

const TokenSwap = ({
  actionConnect,
  address,
  to,
  setTo,
  from,
  setFrom,
}: TokenSwapProps) => {
  const [duration, setDuration] = useState<string>(Durations[0]);

  const [fromAmount, setFromAmount] = useState<number>(0);
  const [toAmount, setToAmount] = useState<number>(0);

  const total = "-";
  const store = useStore();
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
        <AmountLabel
          amount={fromAmount}
          name={from.name}
          setAmount={setFromAmount}
        />
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
      <AmountLabel amount={toAmount} name={to.name} setAmount={setToAmount} />
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
          className={`text-white font-semibold py-[10px] px-[33px] rounded-full text-[14px] ${
            fromAmount === 0 && address !== ""
              ? "bg-ocean-blue/30"
              : "bg-ocean-blue "
          }`}
          onClick={() => actionConnect()}
          disabled={fromAmount === 0 && address !== ""}
        >
          {store.approveTrx
            ? "Create Swap"
            : address !== ""
            ? `Approve ${to.name}`
            : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};
export default TokenSwap;
