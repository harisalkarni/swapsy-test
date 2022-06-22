import Logo from "../assets/logo-swapsi.png";
import TokenSwap from "../atom/TokenSwap";
import MySwapTab from "../atom/MySwapTab";
import MySwap from "./MySwap";
import { BiWalletAlt } from "react-icons/bi";
import { useState } from "react";
const Swap = () => {
  const [activeTab, setActiveTab] = useState("create");
  return (
    <div className="min-w-screen min-h-screen swap-custom-bg bg-opacity-30 pt-[117px]">
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
