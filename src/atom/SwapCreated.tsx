import { FiCopy } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
const SwapCreated = () => {
  const [textBox, setTextBox] = useState<string>(
    " https://swapsy.io/0x..67e67/94"
  );
  const [copiedData, setCopiedData] = useState<boolean>(false);

  useEffect(() => {
    let timeout: any;
    if (copiedData) {
      timeout = setTimeout(() => setCopiedData(false), 2000);
    }
    return () => clearTimeout(timeout);
  }, [copiedData]);
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
    <div className="w-[281px] h-[481px] bg-ocean-blue rounded-[5px] relative pt-[69px]">
      <div className="absolute top-[18px] right-[18px]">
        <IoMdClose size={20} color="#fff" />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[67px] h-[50px] mb-[24px]">x</div>
        <div className="text-[20px] text-white w-[83px] text-center font-bold">
          Swap Created
        </div>
      </div>
      <div className=" mt-[59px] px-[24px] ">
        <div className="text-[12px] text-white mb-[8px]">Swap Link</div>
        <div className="bg-white w-[234px] h-[40px] rounded-[5px] flex items-center justify-center  px-[10px] mb-[24px]">
          {copiedData ? (
            <div className="text-secondary-purple text-[14px] font-bold">
              Link Copied!
            </div>
          ) : (
            <div className="flex flex-row justify-between w-full">
              <div className="text-[11px] font-bold">{textBox}</div>
              <CopyToClipboard
                text={textBox}
                onCopy={() => setCopiedData(true)}
              >
                <div>
                  <FiCopy color="#443CCF" size={18} />
                </div>
              </CopyToClipboard>
            </div>
          )}
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
