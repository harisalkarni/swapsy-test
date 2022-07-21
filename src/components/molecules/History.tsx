import MySwapTableTab from "components/atoms/MySwapTableTab";
import { useState } from "react";
import { MenuType } from "constants/types";
import TransactionTable from "components/atoms/TransactionTable";

const History = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>("Open");

  return (
    <div className="w-full md:w-[638px] mx-auto md:px-0 px-[27px]">
      <div className="md:flex md:flex-row md:justify-center">
        <MySwapTableTab selected={selectedMenu} setSelected={setSelectedMenu} />
      </div>

      <TransactionTable type={selectedMenu} />
    </div>
  );
};

export default History;
