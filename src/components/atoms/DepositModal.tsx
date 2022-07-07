import { IoMdClose } from "react-icons/io";
import { Dispatch } from "react";
import { ModalType } from "constants/types";

interface DepositETHProps {
  onCancel: Dispatch<React.SetStateAction<ModalType>>;
}

const DepositModal = ({ onCancel }: DepositETHProps) => {
  return (
    <div className="w-[294px] h-[485px] bg-erie-black rounded-[5px]  justify-center relative text-center flex flex-col items-center z-20">
      <div className="absolute top-[18px] right-[18px]">
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="w-[112px] text-[20px] font-bold text-white ">
        Depositing Eth
      </div>
      <div className="text-white w-[164px] text-[10px] mt-[25px] opacity-70">
        To deposit the funds into the Swap approve the transaction in your
        wallet, you can cancel anytime and withdraw your funds back to your
        wallet.
      </div>
      <div className="absolute bottom-[43px] left-0 right-0 flex flex-row w-full justify-center">
        <button
          className=" text-white text-[11px] py-[9px] px-[48px] rounded-full border border-tea-green"
          onClick={() => onCancel("SwapCreated")}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default DepositModal;
