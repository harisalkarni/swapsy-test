// import SelectWallet from "../molecule/SelectWallet";
// import ConnectWallet from "../molecule/ConnectWallet";
// import WrongNetwork from "../atom/WrongNetwork";
// import SwapExpired from "../atom/SwapExpired";
import DepositModal from "../atom/DepositModal";
// import Swap from "../molecule/Swap";
const HomePage = () => {
  return (
    <div className="flex flex-1 bg-black bg-opacity-80 min-h-screen justify-center items-center">
      {/* <WrongNetwork /> */}
      {/* <SwapExpired /> */}
      <DepositModal />
    </div>
  );
};

export default HomePage;
