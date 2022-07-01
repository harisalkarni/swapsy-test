import Logo from "assets/logo.png";
import TokenSwap from "atom/TokenSwap";
import MySwapTab from "atom/MySwapTab";
import MySwap from "molecule/MySwap";
import Wallet from "assets/wallet.png";
import { useState } from "react";

const Swap = () => {
  const [activeTab, setActiveTab] = useState("create");
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-start pt-[96px] overflow-x-hidden bg-black">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-black to-blue-purple"></div>
      <div>
        <div className="flex flex-row justify-between w-full px-[30px] h-[36px] items-center relative z-10">
          <div>
            <img
              src={Logo}
              alt="swapsi logo"
              className="w-[93px] h-[28px] object-contain"
            />
          </div>
          <div className="flex flex-row">
            <img alt="wallet" src={Wallet} className="h-4 w-4 object-contain" />
            <div className="text-white font-semibold text-[10px] ml-[8px]">
              Connect
            </div>
          </div>
        </div>
        <MySwapTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <div
          className={`mx-8 rounded-[8px] relative z-10 ${
            activeTab === "create" && "bg-erie-black"
          }`}
        >
          {activeTab === "create" ? <TokenSwap /> : <MySwap />}
        </div>
      </div>
    </div>
  );
};

export default Swap;
