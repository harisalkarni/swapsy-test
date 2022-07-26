import { WalletDetail } from "constants/types";

interface WalletListProps {
  // icon: HTMLImageElement;
  icon: string;
  amount: number;
  label: string;
  onSelectWallet: (a: WalletDetail) => void;
}

const WalletList = ({
  icon,
  label,
  onSelectWallet,
  amount,
}: WalletListProps) => {
  return (
    <div
      className="flex flex-row items-center md:w-[177px] md:h-[40px] w-[255px] h-[58px] px-[16px] md:px-[11px] bg-secondaryblack rounded-[5px] mb-[8px]"
      onClick={() => onSelectWallet({ label: label, amount: amount })}
    >
      <div className="w-[36px] h-[36px] md:w-[24px] md:h-[24px] flex items-center justify-center mr-[24px] md:mr-[17px]">
        <img src={icon} alt={label} />
      </div>
      <div className="text-white text-[14px] md:text-[9px]">{label}</div>
    </div>
  );
};

export default WalletList;
