import { useState } from "react";

const durationTime = ["12", "24", "48", "72"];
const Duration = () => {
  const [selectedDuration, setSelectedDuration] = useState<string>("12");
  return (
    <div className="flex flex-row items-center">
      <div className="text-white text-[10px] mr-[26px]">Duration</div>
      {durationTime.map((val, index) => {
        return (
          <div
            onClick={() => setSelectedDuration(val)}
            className={`h-[30px] w-[30px] rounded-[5px] justify-center items-center flex flex-row mr-[8px] cursor-pointer ${
              selectedDuration === val
                ? "bg-second-tea-green"
                : "bg-dark-charcoal"
            }`}
          >
            <div
              className={` text-[10px] ${
                selectedDuration === val
                  ? "text-black"
                  : "text-white opacity-50"
              }`}
            >
              {val}
              {`h`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Duration;
