import create from 'zustand'
import {ModalType, WalletDetail} from 'constants/types'
type Store = {
    modal: string,
    wallet:WalletDetail,
    trxStatus: boolean,
    approveTrx: boolean,
    trxReceipt: boolean,
    updateModal: (modalType: ModalType) => void,
    addAddressToWallet: (a: WalletDetail) =>void,
    updateTrxStatus: (a: boolean) => void,
    updateApproveTrx: (a: boolean) => void,
    updateTrxReceipt: (a: boolean) => void
}

const useStore = create<Store>((set) => ({
    modal: 'NULL',
    wallet: {
        label: '',
        amount: 0
    },
    trxStatus: false,
    approveTrx: false,
    trxReceipt: false,
    updateModal(text: ModalType){
        set(state => ({
            ...state, 
            modal: text
        }))
    },
    addAddressToWallet(detail: WalletDetail){
        set(state => ({
            ...state, 
            wallet: detail
        })) 
    },
    updateTrxStatus(val : boolean){
        set(state => ({
            ...state, 
            trxStatus: val
        })) 
    },
    updateApproveTrx(val: boolean){
        set(state => ({
            ...state, 
            approveTrx: val
        })) 
    },
    updateTrxReceipt(val: boolean){
        set(state => ({
            ...state, 
            trxReceipt: val
        })) 
    }
}))

export default useStore