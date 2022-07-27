import create from "zustand";
import { ModalType, SideModal, SwapStatus, WalletDetail } from "constants/types";
type Store = {
  modal: string;
  wallet: WalletDetail;
  trxStatus: boolean;
  approveTrx: boolean;
  trxReceipt: boolean;
  overlay: boolean;
  sideModal: SideModal;
  swapStatus: SwapStatus;
  updateModal: (modalType: ModalType) => void;
  addAddressToWallet: (a: WalletDetail) => void;
  updateTrxStatus: (a: boolean) => void;
  updateApproveTrx: (a: boolean) => void;
  updateTrxReceipt: (a: boolean) => void;
  updateOverlay: (a: boolean) => void;
  updateSideModal: (a: SideModal) => void;
  updateSwapStatus: (a: SwapStatus) => void;
};

const useStore = create<Store>((set) => ({
  modal: "NULL",
  wallet: {
    label: "",
    amount: 0,
  },
  overlay: true,
  trxStatus: false,
  approveTrx: false,
  trxReceipt: false,
  sideModal: "NULL",
  swapStatus: "SWAP",
  updateModal(text: ModalType) {
    set((state) => ({
      ...state,
      modal: text,
    }));
  },
  addAddressToWallet(detail: WalletDetail) {
    set((state) => ({
      ...state,
      wallet: detail,
    }));
  },
  updateTrxStatus(val: boolean) {
    set((state) => ({
      ...state,
      trxStatus: val,
    }));
  },
  updateApproveTrx(val: boolean) {
    set((state) => ({
      ...state,
      approveTrx: val,
    }));
  },
  updateTrxReceipt(val: boolean) {
    set((state) => ({
      ...state,
      trxReceipt: val,
    }));
  },
  updateOverlay(val: boolean) {
    set((state) => ({
      ...state,
      overlay: val,
    }));
  },
  updateSideModal(val: SideModal){
    set((state) => ({
      ...state,
      sideModal: val,
    }));
  },
  updateSwapStatus(val: SwapStatus){
    set((state) => ({
      ...state,
      swapStatus: val,
    }));
  },
}));

export default useStore;
