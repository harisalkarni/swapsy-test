const WrongNetwork = () => {
  return (
    <div className="w-[281px] h-[369px] bg-erie-black bg-opacity-98 pt-[53px] pb-[42px] px-[32px] rounded-[10px] relative">
      <div className="absolute top-[19px] right-[19px]">x</div>
      <div className="text-[20px] text-white font-medium text-center">
        Wrong Network Detected
      </div>

      <div className="absolute bottom-[56px] left-0 right-0 flex flex-1 justify-center">
        <button className=" w-[136px] text-[11px] text-white h-[34px] bg-ocean-blue rounded-full">
          Switch Network
        </button>
      </div>
    </div>
  );
};

export default WrongNetwork;
