import EthIcon from "assets/coin-eth.png";
import USDT from "assets/coin-usdt.png";
import USDC from "assets/coin-usdc.png";
import DAI from "assets/coin-dai.png";
import { useState } from "react";
interface TokenConfirmProps {
  token: string;
  amount: number;
}
const TokenConfirm = ({ token, amount }: TokenConfirmProps) => {
  const [error, setError] = useState<boolean>(false);
  const renderIcon = (type: string) => {
    switch (type) {
      case "ETH":
        return EthIcon;
      case "USDC":
        return USDC;
      case "USDT":
        return USDT;
      case "DAI":
        return DAI;
      default:
        break;
    }
  };
  return (
    <>
      <div
        className={`flex flex-row justify-between bg-secondaryblack p-[11px] rounded-[5px] ${
          error ? "border border-red" : ""
        }`}
      >
        <div className="flex flex-row items-center">
          <div className="w-[20px] h-[20px] mr-[6px]">
            <img src={renderIcon(token)} alt="Eth icon" />
          </div>
          <div className="text-white text-[16px]">{token}</div>
        </div>
        <div className="text-white text-[14px]">{amount}</div>
      </div>
      {error && (
        <span className="text-[10px] text-red">* Insufficient funds</span>
      )}
    </>
  );
};

export default TokenConfirm;
