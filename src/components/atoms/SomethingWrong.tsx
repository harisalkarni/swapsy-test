import { IoMdClose } from "react-icons/io";
import ErrorIcon from "assets/error-icon.svg";
import useStore from "utils/store";

const SomethingWrong = () => {
  const store = useStore();
  return (
    <div className="relative flex  h-[485px] w-[294px] flex-col items-center rounded-[5px] bg-erie-black px-[33px] pt-[88px]">
      <div
        className="absolute top-[18px] right-[18px] cursor-pointer"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="mb-[24px]">
        <img src={ErrorIcon} alt="Loading" />
      </div>
      <div className="w-[124px] text-center text-[20px] text-white">
        Something Went Wrong
      </div>
      <div className="mt-[43px] w-[104px] text-center text-[10px] text-white opacity-70">
        Check your wallet for more details
      </div>
      <div className=" absolute bottom-[43px] left-0 right-0  flex flex-row justify-center">
        <button className="h-[34px] w-[138px] rounded-full bg-ocean-blue text-[11px] text-white">
          Ok
        </button>
      </div>
    </div>
  );
};

export default SomethingWrong;
