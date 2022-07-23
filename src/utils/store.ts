import create from 'zustand'
import {ModalType} from 'constants/types'
type Store = {
    modal: string,
    wallet:string,
    trxStatus: boolean,
    approveTrx: boolean,
    trxReceipt: boolean,
    updateModal: (modalType: ModalType) => void,
    addAddressToWallet: (a: string) =>void,
    updateTrxStatus: (a: boolean) => void,
    updateApproveTrx: (a: boolean) => void,
    updateTrxReceipt: (a: boolean) => void
}

const useStore = create<Store>((set) => ({
    modal: 'NULL',
    wallet:'',
    trxStatus: false,
    approveTrx: false,
    trxReceipt: false,
    updateModal(text: ModalType){
        set(state => ({
            ...state, 
            modal: text
        }))
    },
    addAddressToWallet(text:string){
        set(state => ({
            ...state, 
            wallet: text
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