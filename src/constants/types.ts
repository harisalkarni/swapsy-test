export type CoinType = {
  name: string;
  avatar: string;
};

export type MenuType = "Open" | "Completed" | "Cancelled" | "Expired";
export type TabType = "CREATE" | "HISTORY";
export type ModalType =
  | "NULL"
  | "SelectWallet"
  | "ConnectWallet"
  | "DepositETH"
  | "SwapCreated"
  | "MyWallet"
  | "DetailSwap"
  | "CancelingSwap"
  | "CompletedModal"
  | "CanceledModal"
  | "WithdrawModal"
  | "SwapConfirm"
  | "ApprovingToken"
  | "ProcessingTrx"
  | "TransactionSuccess"
  | "TransactionComplete"
  | "CancelingSwapSuccess"
  | "WithdrawProcess"
  | "WrongNetwork"
  | "SwapExpired"
  | "SomethingWrong"
  | "ApprovingTokenReceipt";
export type ModalAlert = "loading" | "success" | "failed";
export type SideModal = "ConnectWallet" | "SelectWallet" | "NULL";
export type SwapStatus = "SWAP" | "ACCEPT";
export type WalletDetail = {
  label: string;
  amount: number;
};
