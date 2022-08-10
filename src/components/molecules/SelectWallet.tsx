import WalletList from "../atoms/WalletList";
import { IoMdClose } from "react-icons/io";
import MetamaskIcon from "assets/metamask.png";
import SafepalIcon from "assets/safepal.png";
import TrustIcon from "assets/trust.png";
import TokenpocketIcon from "assets/tokenpocket.png";
import WalletConnect from "assets/walletconnect.png";
import useStore from "utils/store";
import { WalletDetail } from "constants/types";
import { isBrowser } from "react-device-detect";

interface SelectedWalletProps {
  option: "metamask" | "trust-wallet" | "wallet-connect" | "binance";
  onClick: (type: ConnectionType) => void;
}
const SelectWallet = ({ option, onClick }: SelectedWalletProps) => {
  const store = useStore();

  const listWallet = [
    {
      icon: MetamaskIcon,
      label: "Metamask",
      amount: 100,
    },
    {
      icon: SafepalIcon,
      label: "Safepal",
      amount: 100,
    },
    {
      icon: TrustIcon,
      label: "Trust Wallet",
      amount: 100,
    },
    {
      icon: TokenpocketIcon,
      label: "Token Pocket",
      amount: 100,
    },
    {
      icon: WalletConnect,
      label: "Wallet Connect",
      amount: 100,
    },
  ];

  let ImageSrc: StaticImageData;
  let label: string;

  switch (option) {
    case "metamask":
      ImageSrc = MetamaskIcon;
      label = "Metamask";
      break;
    case "trust-wallet":
      ImageSrc = TrustIcon;
      label = "Trust Wallet";
      break;
    case "wallet-connect":
      ImageSrc = WalletConnect;
      label = "Wallet Connect";
      break;
    case "binance":
      ImageSrc = TokenpocketIcon;
      label = "Token Pocket";
      break;
  }

  return (
    <div className="relative z-20 h-[481px] w-[319px] rounded-[10px] bg-erie-black bg-opacity-98 px-[32px] pt-[53px] pb-[42px] md:h-[314px] md:w-[222px] md:px-[23px] md:pt-[24px] md:pb-[24px]">
      <div
        className="absolute top-[19px] right-[19px] cursor-pointer"
        onClick={() => {
          if (isBrowser) {
            store.updateSideModal("NULL");
          } else {
            store.updateModal("NULL");
          }
        }}
      >
        <IoMdClose size={20} color="#707070" />
      </div>
      <div className="mb-[36px] text-[20px] font-medium text-white md:mb-[10px] md:text-[16px]">
        Select a Wallet
      </div>
      {listWallet.map((wallet, index) => {
        return (
          <WalletList
            key={index}
            label={wallet.label}
            icon={wallet.icon}
            amount={wallet.amount}
            onSelectWallet={onSelectWallet}
          />
        );
      })}
    </div>
  );
};

export default SelectWallet;
