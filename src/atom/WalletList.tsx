interface WalletListProps {
  icon: HTMLImageElement;
  label: string;
}

const WalletList = ({ icon, label }: WalletListProps) => {
  return (
    <div className="flex flex-row items-center w-[255px] h-[58px] px-[16px] bg-secondaryblack rounded-[5px] mb-[8px]">
      <div className="w-[36px] h-[36px] flex items-center justify-center mr-[24px]">
        m
      </div>
      <div className="text-white text-[14px]">{label}</div>
    </div>
  );
};

export default WalletList;
