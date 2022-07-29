import React, { useState, Dispatch } from "react";

interface Props {
  amount: number;
  name: string;
  setAmount: Dispatch<React.SetStateAction<number>>;
  error: boolean;
}

function AmountLabel({ amount, name, setAmount, error }: Props) {
  const [width, setWidth] = useState(1);

  return (
    <div>
      <div className="flex h-[33px] w-[85px] flex-row items-end">
        <input
          type="text"
          value={amount}
          onChange={(e) => {
            if (e.target.validity.valid) {
              const targetValue = parseInt(e.target.value) || 0;
              setAmount(targetValue);
              setWidth(e.target.value.length === 1 ? 3 : e.target.value.length);
            }
          }}
          pattern="^[0-9]*[.,]?[0-9]*$"
          size={width}
          placeholder="0.00"
          className={`h-6 max-w-[200px] bg-transparent text-left text-[24px] text-white outline-none placeholder:text-white/30 md:h-7 md:text-[27px] ${
            error ? "text-red" : amount === 0 ? "text-white/30" : "text-white"
          }`}
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
