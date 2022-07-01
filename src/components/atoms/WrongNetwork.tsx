import ErrorIcon from "assets/error-icon.svg";
import { IoMdClose } from "react-icons/io";

const WrongNetwork = () => {
  return (
    <div className="w-[281px] h-[369px] bg-erie-black bg-opacity-98 pt-[53px] pb-[42px] px-[32px] rounded-[10px] relative flex flex-col justify-center">
      <div className="absolute top-[19px] right-[19px]">
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="text-[20px] text-white font-medium text-center  mb-[59px]">
        <div className="flex flex-row justify-center mb-[25px]">
          <img src={ErrorIcon} alt="error icon" />
        </div>
        Wrong Network Detected
      </div>

      <div className="absolute bottom-[56px] left-0 right-0 flex flex-1 justify-center">
        <button className=" w-[136px] text-[11px] text-white h-[34px] bg-ocean-blue rounded-full">
          Switch Network
        </button>
      </div>
    </div>
  );
};

export default WrongNetwork;
