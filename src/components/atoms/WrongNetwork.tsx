import ErrorIcon from "assets/error-icon.svg";
import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";

const WrongNetwork = () => {
  const store = useStore();
  return (
    <div className="relative flex h-[369px] w-[281px] flex-col justify-center rounded-[10px] bg-erie-black bg-opacity-98 px-[32px] pt-[53px] pb-[42px]">
      <div
        className="absolute top-[19px] right-[19px] cursor-pointer"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="mb-[59px] text-center text-[20px] font-medium  text-white">
        <div className="mb-[25px] flex flex-row justify-center">
          <img src={ErrorIcon} alt="error icon" />
        </div>
        Wrong Network Detected
      </div>

      <div className="absolute bottom-[56px] left-0 right-0 flex flex-1 justify-center">
        <button className=" h-[34px] w-[136px] rounded-full bg-ocean-blue text-[11px] text-white">
          Switch Network
        </button>
      </div>
    </div>
  );
};

export default WrongNetwork;
