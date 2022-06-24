import MySwapChild from "../atom/MySwapChild";
import MySwapTableTab from "../atom/MySwapTableTab";
import { useState } from "react";
const MySwap = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Open");

  const renderTable = (type: string) => {
    switch (type) {
      case "Open":
        return (
          <MySwapChild
            displayBtn={true}
            expiredStatus={false}
            btnBorder={false}
          />
        );
      case "Completed":
        return (
          <MySwapChild
            displayBtn={true}
            expiredStatus={false}
            btnBorder={true}
          />
        );
      case "Cancelled":
        return (
          <MySwapChild
            displayBtn={false}
            expiredStatus={false}
            btnBorder={true}
          />
        );
      case "Expired":
        return (
          <MySwapChild
            displayBtn={true}
            expiredStatus={false}
            btnBorder={false}
          />
        );

      default:
        break;
    }
  };
  return (
    <div className="w-full mx-[19px]">
      <MySwapTableTab
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      {renderTable(selectedMenu)}
    </div>
  );
};

export default MySwap;
