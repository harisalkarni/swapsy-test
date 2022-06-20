import Logo from "../assets/logo-swapsi.png";
import TokenSwap from "../atom/TokenSwap";
const Swap = () => {
  return (
    <div className="min-w-screen min-h-screen swap-custom-bg bg-opacity-30 pt-[117px]">
      <div className="flex flex-row justify-between w-full px-[30px] h-[36px] items-center">
        <div>
          <img src={Logo} alt="swapsi logo" className="w-[93px] h-[28px]" />
        </div>
        <div className="text-white text-[10px]">Connect</div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <TokenSwap />
      </div>
    </div>
  );
};

export default Swap;
