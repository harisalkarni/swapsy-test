import { TabType } from "constants/types";
import React, { Dispatch } from "react";
import Logo from "assets/logo.png";
import Wallet from "assets/wallet.png";
import WalletDesktop from "assets/top-wallet.png";
import { isMobile } from "react-device-detect";
import Tabs from "components/atoms/Tabs";
import useStore from "utils/store";
interface Props {
  activeTab: TabType;
  setTab: Dispatch<React.SetStateAction<TabType>>;
  onConnect: () => void;
}

function Header({ activeTab, setTab, onConnect }: Props) {
  const store = useStore();
  return (
    <>
      <div className="flex flex-row justify-between w-full px-[30px] md:px-[62px]  items-center relative z-0 md:pt-[29px] pt-0">
        <img
          src={Logo}
          alt="swapsi logo"
          className="w-[93px] md:w-[141px] object-contain"
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
            src={isMobile ? Wallet : WalletDesktop}
            className="w-4 md:w-5 object-contain"
          />
          <p className="text-white font-semibold text-[10px] md:text-[12px] ml-[8px]">
            {store.wallet.label !== "" ? "2a34s" : "Connect"}
          </p>
        </button>
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setTab} classname="md:hidden" />
    </>
  );
}

export default Header;
