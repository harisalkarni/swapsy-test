import MySwapTableTab from "components/atoms/MySwapTableTab";
import React, { useState, Dispatch } from "react";
import { MenuType, ModalType } from "constants/types";
import TransactionTable from "components/atoms/TransactionTable";

interface HistoryProps {
  getDetailSwap: Dispatch<React.SetStateAction<ModalType>>;
}

const History = ({ getDetailSwap }: HistoryProps) => {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>("Open");

  return (
    <div className="w-full md:w-[638px]  mx-auto">
      <div className="md:flex md:flex-row md:justify-center">
        <MySwapTableTab selected={selectedMenu} setSelected={setSelectedMenu} />
      </div>

      <TransactionTable type={selectedMenu} getDetailSwap={getDetailSwap} />
    </div>
  );
};

export default History;
