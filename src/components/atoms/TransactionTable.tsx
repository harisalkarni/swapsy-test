import { MySwapDummy } from "dummy/dummy";
import { MenuType, ModalType } from "constants/types";
import Coins from "constants/coins";
import numeral from "numeral";
import React, { Dispatch } from "react";
interface Props {
  type: MenuType;
  getDetailSwap: Dispatch<React.SetStateAction<ModalType>>;
}

function TransactionTable({ type, getDetailSwap }: Props) {
  const isOpen = type === "Open";
  const isCancelled = type === "Cancelled";
  const isCompleted = type === "Completed";

  const getCoin = (name: string) => {
    const coin = Coins.filter((coin) => coin.name === name)[0];
    return coin;
  };

  const renderButtonLabel = () => {
    switch (type) {
      case "Open":
        return "Cancel";
      case "Completed":
        return "View";
      case "Expired":
        return "Withdraw";
    }
  };

  const displayModal = () => {
    switch (type) {
      case "Open":
        getDetailSwap("CancelingSwap");
        break;
      case "Completed":
        getDetailSwap("CompletedModal");
        break;
      case "Cancelled":
        getDetailSwap("CanceledModal");
        break;
      case "Expired":
        getDetailSwap("WithdrawModal");
        break;

      default:
        break;
    }
  };
  return (
    <div className="md:mt-[55px]">
      <div className="text-white flex flex-row px-[9px] md:px-4  text-[10px] md:text-xs mb-[22px] mt-[29px] justify-between">
        <div className="w-1/5 md:w-1/1">Swap</div>
        <div className="w-1/3 md:w-1/3">From</div>
        <div className="w-1/3">To</div>
        {!isCancelled && <div className="w-1/6"></div>}
      </div>
      <div className="h-[274px] md:h-[355px] overflow-y-scroll">
        {MySwapDummy.map(
          ({ amountTo, amountFrom, coinFrom, coinTo, id }, index) => {
            return (
              <div
                key={index}
                className="w-full  mb-[8px] bg-erie-black px-[9px] md:px-4 py-[10px] md:py-[10px] rounded-[5px] font-medium"
              >
                <div className="flex flex-row justify-between text-white items-center">
                  <div
                    className="w-1/5 md:w-1/1"
                    onClick={() => getDetailSwap("DetailSwap")}
                  >
                    <div className="text-[10px] md:text-xs text-tea-green">
                      {id}
                    </div>
                    {isOpen && (
                      <div className="text-[6px] md:text-[10px] font-normal">
                        Expires in 1d 45m
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row items-center w-1/3 md:w-1/3">
                    <div className="mr-[5px]">
                      <img
                        src={getCoin(coinFrom).avatar}
                        className="w-[21px] md:w-6 object-contain "
                        alt="coin icon"
                      />
                    </div>
                    <div>
                      <div className="text-[7px] md:text-[10px] text-tea-green">
                        {getCoin(coinFrom).name}
                      </div>
                      <div className="text-[10px] md:text-xs">
                        {numeral(amountFrom).format("0,0")}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-1/3">
                    <div className="mr-[5px]">
                      <img
                        src={getCoin(coinTo).avatar}
                        className="w-[21px] md:w-6 object-contain"
                        alt="coin icon"
                      />
                    </div>
                    <div>
                      <div className="text-[7px] md:text-[10px] text-tea-green">
                        {getCoin(coinTo).name}
                      </div>
                      <div className="text-[10px] md:text-xs">
                        {numeral(amountTo).format("0,0")}
                      </div>
                    </div>
                  </div>
                  {!isCancelled && (
                    <div className="w-1/6 md:flex md:flex-row md:justify-end">
                      <button
                        onClick={() => displayModal()}
                        className={`text-[7px] font-semibold md:text-[10px] w-[53px] h-[20px] md:w-[60px] md:h-[22px] rounded-full ${
                          isCompleted
                            ? " border border-tea-green text-white"
                            : "bg-tea-green text-black"
                        } ${isCompleted && "px-3 md:px-5"}`}
                      >
                        {renderButtonLabel()}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default TransactionTable;
