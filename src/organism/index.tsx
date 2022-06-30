// import SelectWallet from "../molecule/SelectWallet";
// import ConnectWallet from "../molecule/ConnectWallet";
// import WrongNetwork from "../atom/WrongNetwork";
// import Swap from "../molecule/Swap";
import SwapScreen from "../molecule/SwapScreen";
// import CancelingSwap from "../atom/CancelingSwap";
// import SwapLink from "../molecule/SwapLink";
// import WithdrawingFunds from "../atom/WithdrawingProcess";
// import SwapCancelled from "../atom/SwapCancelled";
// import SomethingWrong from "../atom/SomethingWrong";
const HomePage = () => {
  return (
    <div className="flex flex-1 bg-black bg-opacity-80 min-h-screen justify-center items-center">
      <SwapScreen />
    </div>
  );
};

export default HomePage;
