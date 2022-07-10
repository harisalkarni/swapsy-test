import { IoMdClose } from "react-icons/io";
import useStore from "utils/store";
import { useEffect } from "react";
const CancelingSwap = () => {
  const store = useStore();
  useEffect(() => {
    let timeout = setTimeout(() => {
      store.updateModal("CancelingSwapSuccess");
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="z-20 w-[294px] h-[485px]  rounded-[5px] pt-[88px] px-[33px] relative bg-erie-black flex flex-col items-center">
      <div
        className="absolute top-[18px] right-[18px]"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="text-[20px] text-tea-green">Swap #9481</div>
      <div className="w-[50px] h-[50px] mt-[92px] mb-[25px]">x</div>
      <div className="w-[104px] text-[20px] text-white text-center">
        Canceling Swap..
      </div>
    </div>
  );
};

export default CancelingSwap;
