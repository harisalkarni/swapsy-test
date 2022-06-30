const SwapCancelled = () => {
  return (
    <div className="w-[294px] h-[485px]  rounded-[5px] pt-[88px] px-[33px] relative bg-erie-black flex flex-col items-center">
      <div className="w-[67px] h-[50px] mb-[24px]">x</div>
      <div className="text-white w-[104px] text-center text-[20px]">
        Swap Cancelled
      </div>
      <div className="mt-[43px]">
        <div className="bg-secondaryblack w-[220px] h-[40px] flex flex-row justify-between text-[12px] py-[11px] px-[11px]">
          <div className="opacity-70 text-white">Swap</div>
          <div className="text-white">#94812</div>
        </div>
        <div className="bg-secondaryblack w-[220px] h-[40px] flex flex-row justify-between text-[12px] py-[11px] px-[11px] mt-[8px]">
          <div className="opacity-70 text-white">Amount</div>
          <div className="text-white">999999 ETH</div>
        </div>
      </div>
      <div className=" absolute bottom-[34px] left-0 right-0  flex flex-row justify-center">
        <button className="text-white w-[138px] h-[34px] rounded-full text-[11px] bg-ocean-blue">
          Ok
        </button>
      </div>
    </div>
  );
};

export default SwapCancelled;
