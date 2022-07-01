import Durations from "constants/durations";
import { Dispatch, SetStateAction } from "react";

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const Duration = ({ selected, setSelected }: Props) => {
  return (
    <div className="flex flex-row items-center justify-between mt-[19px]">
      <div className="text-white text-[10px] ">Duration</div>
      <div className="flex flex-row">
        {Durations.map((duration, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelected(duration)}
              className={`h-[30px] w-[30px] mx-1 rounded-[5px] justify-center items-center flex flex-row  cursor-pointer ${
                selected === duration
                  ? "bg-second-tea-green"
                  : "bg-dark-charcoal"
              }`}
            >
              <div
                className={` text-[10px] ${
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
