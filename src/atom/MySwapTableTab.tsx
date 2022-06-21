import { useState } from "react";
const menuList = ["Open", "Completed", "Cancelled", "Expired"];
const MySwapTableTab = () => {
  const [seletedMenu, setSelectedMenu] = useState<string>("");

  return (
    <div className="text-white flex flex-row text-[12px]">
      {menuList.map((val) => {
        return (
          <div
            onClick={() => setSelectedMenu(val)}
            className={`py-[6px] px-[12px]  rounded-full ${
              seletedMenu === val ? "bg-ocean-blue" : "bg-transparent"
            }`}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
};

export default MySwapTableTab;
