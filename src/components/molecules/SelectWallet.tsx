import WalletList from "../atoms/WalletList";

interface SelectedWalletProps {
  onSelectWallet: (a: string) => void;
}
const SelectWallet = ({ onSelectWallet }: SelectedWalletProps) => {
  const listWallet = [
    {
      icon: "",
      label: "Metamask",
    },
    {
      icon: "",
      label: "Safepal",
    },
    {
      icon: "",
      label: "Trust Wallet",
    },
    {
      icon: "",
      label: "Token Pocket",
    },
    {
      icon: "",
      label: "Wallet Connect",
    },
  ];
  return (
    <div className="w-[319px] md:w-[222px] md:h-[314px] h-[481px] bg-erie-black bg-opacity-98 pt-[53px] md:pt-[24px] md:pb-[24px] pb-[42px] px-[32px] md:px-[23px] rounded-[10px] z-20 relative">
      <div className="absolute top-[19px] right-[19px]">x</div>
      <div className="text-[20px] md:text-[16px] text-white mb-[36px] md:mb-[20px] font-medium">
        Select a Wallet
      </div>
      {listWallet.map((wallet) => {
        return (
          <WalletList
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
