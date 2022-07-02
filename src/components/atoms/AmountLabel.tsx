import { useState } from "react";

interface Props {
  amount: number;
  name: string;
}

function AmountLabel({ amount, name }: Props) {
  const [width, setWidth] = useState(4);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-row items-end w-[85px] h-[33px]">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          if (e.target.validity.valid) {
            const targetValue = e.target.value;
            setValue(targetValue);
            setWidth(targetValue.length === 0 ? 4 : targetValue.length);
          }
        }}
        pattern="^[0-9]*[.,]?[0-9]*$"
        size={width}
        placeholder="0.00"
        className="h-6 md:h-7 text-left max-w-[200px] text-[24px] md:text-[28px] bg-transparent outline-none text-white placeholder:text-white/30"
      />

      <div
        className={`${
          value !== "" ? "text-white" : "text-white/30"
        } text-[16px] md:text-[20px] ml-1 leading-[20px]`}
      >
        {name}
      </div>
    </div>
  );
}

export default AmountLabel;
