import ListIcon from "./ListIcon";
import Duration from "./Duration";
const TokenSwap = () => {
  return (
    <div className="w-[294px] h-[436px] px-[40px] pt-[38px] pb-[34px] bg-erie-black relative">
      <div className="flex flex-row items-center">
        <div className="w-[108px]">
          <ListIcon />
        </div>
        <div className="text-[8px] opacity-60 text-white ml-[16px]">
          <div>Balance</div>
          <div>0.00</div>
        </div>
      </div>
      <div className="text-white opacity-30 flex flex-row items-end w-[85px] h-[33px]">
        <div className="text-[24px]">0.00</div>
        <div className="text-[16px] ml-1">ETH</div>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-[108px]">
          <ListIcon />
        </div>
        <div className="text-[8px] opacity-60 text-white ml-[16px]">
          <div>Balance</div>
          <div>0.00</div>
        </div>
      </div>
      <div className="text-white opacity-30 flex flex-row items-end w-[85px] h-[33px]">
        <div className="text-[24px]">0.00</div>
        <div className="text-[16px] ml-1">ETH</div>
      </div>
      <div>
        <Duration />
      </div>

      <div className="text-white flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="text-white opacity-40 text-[10px]">Price</div>
          <div className="text-right text-white opacity-40 text-[10px]">
            0.007 per USDT
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-white opacity-40 text-[10px]">Platform Fee</div>
          <div className="text-right text-white opacity-40 text-[10px]">
            0.5%
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-white opacity-40 text-[10px]">Total Amount</div>
          <div className="text-right text-white opacity-40 text-[10px]">
            - ETH
          </div>
        </div>
      </div>
      <div className=" absolute bottom-[34px] left-0 right-0  flex flex-row justify-center">
        <button className="text-white bg-ocean-blue py-[10px] px-[33px] rounded-full text-[14px]">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};
export default TokenSwap;
