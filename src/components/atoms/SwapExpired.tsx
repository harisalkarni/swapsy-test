import ClockIcon from "assets/clock.png";
import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";

const SwapExpired = () => {
  const store = useStore();
  return (
    <div className="relative flex h-[485px] w-[294px]  justify-center rounded-[5px] bg-erie-black pt-[67px] text-center">
      <div
        className="absolute top-[12px] right-[12px] cursor-pointer"
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

      <div className="absolute bottom-[69px] left-0 right-0 flex w-full flex-row justify-center">
        <button className="rounded-full bg-ocean-blue py-[10px] px-[34px] text-[14px] text-white">
          Create a Swap
        </button>
      </div>
    </div>
  );
};

export default SwapExpired;
