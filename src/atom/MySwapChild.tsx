import EthIcon from "../assets/coin-eth.png";
const MySwapChild = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between text-white px-[9px]">
        <div className="w-1/5">
          <div className="text-[10px] text-tea-green">#94812</div>
          <div className="text-[6px]">Expires in 1d 45m</div>
        </div>
        <div className="flex flex-row items-center w-1/3">
          <div className="mr-[5px]">
            <img src={EthIcon} className="w-[21px] h-[21px]" alt="coin icon" />
          </div>
          <div>
            <div className="text-[7px] text-tea-green">Ethereum</div>
            <div className="text-[10px]">991.900.000</div>
          </div>
        </div>
        <div className="flex flex-row items-center w-1/3">
          <div className="mr-[5px]">
            <img src={EthIcon} className="w-[21px] h-[21px]" alt="coin icon" />
          </div>
          <div>
            <div className="text-[7px] text-tea-green">Ethereum</div>
            <div className="text-[10px]">991.900.000</div>
          </div>
        </div>
        <div>
          <button className="text-[7px] w-[44px] h-[20px] bg-tea-green text-black rounded-full">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySwapChild;
