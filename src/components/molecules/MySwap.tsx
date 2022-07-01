import MySwapTableTab from "components/atoms/MySwapTableTab";
import { useState } from "react";
import { MenuType } from "constants/types";
import TransactionTable from "components/atoms/TransactionTable";

const MySwap = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>("Open");

  return (
    <div className="w-full">
      <MySwapTableTab selected={selectedMenu} setSelected={setSelectedMenu} />
      <TransactionTable type={selectedMenu} />
    </div>
  );
};

export default MySwap;
