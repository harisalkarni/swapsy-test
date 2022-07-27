interface BottomInfoProps {
  amount: number;
}
const BottomInfo = ({ amount }: BottomInfoProps) => {
  return (
    <div>
      <div className="flex flex-row justify-between text-[10px] text-white opacity-60">
        <div>Price</div>
        <div>0.007 per USDT</div>
      </div>
      <div className="flex flex-row justify-between text-[10px] text-white opacity-60">
        <div>Platform Fee</div>
        <div>0.5%</div>
      </div>
      <div className="flex flex-row justify-between text-[10px] text-white opacity-60">
        <div>Total Amount</div>
        <div>{amount} ETH</div>
      </div>
      <div className="mt-[16px] text-[10px] text-tea-green">
        View on Eherscan
      </div>
    </div>
  );
};
export default BottomInfo;
