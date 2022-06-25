const SwapExpired = () => {
  return (
    <div className="w-[294px] h-[485px] bg-erie-black rounded-[5px]  justify-center relative">
      <div className="w-[112px] text-[20px] font-bold text-white">
        This Swap has Expired
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
