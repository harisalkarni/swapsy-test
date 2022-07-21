import WalletList from "../atoms/WalletList";
import { IoMdClose } from "react-icons/io";
import MetamaskIcon from "assets/metamask.png";
import SafepalIcon from "assets/safepal.png";
import TrustIcon from "assets/trust.png";
import TokenpocketIcon from "assets/tokenpocket.png";
import WalletConnect from "assets/walletconnect.png";
import useStore from "utils/store";
interface SelectedWalletProps {
  onSelectWallet: (a: string) => void;
}
const SelectWallet = ({ onSelectWallet }: SelectedWalletProps) => {
  const store = useStore();

  const listWallet = [
    {
      icon: MetamaskIcon,
      label: "Metamask",
    },
    {
      icon: SafepalIcon,
      label: "Safepal",
    },
    {
      icon: TrustIcon,
      label: "Trust Wallet",
    },
    {
      icon: TokenpocketIcon,
      label: "Token Pocket",
    },
    {
      icon: WalletConnect,
      label: "Wallet Connect",
    },
  ];
  return (
    <div className="w-[319px] md:w-[222px] md:h-[314px] h-[481px] bg-erie-black bg-opacity-98 pt-[53px] md:pt-[24px] md:pb-[24px] pb-[42px] px-[32px] md:px-[23px] rounded-[10px] z-20 relative">
      <div
        className="absolute top-[19px] right-[19px]"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="text-[20px] md:text-[16px] text-white mb-[36px] md:mb-[20px] font-medium">
        Select a Wallet
      </div>
      {listWallet.map((wallet, index) => {
        return (
          <WalletList
            key={index}
            label={wallet.label}
            icon={wallet.icon}
            onSelectWallet={onSelectWallet}
          />
        );
      })}
    </div>
  );
};

export default SelectWallet;
