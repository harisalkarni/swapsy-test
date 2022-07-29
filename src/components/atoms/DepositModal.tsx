import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { ModalAlert } from "constants/types";
import LoadingIcon from "assets/loader.png";
import useStore from "utils/store";
interface Props {
  title: string;
  body: string;
  onCancel: () => void;
  onSuccess: () => void;
  type: ModalAlert;
}

const DepositModal = ({ title, body, onCancel, onSuccess, type }: Props) => {
  const store = useStore();
  useEffect(() => {
    let timeout = setTimeout(() => {
      onSuccess();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [onSuccess]);

  return (
    <div className="relative z-20 flex h-[485px] w-[294px]   flex-col items-center rounded-[5px] bg-erie-black pt-[86px] text-center">
      <div
        className="absolute top-[18px] right-[18px] cursor-pointer"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      {type === "success" && (
        <div className="flex  w-[112px] flex-row justify-center text-[20px] font-bold ">
          <FaCheck color="#DBF9CD" size={67} />
        </div>
      )}

      {type === "failed" && (
        <div className="flex  w-[112px] flex-row justify-center text-[20px] font-bold ">
          <ImCross color="#E95B71" size={67} />
        </div>
      )}

      {type === "loading" && (
        <div className="flex  w-[112px] flex-row justify-center text-[20px] font-bold ">
          <img src={LoadingIcon} alt="Loading" width={50} height={50} />
        </div>
      )}

      <div className="mt-[25px] w-[112px] text-center text-[20px] font-medium text-white">
        {title}
      </div>
      <div className="mt-[25px] w-[164px] text-center text-[10px] text-white/70">
        {body}
      </div>
      {type === "success" && (
        <div className="mt-[37px] text-center text-[10px] text-tea-green">
          View on Etherscan
        </div>
      )}

      <div className="absolute bottom-[43px] left-0 right-0 flex w-full flex-row justify-center">
        <button
          className={` rounded-full py-[9px] px-[48px] text-[11px] text-white  ${
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
