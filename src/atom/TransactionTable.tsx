import { MySwapDummy } from "dummy/dummy";
import { MenuType } from "constants/types";
import Coins from "constants/coins";

interface Props {
  type: MenuType;
}

function TransactionTable({ type }: Props) {
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
  return (
    <div>
      <div className="text-white flex flex-row px-[9px] text-[10px] mb-[22px] mt-[29px] justify-between">
        <div className="w-1/5">Swap</div>
        <div className="w-1/3">From</div>
        <div className="w-1/3">To</div>
        {!isCancelled && <div className="w-1/6"></div>}
      </div>

      <div className="h-[274px] overflow-y-scroll">
        {MySwapDummy.map(({ amountTo, amountFrom, coinFrom, coinTo, id }) => {
          return (
            <div className="w-full mb-[8px] bg-erie-black px-[9px] py-[10px] rounded-[5px]">
              <div className="flex flex-row justify-between text-white items-center">
                <div className="w-1/5">
                  <div className="text-[10px] text-tea-green">{id}</div>
                  {isOpen && (
                    <div className="text-[6px]">Expires in 1d 45m</div>
                  )}
                </div>
                <div className="flex flex-row items-center w-1/3">
                  <div className="mr-[5px]">
                    <img
                      src={getCoin(coinFrom).avatar}
                      className="w-[21px] h-[21px]"
                      alt="coin icon"
                    />
                  </div>
                  <div>
                    <div className="text-[7px] text-tea-green">
                      {getCoin(coinFrom).name}
                    </div>
                    <div className="text-[10px]">{amountFrom}</div>
                  </div>
                </div>
                <div className="flex flex-row items-center w-1/3">
                  <div className="mr-[5px]">
                    <img
                      src={getCoin(coinTo).avatar}
                      className="w-[21px] h-[21px]"
                      alt="coin icon"
                    />
                  </div>
                  <div>
                    <div className="text-[7px] text-tea-green">
                      {getCoin(coinTo).name}
                    </div>
                    <div className="text-[10px]">{amountTo}</div>
                  </div>
                </div>
                {!isCancelled && (
                  <div className="w-1/6">
                    <button
                      className={`text-[7px] px-[9px] py-[6px] rounded-full ${
                        isCompleted
                          ? " border border-tea-green text-white"
                          : "bg-tea-green text-black"
                      } ${isCompleted && "px-3"}`}
                    >
                      {renderButtonLabel()}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TransactionTable;
