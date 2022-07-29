import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";
import Loading from "assets/loader.png";

const WithdrawingFunds = () => {
  const store = useStore();
  return (
    <div className="relative z-20 flex  h-[485px] w-[294px] flex-col items-center rounded-[5px] bg-erie-black px-[33px] pt-[41px]">
      <div
        className="absolute top-[18px] right-[18px] cursor-pointer"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="text-[20px] text-tea-green">Swap #9481</div>
      <div className="mt-[56px] mb-[25px] h-[50px] w-[50px]">
        <img src={Loading} alt="loading" />
      </div>
      <div className="w-[132px] text-center text-[20px] font-medium text-white">
        Withdrawing Funds...
      </div>
      <div className="mt-[25px] w-[162px] text-center text-[10px] text-white opacity-70">
        Your swap has expired. Approve transaction inside Your wallet to
        withdraw the amount.
      </div>
      <div className=" absolute bottom-[34px] left-0 right-0  flex flex-row justify-center">
        <button className="rounded-full  border border-tea-green py-[10px] px-[48px] text-[11px] text-white">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default WithdrawingFunds;
