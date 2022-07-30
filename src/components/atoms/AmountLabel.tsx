import React, { useState, Dispatch } from "react";
import NumberFormat from "react-number-format";

interface Props {
  amount: number;
  name: string;
  setAmount: Dispatch<React.SetStateAction<number>>;
  error: boolean;
}

function AmountLabel({ amount, name, setAmount, error }: Props) {
  const [width, setWidth] = useState(
    amount.toString().length === 1
      ? 20
      : amount.toString().length === 0
      ? 20
      : amount.toString().length * 10
  );

  return (
    <div>
      <div className="flex h-[33px] w-[85px] flex-row items-end">
        <NumberFormat
          placeholder="0"
          className={`h-6 max-w-[200px]  bg-transparent text-left text-[24px] text-white outline-none placeholder:text-white/30 md:h-7 md:text-[27px] ${
            error ? "text-red" : amount === 0 ? "text-white/30" : "text-white"
          }`}
          value={amount}
          style={{ width: width }}
          onValueChange={(values) => {
            const { formattedValue } = values;
            const val = parseFloat(formattedValue);
            setWidth(
              formattedValue.length === 1
                ? 20
                : formattedValue.length === 0
                ? 20
                : formattedValue.length * 10
            );
            setAmount(val);
          }}
        />
        <div
          className={`${
            error ? "text-red" : amount === 0 ? "text-white/30" : "text-white"
          } ml-1 text-[16px] leading-[20px] md:text-[18px]`}
        >
          {name}
        </div>
      </div>
      {error && <div className="text-[7px] text-red">* Insufficient funds</div>}
    </div>
  );
}

export default AmountLabel;
