import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { ModalAlert } from "constants/types";
interface Props {
  title: string;
  body: string;
  onCancel: () => void;
  onSuccess: () => void;
  type: ModalAlert;
}
const DepositModal = ({ title, body, onCancel, onSuccess, type }: Props) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      onSuccess();
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-[294px] h-[485px] bg-erie-black rounded-[5px]  justify-center relative text-center flex flex-col items-center z-20">
      <div className="absolute top-[18px] right-[18px]">
        <IoMdClose size={20} color="#707070" />
      </div>
      {type === "success" && (
        <div className="w-[112px]  text-[20px] font-bold flex flex-row justify-center ">
          <FaCheck color="#DBF9CD" size={67} />
        </div>
      )}

      {type === "failed" && (
        <div className="w-[112px]  text-[20px] font-bold flex flex-row justify-center ">
          <ImCross color="#E95B71" size={67} />
        </div>
      )}

      <div className="w-[112px] text-center text-[20px] font-bold text-white ">
        {title}
      </div>
      <div className="text-white text-center w-[164px] text-[10px] mt-[25px] opacity-70">
        {body}
      </div>
      {type === "success" && (
        <div className="text-tea-green text-[10px] mt-[37px] text-center">
          View on Etherscan
        </div>
      )}

      <div className="absolute bottom-[43px] left-0 right-0 flex flex-row w-full justify-center">
        <button
          className={` text-white text-[11px] py-[9px] px-[48px] rounded-full  ${
            type === "success" ? "bg-ocean-blue" : "border border-tea-green"
          }`}
          onClick={onCancel}
        >
          {type === "loading" ? "Cancel" : "OK"}
        </button>
      </div>
    </div>
  );
};

export default DepositModal;
