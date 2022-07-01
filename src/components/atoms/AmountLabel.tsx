interface Props {
  amount: string;
  name: string;
}

function AmountLabel({ amount, name }: Props) {
  return (
    <div className="text-white/30 flex flex-row items-end w-[85px] h-[33px]">
      <div className="text-[24px] md:text-[28px] leading-[24px]">{amount}</div>
      <div className="text-[16px] md:text-[20px] ml-1 leading-[20px]">
        {name}
      </div>
    </div>
  );
}

export default AmountLabel;
