import TokenConfirm from "./TokenConfirm";
import ArrowIcon from "assets/arrow-icon.svg";
import { CoinType } from "constants/types";

interface SwapConnectData {
  tokenFrom: CoinType;
  amountFrom: number;
  tokenTo: CoinType;
  amountTo: number;
}

interface SwapConnectProps {
  swap: SwapConnectData;
}
const SwapConnect = ({ swap }: SwapConnectProps) => {
  return (
    <div>
      <TokenConfirm token={swap.tokenFrom} amount={swap.amountFrom} />
      <div className="py-[7px] flex flex-row justify-center">
        <img src={ArrowIcon} alt="Arrow Icon" />
      </div>
      <TokenConfirm token={swap.tokenTo} amount={swap.amountTo} />
    </div>
  );
};

export default SwapConnect;
