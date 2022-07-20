import Menus from "constants/menus";
import { MenuType } from "constants/types";
import { SetStateAction } from "react";
import { Dispatch } from "react";

interface Props {
  selected: MenuType;
  setSelected: Dispatch<SetStateAction<MenuType>>;
}
const MySwapTableTab = ({ selected, setSelected }: Props) => {
  return (
    <div className="flex flex-row text-[12px] cursor-pointer">
      {Menus.map((menu, index) => {
        return (
          <div
            key={index}
            onClick={() => setSelected(menu as MenuType)}
            className={`rounded-full md:mr-[18px] mr-0 px-[12px] py-[6px]   flex flex-row items-center justify-center ${
              selected === menu
                ? "bg-ocean-blue text-white"
                : "bg-transparent text-white/40"
            }`}
          >
            {menu}
          </div>
        );
      })}
    </div>
  );
};

export default MySwapTableTab;
