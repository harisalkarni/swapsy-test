import { TabType } from "constants/types";

interface Props {
  activeTab: string;
  setActiveTab: (tab: TabType) => void;
  classname: string;
}
const Tabs = ({ activeTab, setActiveTab, classname }: Props) => {
  const renderActiveBar = () => (
    <div className="absolute -bottom-[2px] w-full">
      <div className="h-1 w-full rounded-md bg-ocean-blue"></div>
    </div>
  );
  return (
    <div
      className={`my-[40px] flex w-screen flex-row border-b border-tea-green border-opacity-20 px-[27px] text-[20px] text-white md:border-b-0 md:px-0 ${classname} md:justify-center`}
    >
      <div
        className="relative mr-[40px] cursor-pointer pb-[9px]"
        onClick={() => setActiveTab("CREATE")}
      >
        <div className="text-[20px] md:text-[24px]">Create</div>
        {activeTab === "CREATE" && renderActiveBar()}
      </div>
      <div
        className="relative cursor-pointer pb-[9px]"
        onClick={() => setActiveTab("HISTORY")}
      >
        <div className="text-[20px] md:text-[24px]">My Swaps</div>
        {activeTab === "HISTORY" && renderActiveBar()}
      </div>
    </div>
  );
};

export default Tabs;
