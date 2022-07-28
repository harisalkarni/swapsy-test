import TokenSwap from "components/atoms/TokenSwap";
import { useState, useRef, useEffect } from "react";
import { TabType, WalletDetail } from "constants/types";
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
  const [rightSide, setRightSide] = useState<boolean>(false);

  const [from, setFrom] = useState<CoinType>(Coins[0]);
  const [to, setTo] = useState<CoinType>(Coins[1]);

  const [fromAmount, setFromAmount] = useState<number>(0);
  const [toAmount, setToAmount] = useState<number>(0);

  const store = useStore();
  const onActionConnect = () => {
    if (store.wallet.label === "") {
      if (isBrowser) {
        store.updateSideModal("SelectWallet");
      } else {
        store.updateModal("SelectWallet");
      }

      store.updateOverlay(false);
    } else {
      if (store.approveTrx) {
        store.updateModal("DepositETH");
      } else {
        store.updateModal("ApprovingToken");
      }
    }
  };

  const ref = useRef<HTMLInputElement>(null);

  useOnClickOutside(ref, () => {
    store.updateModal("NULL");
    store.updateOverlay(true);
    store.updateSideModal("NULL");
  });

  const onSelectWallet = (a: WalletDetail) => {
    store.addAddressToWallet(a);
    if (isBrowser && store.swapStatus == "ACCEPT") {
      store.updateOverlay(false);
    } else {
      store.updateOverlay(true);
    }
    store.updateSideModal("NULL");

    if (store.trxReceipt) {
      store.updateModal("SwapConfirm");
    } else {
      store.updateModal("NULL");
    }
  };

  const onConnect = () => {
    if (isMobile) {
      setRightSide(true);
    } else {
      setRightSide(false);
    }

    if (store.wallet.label === "") {
      store.updateOverlay(false);
      if (isBrowser) {
        store.updateSideModal("SelectWallet");
      } else {
        store.updateModal("SelectWallet");
      }
    } else {
      store.updateOverlay(false);
      if (isBrowser) {
        store.updateSideModal("ConnectWallet");
      } else {
        store.updateModal("MyWallet");
      }
    }
  };

  useEffect(() => {
    if (window.location.pathname == "/accept") {
      store.updateModal("SwapConfirm");
      store.updateTrxReceipt(true);
      store.updateOverlay(false);
      store.updateSwapStatus("ACCEPT");
      setFromAmount(10);
      setToAmount(10);
    }
  }, []);

  const renderModalType = () => {
    switch (store.modal) {
      case "SelectWallet":
        return <SelectWallet onSelectWallet={onSelectWallet} />;
      case "ConnectWallet":
        return <ConnectWallet />;
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
        return <ConnectWallet />;
      case "DetailSwap":
        return (
          <SwapLink
            text="Expired"
            button={true}
            to={to}
            from={from}
            btnText="cancel"
            onCancel={() => store.updateModal("NULL")}
            toAmount={toAmount}
            fromAmount={fromAmount}
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
          <SwapScreen
            status="completed"
            to={to}
            from={from}
            setFrom={setFrom}
            setTo={setTo}
            toAmount={toAmount}
            fromAmount={fromAmount}
          />
        );
      case "CanceledModal":
        return (
          <SwapLink
            text="Canceled"
            button={true}
            to={to}
            from={from}
            btnText="cancel"
            onCancel={() => store.updateModal("CancelingSwap")}
            toAmount={toAmount}
            fromAmount={fromAmount}
          />
        );
      case "WithdrawModal":
        return (
          <SwapLink
            text="Expired"
            button={true}
            to={to}
            from={from}
            btnText="withdraw"
            onCancel={() => store.updateModal("WithdrawProcess")}
            toAmount={toAmount}
            fromAmount={fromAmount}
          />
        );
      case "WithdrawProcess":
        return <WithdrawingFunds />;
      case "SwapConfirm":
        return (
          <SwapScreen
            status="default"
            to={to}
            from={from}
            setFrom={setFrom}
            setTo={setTo}
            toAmount={toAmount}
            fromAmount={fromAmount}
          />
        );
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
      case "ApprovingTokenReceipt":
        return (
          <DepositModal
            title={`Approving ${to.name}`}
            body="To continue the transaction you need to approve spend USDC from your wallet."
            onCancel={() => store.updateModal("NULL")}
            onSuccess={() => {
              store.updateTrxReceipt(false);
              store.updateModal("SwapConfirm");
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
        return (
          <SwapScreen
            status="completed"
            to={to}
            from={from}
            setFrom={setFrom}
            setTo={setTo}
            toAmount={toAmount}
            fromAmount={fromAmount}
          />
        );
      case "WrongNetwork":
        return <WrongNetwork />;
      case "SwapExpired":
        return <SwapExpired />;
      case "SomethingWrong":
        return <SomethingWrong />;
    }
  };

  const renderDekstopRight = () => {
    switch (store.sideModal) {
      case "ConnectWallet":
        return (
          <div ref={ref}>
            <ConnectWallet />;
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
            to={to}
            from={from}
            btnText="cancel"
            onCancel={() => store.updateModal("NULL")}
            toAmount={toAmount}
            fromAmount={fromAmount}
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
          <SwapScreen
            status="completed"
            to={to}
            from={from}
            setFrom={setFrom}
            setTo={setTo}
            toAmount={toAmount}
            fromAmount={fromAmount}
          />
        );
      case "CanceledModal":
        return (
          <SwapLink
            text="Canceled"
            button={true}
            to={to}
            from={from}
            btnText="cancel"
            onCancel={() => store.updateModal("CancelingSwap")}
            toAmount={toAmount}
            fromAmount={fromAmount}
          />
        );
      case "WithdrawModal":
        return (
          <SwapLink
            text="Expired"
            button={true}
            to={to}
            from={from}
            btnText="Withdraw"
            onCancel={() => store.updateModal("WithdrawProcess")}
            toAmount={toAmount}
            fromAmount={fromAmount}
          />
        );
      case "WithdrawProcess":
        return <WithdrawingFunds />;
      case "SwapConfirm":
        return (
          <SwapScreen
            status="default"
            to={to}
            from={from}
            setFrom={setFrom}
            setTo={setTo}
            toAmount={toAmount}
            fromAmount={fromAmount}
          />
        );
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
      case "ApprovingTokenReceipt":
        return (
          <DepositModal
            title={`Approving ${to.name}`}
            body="To continue the transaction you need to approve spend USDC from your wallet."
            onCancel={() => store.updateModal("NULL")}
            onSuccess={() => {
              store.updateTrxReceipt(false);
              store.updateModal("SwapConfirm");
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
        return (
          <SwapScreen
            status="completed"
            to={to}
            from={from}
            setFrom={setFrom}
            setTo={setTo}
            toAmount={toAmount}
            fromAmount={fromAmount}
          />
        );
      case "WrongNetwork":
        return <WrongNetwork />;
      case "SwapExpired":
        return <SwapExpired />;
      case "SomethingWrong":
        return <SomethingWrong />;
    }
  };

  return (
    <div className="min-w-screen relative flex min-h-screen flex-col  items-center justify-start overflow-x-hidden pt-[96px] md:pt-0">
      <div className="bg-main-swapsy absolute inset-0"></div>

      <Header
        activeTab={store.swapTab}
        setTab={store.updateSwapTab}
        onConnect={onConnect}
      />
      <div
        className={`z-5 swap-box-shadow relative w-full  rounded-[16px] md:mt-20 ${
          store.swapTab === "CREATE" &&
          "w-[320px] bg-erie-black px-[33px] py-[30px] md:w-[336px] md:px-[35px] md:py-[40px] "
        }`}
      >
        {store.swapTab === "CREATE" ? (
          <TokenSwap
            actionConnect={onActionConnect}
            address={store.wallet.label}
            to={to}
            setTo={setTo}
            from={from}
            setFrom={setFrom}
            toAmount={toAmount}
            setToAmount={setToAmount}
            fromAmount={fromAmount}
            setFromAmount={setFromAmount}
          />
        ) : (
          <History />
        )}
      </div>
      {store.modal !== "NULL" && isMobile && (
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 flex flex-row items-center justify-center bg-black bg-opacity-80 `}
        >
          <div ref={ref}>{renderModalType() as any}</div>
        </div>
      )}

      {store.modal !== "NULL" && isBrowser && (
        <div
          className={`${
            store.overlay
              ? "top-0 bottom-0 left-0 right-0 items-center bg-black bg-opacity-80"
              : "top-[150px] bg-transparent"
          } absolute  flex  flex-row  justify-center `}
        >
          <div ref={ref}>{renderDesktopModal() as any}</div>
        </div>
      )}

      {store.sideModal !== "NULL" && isBrowser && !rightSide && (
        <div className="absolute right-[40px] top-[91px]">
          {renderDekstopRight() as any}
        </div>
      )}
    </div>
  );
};

export default Swap;
