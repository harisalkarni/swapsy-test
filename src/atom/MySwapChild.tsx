import EthIcon from "../assets/coin-eth.png";
import USDT from "../assets/coin-usdt.png";
import USDC from "../assets/coin-usdc.png";
import DAI from "../assets/coin-dai.png";
import { renderName } from "../utils";
import { MySwapDummy } from "../dummy/dummy";

interface MySwapChildProps {
  displayBtn: boolean;
  expiredStatus: boolean;
  btnBorder: boolean;
}
const MySwapChild = ({
  displayBtn,
  expiredStatus,
  btnBorder,
}: MySwapChildProps) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "ETH":
        return EthIcon;
      case "USDC":
        return USDC;
      case "USDT":
        return USDT;
      case "DAI":
        return DAI;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="text-white flex flex-row px-[9px] text-[10px] mb-[22px] mt-[29px] justify-between">
        <div className="w-1/5">Swap</div>
        <div className="w-1/3">From</div>
        <div className="w-1/3">To</div>
        {displayBtn && <div className="w-1/6"></div>}
      </div>

      {MySwapDummy.map((val) => {
        return (
          <div className="w-full mb-[8px] bg-erie-black px-[9px] py-[10px] rounded-[5px]">
            <div className="flex flex-row justify-between text-white items-center">
              <div className="w-1/5">
                <div className="text-[10px] text-tea-green">{val.id}</div>
                {expiredStatus && (
                  <div className="text-[6px]">Expires in 1d 45m</div>
                )}
              </div>
              <div className="flex flex-row items-center w-1/3">
                <div className="mr-[5px]">
                  <img
                    src={renderIcon(val.coinFrom)}
                    className="w-[21px] h-[21px]"
                    alt="coin icon"
                  />
                </div>
                <div>
                  <div className="text-[7px] text-tea-green">
                    {renderName(val.coinFrom)}
                  </div>
                  <div className="text-[10px]">{val.amountFrom}</div>
                </div>
              </div>
              <div className="flex flex-row items-center w-1/3">
                <div className="mr-[5px]">
                  <img
                    src={renderIcon(val.coinTo)}
                    className="w-[21px] h-[21px]"
                    alt="coin icon"
                  />
                </div>
                <div>
                  <div className="text-[7px] text-tea-green">
                    {renderName(val.coinTo)}
                  </div>
                  <div className="text-[10px]">{val.amounTo}</div>
                </div>
              </div>
              {displayBtn && (
                <div className="w-1/6">
                  <button
                    className={`text-[7px] w-[44px] h-[20px]   rounded-full ${
                      btnBorder
                        ? " border border-tea-green text-white"
                        : "bg-tea-green text-black"
                    }`}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MySwapChild;
