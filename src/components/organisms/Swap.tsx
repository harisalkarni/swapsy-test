import TokenSwap from "components/atoms/TokenSwap";

import { useState } from "react";
import { TabType } from "constants/types";
import Header from "components/molecules/Header";
import History from "components/molecules/History";
import SelectWallet from "components/molecules/SelectWallet";
import ConnectWallet from "components/molecules/ConnectWallet";
import DepositModal from "components/atoms/DepositModal";
import SwapCreated from "components/atoms/SwapCreated";
import SwapLink from "components/molecules/SwapLink";
import CancelingSwap from "components/atoms/CancelingSwap";
import useStore from "utils/store";
import SwapScreen from "components/molecules/SwapScreen";
import {
  DepositText,
  ProcessingText,
  ApprovingText,
  TransactionSuccess,
} from "dummy/dummy";

const Swap = () => {
  const [activeTab, setActiveTab] = useState<TabType>("CREATE");
  const store = useStore();

  const renderModalType = () => {
    switch (store.modal) {
      case "SelectWallet":
        return <SelectWallet onSelectWallet={onSelectWallet} />;

      case "ConnectWallet":
        return <ConnectWallet />;

      case "DepositETH":
        return (
          <DepositModal
            title={DepositText.title}
            body={DepositText.body}
            onCancel={() => store.updateModal("NULL")}
            onSuccess={() => {
              store.updateModal("SwapCreated");
            }}
            type="loading"
          />
        );

      case "SwapCreated":
        return <SwapCreated />;

      case "MyWallet":
        return <ConnectWallet />;

      case "DetailSwap":
        return <SwapLink text="Hello World" button={true} />;

      case "CancelingSwap":
        return <CancelingSwap />;

      case "CompletedModal":
        return <SwapLink text="Completed" button={true} />;

      case "CanceledModal":
        return <SwapLink text="Canceled" button={true} />;

      case "WithdrawModal":
        return <SwapLink text="Expired" button={true} />;
      case "SwapConfirm":
        return <SwapScreen status="default" />;
      case "ApprovingToken":
        return (
          <DepositModal
            title={ApprovingText.title}
            body={ApprovingText.body}
            onCancel={() => store.updateModal("NULL")}
            onSuccess={() => {
              store.updateModal("SwapConfirm");
              store.updateTrxStatus(true);
            }}
            type="loading"
          />
        );
      case "ProcessingTrx":
        return (
          <DepositModal
            title={ProcessingText.title}
            body={ProcessingText.body}
            onCancel={() => store.updateModal("NULL")}
            onSuccess={() => {
              store.updateModal("TransactionSuccess");
              store.updateTrxStatus(true);
            }}
            type="loading"
          />
        );
      case "TransactionSuccess":
        return (
          <DepositModal
            title={TransactionSuccess.title}
            body={TransactionSuccess.body}
            onCancel={() => store.updateModal("TransactionComplete")}
            onSuccess={() => {
              return false;
            }}
            type="success"
          />
        );
      case "TransactionComplete":
        return <SwapScreen status="completed" />;
    }
  };

  const onActionConnect = () => {
    if (store.wallet === "") {
      store.updateModal("SelectWallet");
    } else {
      store.updateModal("DepositETH");
    }
  };

  const onSelectWallet = (a: string) => {
    store.addAddressToWallet(a);
    store.updateModal("NULL");
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-start pt-[96px] md:pt-0 overflow-x-hidden bg-black">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-black to-blue-purple"></div>
      <Header activeTab={activeTab} setTab={setActiveTab} />
      <div className="absolute">{renderModalType() as any}</div>
      <div
        className={`rounded-[8px] relative z-5  md:mt-20 w-full ${
          activeTab === "CREATE" && "bg-erie-black p-8 w-[320px] md:w-[420px]"
        }`}
      >
        {activeTab === "CREATE" ? (
          <TokenSwap actionConnect={onActionConnect} address={store.wallet} />
        ) : (
          <History />
        )}
      </div>
    </div>
  );
};

export default Swap;
