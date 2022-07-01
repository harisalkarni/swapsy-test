import EthIcon from "assets/coin-eth.png";
import UsdcIcon from "assets/coin-usdc.png";
import UsdtIcon from "assets/coin-usdt.png";
import DaiIcon from "assets/coin-dai.png";
import { FiCopy } from "react-icons/fi";

const ConnectWallet = () => {
  const amountList = [
    {
      name: "ETH",
      amount: 999999999,
    },
    {
      name: "USDC",
      amount: 999999999,
    },
    {
      name: "USDT",
      amount: 999999999,
    },
    {
      name: "DAI",
      amount: 999999999,
    },
    {
      name: "WBTC",
      amount: 999999999,
    },
  ];

  const iconRender = (type: string) => {
    switch (type) {
      case "ETH":
        return <img src={EthIcon} alt={type + "icon"} />;
      case "USDC":
        return <img src={UsdcIcon} alt={type + "icon"} />;
      case "USDT":
        return <img src={UsdtIcon} alt={type + "icon"} />;
      case "DAI":
        return <img src={DaiIcon} alt={type + "icon"} />;
      default:
        break;
    }
  };
  return (
    <div className="w-[319px] h-[481px] bg-erie-black bg-opacity-98 pt-[63px] pb-[42px] px-[38px] rounded-[10px] relative">
      <div className="absolute top-[19px] right-[19px]">x</div>
      <div>
        <div className="text-[10px] mb-[41px] flex flex-row justify-between items-center">
          <div>
            <div className="text-tea-green">Connected Wallet</div>
            <div className="text-white">0xb319ac09505b1f04c1bf216…</div>
          </div>
          <div>
            <FiCopy size={20} color="#413AC8" />
          </div>
        </div>
      </div>

      {amountList.map((list) => {
        return (
          <div className="flex flex-row justify-between items-center mb-[16px]">
            <div className="flex flex-1 items-center">
              <div className="w-[30px] h-[30px] mr-[12px]">
                {iconRender(list.name)}
              </div>
              <div className="text-[12px] text-white">{list.name}</div>
            </div>
            <div className="text-white text-[12px]">{list.amount}</div>
          </div>
        );
      })}

      <div className="absolute bottom-[42px] left-0 right-0 flex flex-1 justify-center">
        <button className=" w-[136px] text-[11px] text-white h-[34px] border border-tea-green rounded-full">
          Disconnect
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
