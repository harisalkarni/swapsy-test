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
      className="mb-[8px] flex h-[58px] w-[255px] cursor-pointer flex-row items-center rounded-[5px] bg-secondaryblack px-[16px] md:h-[40px] md:w-[177px] md:px-[11px]"
      onClick={() => onSelectWallet({ label: label, amount: amount })}
    >
      <div className="mr-[24px] flex h-[36px] w-[36px] items-center justify-center md:mr-[17px] md:h-[24px] md:w-[24px]">
        <img src={icon} alt={label} />
      </div>
      <div className="text-[14px] text-white md:text-[9px]">{label}</div>
    </div>
  );
};

export default WalletList;
