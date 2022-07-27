import EthIcon from "assets/coin-eth.png";
import UsdcIcon from "assets/coin-usdc.png";
import UsdtIcon from "assets/coin-usdt.png";
import DaiIcon from "assets/coin-dai.png";
import { FiCopy } from "react-icons/fi";
import useStore from "utils/store";
import { IoMdClose } from "react-icons/io";

const ConnectWallet = () => {
  const store = useStore();
  const amountList = [
    {
      name: "ETH",
      amount: 0,
    },
    {
      name: "USDC",
      amount: 0,
    },
    {
      name: "USDT",
      amount: 0,
    },
    {
      name: "DAI",
      amount: 0,
    },
    {
      name: "WBTC",
      amount: 0,
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
      className={`relative z-20 h-[481px] w-[319px] rounded-[10px]  bg-erie-black bg-opacity-98 px-[38px] pt-[63px] pb-[42px] md:h-[352px] md:w-[222px] md:bg-ocean-blue md:px-[20px] md:pt-[24px]`}
    >
      {/* <div
        className="absolute top-[19px] right-[19px]"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div> */}
      <div>
        <div className="mb-[41px] flex flex-row items-center justify-between text-[10px] md:mb-[39px]">
          <div>
            <div className="text-tea-green">Connected Wallet</div>
            <div className="text-white">0xb319ac09505b1f04c1bf216…</div>
          </div>
          <div>
            <FiCopy size={23} className="text-white md:text-white" />
          </div>
        </div>
      </div>

      {amountList.map((list, index) => {
        return (
          <div
            key={index}
            className="mb-[16px] flex flex-row items-center justify-between md:mb-[9px]"
          >
            <div className="flex flex-1 items-center">
              <div className="mr-[12px] h-[30px] w-[30px] md:h-[25px] md:w-[25px]">
                {iconRender(list.name)}
              </div>
              <div className="text-[12px] text-white md:text-[9px]">
                {list.name}
              </div>
            </div>
            <div className="text-[12px] text-white opacity-100 md:opacity-50">
              {list.amount}
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-[42px] left-0 right-0 flex flex-1 justify-center md:bottom-[32px]">
        <button
          className=" h-[34px] w-[136px] rounded-full border border-tea-green text-[11px] text-white"
          onClick={() => {
            store.updateModal("NULL");
            store.addAddressToWallet({ label: "", amount: 0 });
            store.updateTrxStatus(false);
            store.updateApproveTrx(false);
            store.updateTrxReceipt(false);
            store.updateSideModal("NULL");
          }}
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
