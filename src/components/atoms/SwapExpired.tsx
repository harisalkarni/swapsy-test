import ClockIcon from "assets/clock.png";
import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";

const SwapExpired = () => {
  const store = useStore();
  return (
    <div className="w-[294px] h-[485px] bg-erie-black rounded-[5px]  justify-center relative text-center flex pt-[67px]">
      <div
        className="absolute top-[12px] right-[12px]"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div>
        <div className="mb-[24px]">
          <img src={ClockIcon} alt="Clock" width={109} height={109} />
        </div>
        <div className="w-[122px] text-[20px] font-bold text-white ">
          This Swap has Expired
        </div>
      </div>

      <div className="absolute bottom-[69px] left-0 right-0 flex flex-row w-full justify-center">
        <button className="bg-ocean-blue text-white text-[14px] py-[10px] px-[34px] rounded-full">
          Create a Swap
        </button>
      </div>
    </div>
  );
};

export default SwapExpired;
