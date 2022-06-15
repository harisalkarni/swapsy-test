// import SelectWallet from "../molecule/SelectWallet";
import ConnectWallet from "../molecule/ConnectWallet";
const HomePage = () => {
  return (
    <div className="flex flex-1 bg-black bg-opacity-80 min-h-screen justify-center items-center">
      <ConnectWallet />
    </div>
  );
};

export default HomePage;
