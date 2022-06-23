const menuList = ["Open", "Completed", "Cancelled", "Expired"];
interface MySwapTabProps {
  selectedMenu: string;
  setSelectedMenu: (a: string) => void;
}
const MySwapTableTab = ({ selectedMenu, setSelectedMenu }: MySwapTabProps) => {
  return (
    <div className="text-white flex flex-row text-[12px]">
      {menuList.map((val) => {
        return (
          <div
            onClick={() => setSelectedMenu(val)}
            className={`py-[6px] px-[12px]  rounded-full ${
              selectedMenu === val ? "bg-ocean-blue" : "bg-transparent"
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
