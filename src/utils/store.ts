import create from 'zustand'
import {ModalType} from 'constants/types'
type Store = {
    modal: string,
    updateModal: (a: ModalType) => void
}

const useStore = create<Store>((set) => ({
    modal: 'NULL',
    updateModal(text: ModalType){
        set(state => ({
            ...state, 
            modal: text
        }))
    },
}))

export default useStore