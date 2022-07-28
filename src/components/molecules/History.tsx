import MySwapTableTab from "components/atoms/MySwapTableTab";
import { useState } from "react";
import { MenuType } from "constants/types";
import TransactionTable from "components/atoms/TransactionTable";
import useStore from "utils/store";

const History = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>("Open");
  const store = useStore();

  return (
    <div className="mx-auto w-full px-[27px] md:w-[638px] md:px-0">
      <div className="md:flex md:flex-row md:justify-center">
        <MySwapTableTab selected={selectedMenu} setSelected={setSelectedMenu} />
      </div>

      {store.wallet.label != "" ? (
        <TransactionTable type={selectedMenu} />
      ) : (
        <div className="flex h-[274px] flex-row items-center justify-center md:h-[500px]">
          <div className="text-[24px] text-sonic-silver">No Swaps Yet</div>
        </div>
      )}
    </div>
  );
};

export default History;
