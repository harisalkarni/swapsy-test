import numeral from "numeral";

interface Props {
  balance: number;
}

function BalanceLabel({ balance }: Props) {
  return (
    <div className="text-[8px] md:text-xs opacity-60 text-white ml-[16px]">
      <div>Balance</div>
      <div>{numeral(balance).format("0,0.00")}</div>
    </div>
  );
}

export default BalanceLabel;
