import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";
import Loading from "assets/loader.png";

const WithdrawingFunds = () => {
  const store = useStore();
  return (
    <div className="z-20 w-[294px] h-[485px]  rounded-[5px] pt-[41px] px-[33px] relative bg-erie-black flex flex-col items-center">
      <div
        className="absolute top-[18px] right-[18px]"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="text-[20px] text-tea-green">Swap #9481</div>
      <div className="w-[50px] h-[50px] mt-[56px] mb-[25px]">
        <img src={Loading} alt="loading" />
      </div>
      <div className="w-[132px] text-[20px] text-white text-center font-medium">
        Withdrawing Funds...
      </div>
      <div className="w-[162px] text-[10px] text-center mt-[25px] text-white opacity-70">
        Your swap has expired. Approve transaction inside Your wallet to
        withdraw the amount.
      </div>
      <div className=" absolute bottom-[34px] left-0 right-0  flex flex-row justify-center">
        <button className="text-white  py-[10px] px-[48px] rounded-full text-[11px] border border-tea-green">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default WithdrawingFunds;
