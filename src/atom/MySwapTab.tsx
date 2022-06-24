interface MySwapProps {
  activeTab: string;
  setActiveTab: (a: string) => void;
}
const MySwapTab = ({ activeTab, setActiveTab }: MySwapProps) => {
  return (
    <div className="flex flex-row text-white text-[20px]  border-b border-tea-green px-[27px] my-[40px] border-opacity-20">
      <div
        className="relative pb-[9px] mr-[40px]"
        onClick={() => setActiveTab("create")}
      >
        <div>Create</div>
        {activeTab === "create" && (
          <div className="absolute -bottom-[2px] w-full">
            <div className="w-full border-t-[5px] border-ocean-blue"></div>
          </div>
        )}
      </div>
      <div
        className="relative pb-[9px] mr-[40px]"
        onClick={() => setActiveTab("myswap")}
      >
        <div>My Swaps</div>
        {activeTab === "myswap" && (
          <div className="absolute -bottom-[2px] w-full">
            <div className="w-full border-t-[5px] border-ocean-blue"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MySwapTab;
