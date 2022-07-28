import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";
import { useEffect } from "react";
import Loading from "assets/loader.png";

const CancelingSwap = () => {
  const store = useStore();
  useEffect(() => {
    let timeout = setTimeout(() => {
      store.updateModal("CancelingSwapSuccess");
    }, 500);
    return () => clearTimeout(timeout);
  }, [store]);

  return (
    <div className="relative z-20 flex  h-[485px] w-[294px] flex-col items-center rounded-[5px] bg-erie-black px-[33px] pt-[88px]">
      <div
        className="absolute top-[18px] right-[18px] cursor-pointer"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="text-[20px] text-tea-green">Swap #9481</div>
      <div className="mt-[92px] mb-[25px] h-[50px] w-[50px]">
        <img src={Loading} alt="loader" />
      </div>
      <div className="w-[104px] text-center text-[20px] font-medium text-white">
        Canceling Swap..
      </div>
    </div>
  );
};

export default CancelingSwap;
