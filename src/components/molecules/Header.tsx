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
      <div className="relative z-0 flex w-full flex-row items-center  justify-between px-[30px] pt-0 md:px-[62px] md:pt-[29px]">
        <img
          src={Logo}
          alt="swapsi logo"
          className="w-[93px] object-contain md:w-[141px]"
        />
        <Tabs
          activeTab={activeTab}
          setActiveTab={setTab}
          classname="hidden md:flex fixed right-0 left-0"
        />
        <button
          className={`relative z-10 flex h-[36px] w-[123px] flex-row items-center justify-center rounded-full text-center md:h-[40px] md:w-[141px] ${
            store.wallet.label == ""
              ? "md:bg-ocean-blue"
              : "bg-black md:bg-black"
          }`}
          onClick={() => onConnect()}
        >
          <img
            alt="wallet"
            src={isMobile ? Wallet : WalletDesktop}
            className="w-4 object-contain md:w-5"
          />
          <p className="ml-[8px] text-[10px] font-semibold text-white md:text-[12px]">
            {store.wallet.label !== "" ? "2a34s" : "Connect"}
          </p>
        </button>
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setTab} classname="md:hidden" />
    </>
  );
}

export default Header;
