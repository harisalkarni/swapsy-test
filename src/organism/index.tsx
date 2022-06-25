// import SelectWallet from "../molecule/SelectWallet";
import ConnectWallet from "../molecule/ConnectWallet";
import WrongNetwork from "../atom/WrongNetwork";
import Swap from "../molecule/Swap";
import SwapScreen from "../molecule/SwapScreen";
const HomePage = () => {
  return (
    <div className="flex flex-1 bg-black bg-opacity-80 min-h-screen justify-center items-center">
      <SwapScreen status="default" />
    </div>
  );
};

export default HomePage;
