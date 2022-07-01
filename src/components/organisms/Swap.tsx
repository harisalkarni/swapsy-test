import Logo from "assets/logo.png";
import TokenSwap from "components/atoms/TokenSwap";
import MySwapTab from "components/atoms/MySwapTab";
import MySwap from "components/molecules/MySwap";
import Wallet from "assets/wallet.png";
import { useState } from "react";

const Swap = () => {
  const [activeTab, setActiveTab] = useState("create");
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-start pt-[96px] md:pt-0 overflow-x-hidden bg-black">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-black to-blue-purple"></div>
      <div className="flex flex-row justify-between w-full px-[30px] md:px-14 h-[36px] items-center relative z-10 md:py-10">
        <div>
          <img
            src={Logo}
            alt="swapsi logo"
            className="w-[93px] md:w-[124px] object-contain"
          />
        </div>
        <MySwapTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          classname="hidden md:flex fixed right-0 left-0"
        />
        <button className="flex flex-row items-center relative z-10">
          <img
            alt="wallet"
            src={Wallet}
            className="w-4 md:w-5 object-contain"
          />
          <p className="text-white font-semibold text-[10px] md:text-base ml-[8px]">
            Connect
          </p>
        </button>
      </div>
      <MySwapTab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        classname="md:hidden"
      />
      <div
        className={`w-[360px] rounded-[8px] relative z-10 md:w-[480px] md:mt-20 ${
          activeTab === "create" && "bg-erie-black p-8"
        }`}
      >
        {activeTab === "create" ? <TokenSwap /> : <MySwap />}
      </div>
    </div>
  );
};

export default Swap;
