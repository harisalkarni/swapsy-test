import WalletList from "../atom/WalletList";
const SelectWallet = () => {
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
    <div className="w-[319px] h-[481px] bg-erie-black bg-opacity-98 pt-[53px] pb-[42px] px-[32px] rounded-[10px] relative">
      <div className="absolute top-[19px] right-[19px]">x</div>
      <div className="text-[20px] text-white mb-[36px] font-medium">
        Select a Wallet
      </div>
      {listWallet.map((wallet) => {
        return <WalletList label={wallet.label} icon={wallet.icon} />;
      })}
    </div>
  );
};

export default SelectWallet;
