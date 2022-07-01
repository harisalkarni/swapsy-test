import { IoMdClose } from "react-icons/io";
const SomethingWrong = () => {
  return (
    <div className="w-[294px] h-[485px]  rounded-[5px] pt-[88px] px-[33px] relative bg-erie-black flex flex-col items-center">
      <div className="absolute top-[18px] right-[18px]">
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="w-[67px] h-[50px] mb-[24px]">x</div>
      <div className="text-white w-[124px] text-center text-[20px]">
        Something Went Wrong
      </div>
      <div className="mt-[43px] text-center w-[104px] text-[10px] opacity-70 text-white">
        Check your wallet for more details
      </div>
      <div className=" absolute bottom-[34px] left-0 right-0  flex flex-row justify-center">
        <button className="text-white w-[138px] h-[34px] rounded-full text-[11px] bg-ocean-blue">
          Ok
        </button>
      </div>
    </div>
  );
};

export default SomethingWrong;
