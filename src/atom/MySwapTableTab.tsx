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
    <div className="text-white flex flex-row text-[12px] cursor-pointer">
      {Menus.map((menu, index) => {
        return (
          <div
            key={index}
            onClick={() => setSelected(menu as MenuType)}
            className={`py-[6px] px-[12px]  rounded-full ${
              selected === menu ? "bg-ocean-blue" : "bg-transparent"
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
