import { MySwapDummy } from "dummy/dummy";
import { MenuType } from "constants/types";
import Coins from "constants/coins";
import numeral from "numeral";

import useStore from "utils/store";
interface Props {
  type: MenuType;
}

function TransactionTable({ type }: Props) {
  const store = useStore();
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
        store.updateModal("CancelingSwap");
        break;
      case "Completed":
        store.updateModal("CompletedModal");
        break;
      case "Cancelled":
        store.updateModal("CanceledModal");
        break;
      case "Expired":
        store.updateModal("WithdrawModal");
        break;

      default:
        break;
    }
  };
  return (
    <div className="md:mt-[55px]">
      <div className="mb-[22px] mt-[29px] flex flex-row justify-between  px-[9px] text-[10px] text-white md:px-4 md:text-xs">
        <div className="md:w-1/1 w-1/5">Swap</div>
        <div className="w-1/3 md:w-1/3">From</div>
        <div className="w-1/3">To</div>
        {!isCancelled && <div className="w-1/6"></div>}
      </div>
      <div className="h-[274px] overflow-y-scroll overscroll-auto hover:overscroll-contain md:h-[800px]">
        {MySwapDummy.map(
          ({ amountTo, amountFrom, coinFrom, coinTo, id }, index) => {
            return (
              <div
                key={index}
                className="mb-[8px]  w-full rounded-[5px] bg-erie-black px-[9px] py-[10px] font-medium md:px-4 md:py-[10px]"
              >
                <div className="flex flex-row items-center justify-between text-white">
                  <div
                    className="md:w-1/1 w-1/5"
                    onClick={() => store.updateModal("DetailSwap")}
                  >
                    <div className="text-[10px] text-tea-green md:text-xs">
                      {id}
                    </div>
                    {isOpen && (
                      <div className="text-[6px] font-normal md:text-[10px]">
                        Expires in 1d 45m
                      </div>
                    )}
                  </div>
                  <div className="flex w-1/3 flex-row items-center md:w-1/3">
                    <div className="mr-[5px]">
                      <img
                        src={getCoin(coinFrom).avatar}
                        className="w-[21px] object-contain md:w-6 "
                        alt="coin icon"
                      />
                    </div>
                    <div>
                      <div className="text-[7px] text-tea-green md:text-[10px]">
                        {getCoin(coinFrom).name}
                      </div>
                      <div className="text-[10px] md:text-xs">
                        {numeral(amountFrom).format("0,0")}
                      </div>
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-row items-center">
                    <div className="mr-[5px]">
                      <img
                        src={getCoin(coinTo).avatar}
                        className="w-[21px] object-contain md:w-6"
                        alt="coin icon"
                      />
                    </div>
                    <div>
                      <div className="text-[7px] text-tea-green md:text-[10px]">
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
                        className={`h-[20px] w-[53px] rounded-full text-center text-[7px] md:h-[22px] md:w-[60px] md:text-[10px] ${
                          isCompleted
                            ? " border border-tea-green text-white"
                            : "bg-tea-green text-black"
                        }`}
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
