import numeral from "numeral";

interface Props {
  balance: number;
}

function BalanceLabel({ balance }: Props) {
  return (
    <div className="ml-[16px] text-[8px] text-white opacity-60 md:text-[11px]">
      <div>Balance</div>
      <div>{numeral(balance).format("0,0.00")}</div>
    </div>
  );
}

export default BalanceLabel;
