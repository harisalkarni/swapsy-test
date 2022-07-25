import React, { useState, Dispatch } from "react";

interface Props {
  amount: number;
  name: string;
  setAmount: Dispatch<React.SetStateAction<number>>;
}

function AmountLabel({ amount, name, setAmount }: Props) {
  const [width, setWidth] = useState(4);

  return (
    <div className="flex flex-row items-end w-[85px] h-[33px]">
      <input
        type="text"
        value={amount}
        onChange={(e) => {
          if (e.target.validity.valid) {
            const targetValue = parseInt(e.target.value) || 0;
            setAmount(targetValue);
            setWidth(e.target.value.length === 0 ? 4 : e.target.value.length);
          }
        }}
        pattern="^[0-9]*[.,]?[0-9]*$"
        size={width}
        placeholder="0.00"
        className={`h-6 md:h-7 text-left max-w-[200px] text-[24px] md:text-[28px] bg-transparent outline-none text-white placeholder:text-white/30 ${
          amount === 0 ? "text-white/30" : "text-white"
        }`}
      />

      <div
        className={`${
          amount === 0 ? "text-white/30" : "text-white"
        } text-[16px] md:text-[20px] ml-1 leading-[20px]`}
      >
        {name}
      </div>
    </div>
  );
}

export default AmountLabel;
