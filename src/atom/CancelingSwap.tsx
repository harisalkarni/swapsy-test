import { IoMdClose } from "react-icons/io";

const CancelingSwap = () => {
  return (
    <div className="w-[294px] h-[485px]  rounded-[5px] pt-[88px] px-[33px] relative bg-erie-black flex flex-col items-center">
      <div className="absolute top-[18px] right-[18px]">
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
