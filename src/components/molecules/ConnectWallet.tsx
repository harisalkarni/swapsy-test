import EthIcon from "assets/coin-eth.png";
import UsdcIcon from "assets/coin-usdc.png";
import UsdtIcon from "assets/coin-usdt.png";
import DaiIcon from "assets/coin-dai.png";
import { FiCopy } from "react-icons/fi";
import useStore from "utils/store";
interface ConnectWalletProps {
  isMobile: boolean;
}
const ConnectWallet = ({ isMobile }: ConnectWalletProps) => {
  const store = useStore();
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
    <div
      className={`z-20 w-[319px] md:w-[222px] md:h-[352px] h-[481px]  bg-opacity-98 pt-[63px] md:pt-[24px] pb-[42px] px-[38px] md:px-[20px] rounded-[10px] relative bg-erie-black md:bg-ocean-blue`}
    >
      {/* <div className="absolute top-[5px] right-[19px]">x</div> */}
      <div>
        <div className="text-[10px] mb-[41px] md:mb-[39px] flex flex-row justify-between items-center">
          <div>
            <div className="text-tea-green">Connected Wallet</div>
            <div className="text-white">0xb319ac09505b1f04c1bf216…</div>
          </div>
          <div>
            <FiCopy size={20} className="md:text-white text-ocean-blue" />
          </div>
        </div>
      </div>

      {amountList.map((list) => {
        return (
          <div className="flex flex-row justify-between items-center mb-[16px] md:mb-[9px]">
            <div className="flex flex-1 items-center">
              <div className="w-[30px] h-[30px] md:w-[25px] md:h-[25px] mr-[12px]">
                {iconRender(list.name)}
              </div>
              <div className="text-[12px] text-white md:text-[9px]">
                {list.name}
              </div>
            </div>
            <div className="text-white text-[12px] opacity-100 md:opacity-50">
              {list.amount}
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-[42px] md:bottom-[32px] left-0 right-0 flex flex-1 justify-center">
        <button
          className=" w-[136px] text-[11px] text-white h-[34px] border border-tea-green rounded-full"
          onClick={() => store.updateModal("NULL")}
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
