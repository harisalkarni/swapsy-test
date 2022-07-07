import TokenSwap from "components/atoms/TokenSwap";

import { useState } from "react";
import { ModalType, TabType } from "constants/types";
import Header from "components/molecules/Header";
import History from "components/molecules/History";
import SelectWallet from "components/molecules/SelectWallet";
import ConnectWallet from "components/molecules/ConnectWallet";
import DepositModal from "components/atoms/DepositModal";
import SwapCreated from "components/atoms/SwapCreated";

const Swap = () => {
  const [activeTab, setActiveTab] = useState<TabType>("CREATE");
  const [showModalType, setShowModalType] = useState<ModalType>("NULL");
  const [selectedWallet, setSelectedWallet] = useState<String>("");

  const renderModalType = () => {
    switch (showModalType) {
      case "SelectWallet":
        return <SelectWallet onSelectWallet={onSelectWallet} />;

      case "ConnectWallet":
        return <ConnectWallet onDisconnect={setShowModalType} />;

      case "DepositETH":
        return <DepositModal onCancel={setShowModalType} />;

      case "SwapCreated":
        return <SwapCreated onCancel={setShowModalType} />;

      case "MyWallet":
        return <ConnectWallet onDisconnect={setShowModalType} />;
    }
  };

  const onActionConnect = () => {
    if (selectedWallet === "") {
      setShowModalType("SelectWallet");
    } else {
      setShowModalType("DepositETH");
    }
  };

  const onSelectWallet = (a: string) => {
    setSelectedWallet(a);
    setShowModalType("NULL");
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-start pt-[96px] md:pt-0 overflow-x-hidden bg-black">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-black to-blue-purple"></div>
      <Header
        activeTab={activeTab}
        setTab={setActiveTab}
        onConnect={setShowModalType}
      />
      <div className="absolute">{renderModalType() as any}</div>
      <div
        className={`rounded-[8px] relative z-5  md:mt-20 w-full ${
          activeTab === "CREATE" && "bg-erie-black p-8 w-[320px] md:w-[420px]"
        }`}
      >
        {activeTab === "CREATE" ? (
          <TokenSwap actionConnect={onActionConnect} address={selectedWallet} />
        ) : (
          <History />
        )}
      </div>
    </div>
  );
};

export default Swap;
