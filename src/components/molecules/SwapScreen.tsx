import SwapConnect from "components/atoms/SwapConnect";
import BottomInfo from "components/atoms/BottomInfo";
import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";
import { CoinType } from "constants/types";
import React, { Dispatch } from "react";
import { isBrowser } from "react-device-detect";

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
      className={`relative z-20 h-[485px]  w-[294px] rounded-[5px] px-[33px] pt-[33px] ${
        status === "completed" ? "bg-ocean-blue" : "bg-erie-black"
      }`}
    >
      <div
        className="absolute top-[16px] right-[16px] cursor-pointer"
        onClick={() => onClear()}
      >
        <IoMdClose
          size={20}
          color={status === "completed" ? "#FFF" : "#707070"}
        />
      </div>

      {status === "completed" && (
        <div className="-ml-[40px] mb-[33px] flex h-[41px] w-[137px] flex-row items-center justify-center rounded-[5px] bg-tea-green text-[17px] font-medium text-ocean-blue">
          <span>Completed</span>
        </div>
      )}
      <div className="text-[10px] text-white opacity-60">Expires in 2d 12h</div>
      <div className="mb-[12px] text-[20px] text-white">Swap #94812</div>
      <div className="mb-[32px] flex flex-row text-[10px] text-white">
        <div>
          <span className="text-white opacity-60">Created by </span>
          <span className="truncate text-tea-green">0xb319Ac09505B1f0….</span>
        </div>
      </div>
      <SwapConnect swap={ExampleSwap} />
      <div className="mt-[24px]">
        <BottomInfo amount={fromAmount} />
      </div>

      {status === "default" && (
        <div className="absolute bottom-[42px] left-0 right-0 flex w-full flex-row justify-center">
          {store.wallet.label === "" ? (
            <button
              className="rounded-full bg-ocean-blue py-[10px] px-[31px] text-[14px] text-white"
              onClick={() => {
                store.updateOverlay(false);
                if (isBrowser) {
                  store.updateSideModal("SelectWallet");
                } else {
                  store.updateModal("SelectWallet");
                }
              }}
            >
              Connect & Accept
            </button>
          ) : store.trxReceipt ? (
            <button
              className="rounded-full bg-ocean-blue py-[10px] px-[31px] text-[14px] text-white"
              onClick={() => store.updateModal("ApprovingTokenReceipt")}
            >
              Approve {`${to.name}`}
            </button>
          ) : (
            <button
              className="rounded-full bg-ocean-blue py-[10px] px-[31px] text-[14px] text-white"
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
