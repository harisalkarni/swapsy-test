interface WalletListProps {
  // icon: HTMLImageElement;
  icon: string;
  label: string;
  onSelectWallet: (a: string) => void;
}

const WalletList = ({ icon, label, onSelectWallet }: WalletListProps) => {
  return (
    <div
      className="flex flex-row items-center md:w-[177px] md:h-[40px] w-[255px] h-[58px] px-[16px] md:px-[11px] bg-secondaryblack rounded-[5px] mb-[8px]"
      onClick={() => onSelectWallet(label)}
    >
      <div className="w-[36px] h-[36px] flex items-center justify-center mr-[24px] md:mr-[17px]">
        m
      </div>
      <div className="text-white text-[14px] md:text-[9px]">{label}</div>
    </div>
  );
};

export default WalletList;
