import SwapConnect from "components/atoms/SwapConnect";
import BottomInfo from "components/atoms/BottomInfo";
import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";
import { CoinType } from "constants/types";
import React, { Dispatch } from "react";

interface SwapConnectProps {
  status?: string;
  from: CoinType;
  setFrom: Dispatch<React.SetStateAction<CoinType>>;
  to: CoinType;
  setTo: Dispatch<React.SetStateAction<CoinType>>;
  toAmount: number;
  fromAmount: number;
}
const SwapScreen = ({
  status,
  from,
  setFrom,
  to,
  setTo,
  toAmount,
  fromAmount,
}: SwapConnectProps) => {
  const ExampleSwap = {
    tokenFrom: from,
    amountFrom: fromAmount,
    tokenTo: to,
    amountTo: toAmount,
  };

  const store = useStore();

  const onClear = () => {
    if (status === "completed") {
      store.updateModal("NULL");
      store.addAddressToWallet({ label: "", amount: 0 });
      store.updateTrxStatus(false);
      store.updateApproveTrx(false);
      store.updateTrxReceipt(false);
    } else {
      store.updateModal("NULL");
    }
  };

  return (
    <div
      className={`z-20 w-[294px] h-[485px]  rounded-[5px] pt-[33px] px-[33px] relative ${
        status === "completed" ? "bg-ocean-blue" : "bg-erie-black"
      }`}
    >
      <div
        className="absolute top-[16px] right-[16px]"
        onClick={() => onClear()}
      >
        <IoMdClose
          size={20}
          color={status === "completed" ? "#FFF" : "#707070"}
        />
      </div>

      {status === "completed" && (
        <div className="bg-tea-green w-[137px] h-[41px] text-ocean-blue font-medium text-[17px] rounded-[5px] flex flex-row justify-center items-center -ml-[40px] mb-[33px]">
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
        <BottomInfo amount={fromAmount} />
      </div>

      {status === "default" && (
        <div className="absolute bottom-[42px] flex flex-row justify-center w-full left-0 right-0">
          {store.wallet.label === "" ? (
            <button
              className="bg-ocean-blue text-white text-[14px] py-[10px] px-[31px] rounded-full"
              onClick={() => store.updateModal("SelectWallet")}
            >
              Connect & Accept
            </button>
          ) : store.trxReceipt ? (
            <button
              className="bg-ocean-blue text-white text-[14px] py-[10px] px-[31px] rounded-full"
              onClick={() => store.updateModal("ApprovingTokenReceipt")}
            >
              Approve {`${to.name}`}
            </button>
          ) : (
            <button
              className="bg-ocean-blue text-white text-[14px] py-[10px] px-[31px] rounded-full"
              onClick={() => store.updateModal("ProcessingTrx")}
            >
              Accept
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SwapScreen;
