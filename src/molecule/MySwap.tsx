import MySwapChild from "../atom/MySwapChild";
import MySwapTableTab from "../atom/MySwapTableTab";
const MySwap = () => {
  return (
    <div className="w-full mx-[19px]">
      <MySwapTableTab />
      <div className="text-white flex flex-row px-[9px] text-[10px] mb-[22px]">
        <div className="w-1/5">Swap</div>
        <div className="w-1/3">From</div>
        <div className="w-1/3">To</div>
        <div></div>
      </div>
      <MySwapChild />
    </div>
  );
};

export default MySwap;
