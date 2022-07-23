import { FiCopy } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import useStore from "utils/store";
import TwitterIcon from "assets/twitter.png";
import DiscordIcon from "assets/discord.png";
import TeleIcon from "assets/telegram.png";
import WhatsappIcon from "assets/whatsapp.png";

const SwapCreated = () => {
  const store = useStore();
  const textBox = " https://swapsy.io/0x..67e67/94";
  const [copiedData, setCopiedData] = useState<boolean>(false);
  const [sendRecipient, setSendRecipient] = useState<boolean>(false);
  useEffect(() => {
    let timeout: any;
    if (copiedData) {
      timeout = setTimeout(() => {
        setCopiedData(false);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [copiedData, store]);

  const socialMedia = [
    {
      name: "whatsapp",
      link: "#",
      icon: WhatsappIcon,
      width: 14,
      heigh: 14,
    },
    {
      name: "telegram",
      link: "#",
      icon: TeleIcon,
      width: 15,
      heigh: 13,
    },
    {
      name: "twitter",
      link: "#",
      icon: TwitterIcon,
      width: 14,
      heigh: 12,
    },
    {
      name: "discord",
      link: "#",
      icon: DiscordIcon,
      width: 14,
      heigh: 11,
    },
  ];

  return (
    <div className="w-[281px] h-[481px] bg-ocean-blue rounded-[5px] relative pt-[69px] z-20">
      <div
        className="absolute top-[18px] right-[18px]"
        onClick={() => store.updateModal("NULL")}
      >
        <IoMdClose size={20} color="#fff" />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[67px] h-[50px] mb-[24px]">
          <FaCheck color="#DBF9CD" size={67} />
        </div>
        <div className="text-[20px] text-white w-[83px] text-center font-bold">
          Swap Created
        </div>
      </div>
      <div className="mt-[39px]  px-[24px] ">
        <div className="text-[12px] text-white mb-[8px]">Swap Link</div>
        <div className="bg-white w-[234px] h-[40px] rounded-[5px] flex items-center justify-center  px-[10px] mb-[8px]">
          {copiedData ? (
            <div className="text-secondary-purple text-[14px] font-medium  text-center">
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
        <div
          className={`border border-white w-[234px] h-[32px] rounded-[5px] flex flex-row  items-center  px-[10px] mb-[28px] ${
            sendRecipient ? "bg-white justify-center" : "border border-white"
          }`}
        >
          {sendRecipient ? (
            <div className="text-secondary-purple text-[14px] font-medium">
              Sent!
            </div>
          ) : (
            <div className="flex justify-between w-full">
              <input
                type="text"
                placeholder="Recipient Email"
                className="text-[10px] appearance-none text-white/50 w-full bg-none bg-transparent leading-tight focus:text-white focus:outline-none focus:shadow-outline"
              />
              <button onClick={() => setSendRecipient(true)}>
                <FaTelegramPlane color="#fff" size={18} />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-between w-[179px]">
            {socialMedia.map((item) => {
              return (
                <div className="bg-secondaryblack w-[36px] h-[36px] rounded-[2px] flex flex-row justify-center items-center cursor-pointer">
                  <img
                    src={item.icon}
                    alt={item.name}
                    width={item.width}
                    height={item.heigh}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-tea-green text-[10px] mt-[24px] text-center">
          View on Etherscan
        </div>
      </div>
    </div>
  );
};

export default SwapCreated;
