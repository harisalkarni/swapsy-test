import { TabType } from "constants/types";
import React, { Dispatch } from "react";
import Logo from "assets/logo.png";
import Wallet from "assets/wallet.png";
import Tabs from "components/atoms/Tabs";
interface Props {
  activeTab: TabType;
  setTab: Dispatch<React.SetStateAction<TabType>>;
  onConnect: () => void;
}

function Header({ activeTab, setTab, onConnect }: Props) {
  return (
    <>
      <div className="flex flex-row justify-between w-full px-[30px] md:px-[40px] h-[36px] items-center relative z-0 md:py-10">
        <img
          src={Logo}
          alt="swapsi logo"
          className="w-[93px] md:w-[124px] object-contain"
        />
        <Tabs
          activeTab={activeTab}
          setActiveTab={setTab}
          classname="hidden md:flex fixed right-0 left-0"
        />
        <button
          className="flex flex-row items-center relative z-10 md:bg-ocean-blue justify-center md:h-[40px] md:w-[141px] text-center md:rounded-full"
          onClick={() => onConnect()}
        >
          <img
            alt="wallet"
            src={Wallet}
            className="w-4 md:w-5 object-contain"
          />
          <p className="text-white font-semibold text-[10px] md:text-[12px] ml-[8px]">
            Connect
          </p>
        </button>
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setTab} classname="md:hidden" />
    </>
  );
}

export default Header;
