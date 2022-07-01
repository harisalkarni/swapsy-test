import { TabType } from "constants/types";

interface Props {
  activeTab: string;
  setActiveTab: (tab: TabType) => void;
  classname: string;
}
const Tabs = ({ activeTab, setActiveTab, classname }: Props) => {
  const renderActiveBar = () => (
    <div className="absolute -bottom-[2px] w-full">
      <div className="w-full h-1 rounded-md bg-ocean-blue"></div>
    </div>
  );
  return (
    <div
      className={`flex flex-row w-screen text-white text-[20px] md:border-b-0 border-b border-tea-green px-[27px] md:px-0 my-[40px] border-opacity-20 ${classname} md:justify-center`}
    >
      <div
        className="relative pb-[9px] mr-[40px] cursor-pointer"
        onClick={() => setActiveTab("CREATE")}
      >
        <div>Create</div>
        {activeTab === "CREATE" && renderActiveBar()}
      </div>
      <div
        className="relative pb-[9px] cursor-pointer"
        onClick={() => setActiveTab("HISTORY")}
      >
        <div>My Swaps</div>
        {activeTab === "HISTORY" && renderActiveBar()}
      </div>
    </div>
  );
};

export default Tabs;
