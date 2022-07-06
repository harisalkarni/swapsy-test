import TokenSwap from "components/atoms/TokenSwap";

import { useState } from "react";
import { ModalType, TabType } from "constants/types";
import Header from "components/molecules/Header";
import History from "components/molecules/History";

const Swap = () => {
  const [activeTab, setActiveTab] = useState<TabType>("CREATE");
  const [showModalType, setShowModalType] = useState<ModalType>("SelectWallet");
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-start pt-[96px] md:pt-0 overflow-x-hidden bg-black">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-black to-blue-purple"></div>
      <Header
        activeTab={activeTab}
        setTab={setActiveTab}
        modalType={showModalType}
        setModalType={setShowModalType}
      />
      <div
        className={`rounded-[8px] relative z-10  md:mt-20 w-full ${
          activeTab === "CREATE" && "bg-erie-black p-8 w-[320px] md:w-[420px]"
        }`}
      >
        {activeTab === "CREATE" ? <TokenSwap /> : <History />}
      </div>
    </div>
  );
};

export default Swap;
