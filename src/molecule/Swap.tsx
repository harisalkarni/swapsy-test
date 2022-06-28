import Logo from "../assets/logo-swapsi.png";
import TokenSwap from "../atom/TokenSwap";
import MySwapTab from "../atom/MySwapTab";
import MySwap from "./MySwap";
import { BiWalletAlt } from "react-icons/bi";
import { useState } from "react";
const Swap = () => {
  const [activeTab, setActiveTab] = useState("create");
  return (
    <div className="min-w-screen min-h-screen pt-[117px] bg-black">
      <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-black to-blue-purple"></div>
      <div className="flex flex-row justify-between w-full px-[30px] h-[36px] items-center">
        <div>
          <img src={Logo} alt="swapsi logo" className="w-[93px] h-[28px]" />
        </div>
        <div className="flex flex-row">
          <BiWalletAlt color="#D4FAC9" size={16} />
          <div className="text-white text-[10px] ml-[8px]">Connect</div>
        </div>
      </div>
      <MySwapTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-1 justify-center items-center">
        {activeTab === "create" ? <TokenSwap /> : <MySwap />}
      </div>
    </div>
  );
};

export default Swap;
