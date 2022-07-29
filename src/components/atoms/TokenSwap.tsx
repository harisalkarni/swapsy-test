import Duration from "./Duration";
import ArrowIcon from "assets/arrow-icon.svg";
import React, { useState, Dispatch, useCallback } from "react";

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
  fromAmount: number;
  toAmount: number;
  setFromAmount: Dispatch<React.SetStateAction<number>>;
  setToAmount: Dispatch<React.SetStateAction<number>>;
}

const TokenSwap = ({
  actionConnect,
  address,
  to,
  setTo,
  from,
  setFrom,
  fromAmount,
  setFromAmount,
  setToAmount,
  toAmount,
}: TokenSwapProps) => {
  const [duration, setDuration] = useState<string>(Durations[0]);

  const store = useStore();
  const reverse = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);

    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const disableButton = useCallback(() => {
    if (address !== "") {
      if (fromAmount === 0) {
        return true;
      } else if (toAmount === 0) {
        return true;
      } else {
        return false;
      }
    }
  }, [fromAmount, toAmount, address]);

  return (
    <div className="z-5 relative">
      <div className="mb-[8px] flex flex-row items-center">
        <div className="h-[36px] w-[124px] rounded-[16px] md:h-[41px] md:w-[123px]">
          <CoinOptions selected={from} setSelected={setFrom} />
        </div>
        <BalanceLabel balance={store.wallet.amount} />
      </div>
      <div className="flex w-full flex-row items-end justify-between  text-white/30">
        <AmountLabel
          amount={fromAmount}
          name={from.name}
          setAmount={setFromAmount}
        />
        <button onClick={reverse}>
          <img
            src={ArrowIcon}
            alt="Arrow Icon"
            className="h-5 w-[13.5px] object-contain md:h-6 md:w-6"
          />
        </button>
      </div>
      <div className="mt-4 mb-[8px] flex flex-row items-center">
        <div className="h-[36px] w-[124px] md:h-[41px] md:w-[123px]">
          <CoinOptions selected={to} setSelected={setTo} />
        </div>
        <BalanceLabel balance={0} />
      </div>
      <AmountLabel amount={toAmount} name={to.name} setAmount={setToAmount} />
      <Duration selected={duration} setSelected={setDuration} />
      <div className="mt-9 flex flex-col text-[10px] text-white/40 md:text-[12px] md:text-white">
        <FeeLabel label="Price" value="0.007 per USDT" />
        <FeeLabel
          label="Platform Fee"
          value="0.5%"
          classname="my-[2px] md:my-1"
        />
        <FeeLabel label="Total Amount" value={`${fromAmount} ETH`} />
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className={`h-[40px] w-[176px] rounded-full text-[14px] font-semibold  text-white md:h-[46px] md:w-[201px] ${
            disableButton() ? "bg-ocean-blue/30" : "bg-ocean-blue "
          }`}
          onClick={() => actionConnect()}
          disabled={disableButton()}
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
