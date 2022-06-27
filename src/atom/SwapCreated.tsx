import { FiCopy } from "react-icons/fi";

const SwapCreated = () => {
  const socialMedia = [
    {
      name: "whatsapp",
      link: "#",
      icon: "-",
    },
    {
      name: "telegram",
      link: "#",
      icon: "-",
    },
    {
      name: "twitter",
      link: "#",
      icon: "-",
    },
    {
      name: "discord",
      link: "#",
      icon: "-",
    },
  ];
  return (
    <div className="w-[294px] h-[485px] bg-ocean-blue rounded-[5px] relative pt-[69px]">
      <div className="flex flex-col items-center">
        <div className="w-[67px] h-[50px] mb-[24px]">x</div>
        <div className="text-[20px] text-white w-[83px] text-center font-bold">
          Swap Created
        </div>
      </div>
      <div className=" mt-[59px] px-[24px]">
        <div className="text-[12px] text-white mb-[8px]">Swap Link</div>
        <div className="bg-white w-[234px] h-[40px] flex flex-row justify-between items-center rounded-[5px] px-[10px] mb-[24px]">
          <div className="text-[11px] font-bold">
            https://swapsy.io/0x..67e67/94
          </div>
          <div>
            <FiCopy color="#443CCF" size={18} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-between w-[179px]">
            {socialMedia.map((item) => {
              return (
                <div className="bg-secondaryblack w-[36px] h-[36px] rounded-[2px] flex flex-row justify-center items-center cursor-pointer">
                  <FiCopy color="#443CCF" size={18} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-tea-green text-[10px] mt-[37px] text-center">
          View on Etherscan
        </div>
      </div>
    </div>
  );
};

export default SwapCreated;
