interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  classname: string;
}
const MySwapTab = ({ activeTab, setActiveTab, classname }: Props) => {
  return (
    <div
      className={`flex flex-row w-screen text-white text-[20px] md:border-b-0 border-b border-tea-green px-[27px] md:px-0 my-[40px] border-opacity-20 ${classname} md:justify-center`}
    >
      <div
        className="relative pb-[9px] mr-[40px] cursor-pointer"
        onClick={() => setActiveTab("create")}
      >
        <div>Create</div>
        {activeTab === "create" && (
          <div className="absolute -bottom-[2px] w-full">
            <div className="w-full h-1 rounded-md bg-ocean-blue"></div>
          </div>
        )}
      </div>
      <div
        className="relative pb-[9px] cursor-pointer"
        onClick={() => setActiveTab("myswap")}
      >
        <div>My Swaps</div>
        {activeTab === "myswap" && (
          <div className="absolute -bottom-[2px] w-full">
            <div className="w-full h-1 rounded-md bg-ocean-blue"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MySwapTab;
