// import SelectWallet from "../molecule/SelectWallet";
import ConnectWallet from "../molecule/ConnectWallet";
import WrongNetwork from "../atom/WrongNetwork";
import Swap from "../molecule/Swap";
const HomePage = () => {
  return (
    <div className="flex flex-1 bg-black bg-opacity-80 min-h-screen justify-center items-center">
      <WrongNetwork />
    </div>
  );
};

export default HomePage;
