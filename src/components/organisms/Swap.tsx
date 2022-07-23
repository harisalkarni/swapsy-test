import TokenSwap from "components/atoms/TokenSwap";
import { useState, useRef } from "react";
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
import SwapCancelled from "components/atoms/SwapCancelled";
import WithdrawingFunds from "components/atoms/WithdrawingProcess";
import { isMobile, isBrowser } from "react-device-detect";
import useOnClickOutside from "utils/useOutsideClick";
import WrongNetwork from "components/atoms/WrongNetwork";
import SwapExpired from "components/atoms/SwapExpired";
import SomethingWrong from "components/atoms/SomethingWrong";
import Coins from "constants/coins";
import { CoinType } from "constants/types";

const Swap = () => {
  const [activeTab, setActiveTab] = useState<TabType>("CREATE");
  const [rightSide, setRightSide] = useState<boolean>(false);

  const [from, setFrom] = useState<CoinType>(Coins[0]);
  const [to, setTo] = useState<CoinType>(Coins[1]);

  const store = useStore();
  const onActionConnect = () => {
    if (store.wallet === "") {
      store.updateModal("SelectWallet");
    } else {
      if (store.approveTrx) {
        store.updateModal("DepositETH");
      } else {
        store.updateModal("ApprovingToken");
      }
    }
  };

  const ref = useRef<HTMLInputElement>(null);

  useOnClickOutside(ref, () => store.updateModal("NULL"));

  const onSelectWallet = (a: string) => {
    store.addAddressToWallet(a);
    store.updateModal("NULL");
  };

  const onConnect = () => {
    if (isMobile) {
      setRightSide(true);
    } else {
      setRightSide(false);
    }

    if (store.wallet === "") {
      store.updateModal("SelectWallet");
    } else {
      store.updateModal("MyWallet");
    }
  };

  const renderModalType = () => {
    switch (store.modal) {
      case "SelectWallet":
        return <SelectWallet onSelectWallet={onSelectWallet} />;
      case "ConnectWallet":
        return <ConnectWallet isMobile={isMobile} />;
      case "DepositETH":
        return (
          <DepositModal
            title="Depositing Eth"
            body="To deposit the funds into the Swap approve the transaction in your wallet, you can cancel anytime and withdraw your funds back to your wallet."
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
        return <ConnectWallet isMobile={isMobile} />;
      case "DetailSwap":
        return (
          <SwapLink
            text="Expired"
            button={true}
            onCancel={() => store.updateModal("NULL")}
          />
        );
      case "CancelingSwap":
        return <CancelingSwap />;
      case "CancelingSwapSuccess":
        return (
          <SwapCancelled text="Swap Cancelled" amount={999999} swap="#94812" />
        );
      case "CompletedModal":
        return (
          <SwapLink
            text="Completed"
            button={true}
            onCancel={() => store.updateModal("CancelingSwap")}
          />
        );
      case "CanceledModal":
        return (
          <SwapLink
            text="Canceled"
            button={true}
            onCancel={() => store.updateModal("CancelingSwap")}
          />
        );
      case "WithdrawModal":
        return (
          <SwapLink
            text="Expired"
            button={true}
            onCancel={() => store.updateModal("WithdrawProcess")}
          />
        );
      case "WithdrawProcess":
        return <WithdrawingFunds />;
      case "SwapConfirm":
        return <SwapScreen status="default" />;
      case "ApprovingToken":
        return (
          <DepositModal
            title={`Approving ${to.name}`}
            body="To continue the transaction you need to approve spend USDC from your wallet."
            onCancel={() => store.updateModal("NULL")}
            onSuccess={() => {
              store.updateApproveTrx(true);
              store.updateTrxStatus(true);
              store.updateModal("NULL");
            }}
            type="loading"
          />
        );
      case "ProcessingTrx":
        return (
          <DepositModal
            title="Processing Transaction"
            body="You will receive the order amount Once you accept the transaction from your wallet."
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
            title="Transaction Successful"
            body=""
            onCancel={() => store.updateModal("TransactionComplete")}
            onSuccess={() => {
              return false;
            }}
            type="success"
          />
        );
      case "TransactionComplete":
        return <SwapScreen status="completed" />;
      case "WrongNetwork":
        return <WrongNetwork />;
      case "SwapExpired":
        return <SwapExpired />;
      case "SomethingWrong":
        return <SomethingWrong />;
    }
  };

  const renderDekstopRight = () => {
    switch (store.modal) {
      case "MyWallet":
        return (
          <div ref={ref}>
            <ConnectWallet isMobile={isMobile} />;
          </div>
        );
      case "SelectWallet":
        return (
          <div ref={ref}>
            <SelectWallet onSelectWallet={onSelectWallet} />
          </div>
        );

      default:
        break;
    }
  };

  const renderDesktopModal = () => {
    switch (store.modal) {
      case "DepositETH":
        return (
          <DepositModal
            title="Depositing Eth"
            body="To deposit the funds into the Swap approve the transaction in your wallet, you can cancel anytime and withdraw your funds back to your wallet."
            onCancel={() => store.updateModal("NULL")}
            onSuccess={() => {
              store.updateModal("SwapCreated");
            }}
            type="loading"
          />
        );

      case "SwapCreated":
        return <SwapCreated />;
      case "DetailSwap":
        return (
          <SwapLink
            text="Expired"
            button={true}
            onCancel={() => store.updateModal("NULL")}
          />
        );
      case "CancelingSwap":
        return <CancelingSwap />;
      case "CancelingSwapSuccess":
        return (
          <SwapCancelled text="Swap Cancelled" amount={999999} swap="#94812" />
        );
      case "CompletedModal":
        return (
          <SwapLink
            text="Completed"
            button={true}
            onCancel={() => store.updateModal("CancelingSwap")}
          />
        );
      case "CanceledModal":
        return (
          <SwapLink
            text="Canceled"
            button={true}
            onCancel={() => store.updateModal("CancelingSwap")}
          />
        );
      case "WithdrawModal":
        return (
          <SwapLink
            text="Expired"
            button={true}
            onCancel={() => store.updateModal("WithdrawProcess")}
          />
        );
      case "WithdrawProcess":
        return <WithdrawingFunds />;
      case "SwapConfirm":
        return <SwapScreen status="default" />;
      case "ApprovingToken":
        return (
          <DepositModal
            title="Approving USDC"
            body="To continue the transaction you need to approve spend USDC from your wallet."
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
            title="Processing Transaction"
            body="You will receive the order amount Once you accept the transaction from your wallet."
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
            title="Transaction Successful"
            body=""
            onCancel={() => store.updateModal("TransactionComplete")}
            onSuccess={() => {
              return false;
            }}
            type="success"
          />
        );
      case "TransactionComplete":
        return <SwapScreen status="completed" />;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-start pt-[96px] md:pt-0 overflow-x-hidden bg-black relative">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-black to-blue-purple"></div>
      <Header
        activeTab={activeTab}
        setTab={setActiveTab}
        onConnect={onConnect}
      />
      <div
        className={`rounded-[8px] relative z-5  md:mt-20 w-full ${
          activeTab === "CREATE" && "bg-erie-black p-8 w-[320px] md:w-[420px]"
        }`}
      >
        {activeTab === "CREATE" ? (
          <TokenSwap
            actionConnect={onActionConnect}
            address={store.wallet}
            to={to}
            setTo={setTo}
            from={from}
            setFrom={setFrom}
          />
        ) : (
          <History />
        )}
      </div>
      {store.modal !== "NULL" && isMobile && (
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 flex bg-black bg-opacity-80 flex-row justify-center items-center `}
        >
          <div ref={ref}>{renderModalType() as any}</div>
        </div>
      )}

      {store.modal !== "NULL" && isBrowser && !rightSide && (
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 flex bg-black bg-opacity-80 flex-row justify-center items-center `}
        >
          <div ref={ref}>{renderDesktopModal() as any}</div>
        </div>
      )}

      {store.modal !== "NULL" && isBrowser && (
        <div className="absolute right-[40px] top-[91px]">
          {renderDekstopRight() as any}
        </div>
      )}
    </div>
  );
};

export default Swap;
