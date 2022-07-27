import Durations from "constants/durations";
import { Dispatch, SetStateAction } from "react";

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const Duration = ({ selected, setSelected }: Props) => {
  return (
    <div className="mt-[28px] flex flex-row items-center justify-between">
      <div className="text-[10px] text-white md:text-[11px]">Duration</div>
      <div className="flex flex-row">
        {Durations.map((duration, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelected(duration)}
              className={`mx-1 flex h-[30px] w-[30px] cursor-pointer flex-row items-center justify-center rounded-[5px] md:h-[40px]  md:w-[40px] ${
                selected === duration
                  ? "bg-second-tea-green"
                  : "bg-dark-charcoal"
              }`}
            >
              <div
                className={`text-[10px] md:text-sm ${
                  selected === duration ? "text-black" : "text-white opacity-50"
                }`}
              >
                {duration}
                {`h`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Duration;
