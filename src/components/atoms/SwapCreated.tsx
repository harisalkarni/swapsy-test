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
    <div className="relative z-20 h-[481px] w-[281px] rounded-[5px] bg-ocean-blue pt-[69px]">
      <div
        className="absolute top-[18px] right-[18px] cursor-pointer"
        onClick={() => {
          store.updateModal("NULL");
          store.addAddressToWallet({ label: "", amount: 0 });
          store.updateTrxStatus(false);
          store.updateApproveTrx(false);
          store.updateTrxReceipt(false);
          store.updateSideModal("NULL");
        }}
      >
        <IoMdClose size={20} color="#fff" />
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-[24px] h-[50px] w-[67px]">
          <FaCheck color="#DBF9CD" size={67} />
        </div>
        <div className="w-[83px] text-center text-[20px] font-bold text-white">
          Swap Created
        </div>
      </div>
      <div className="mt-[39px]  px-[24px] ">
        <div className="mb-[8px] text-[12px] text-white">Swap Link</div>
        <div className="mb-[8px] flex h-[40px] w-[234px] items-center justify-center rounded-[5px]  bg-white px-[10px]">
          {copiedData ? (
            <div className="text-center text-[14px] font-medium  text-secondary-purple">
              Link Copied!
            </div>
          ) : (
            <div className="flex w-full flex-row justify-between">
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
          className={`mb-[28px] flex h-[32px] w-[234px] flex-row items-center rounded-[5px]  border  border-white px-[10px] ${
            sendRecipient ? "justify-center bg-white" : "border border-white"
          }`}
        >
          {sendRecipient ? (
            <div className="text-[14px] font-medium text-secondary-purple">
              Sent!
            </div>
          ) : (
            <div className="flex w-full justify-between">
              <input
                type="text"
                placeholder="Recipient Email"
                className="focus:shadow-outline w-full appearance-none bg-transparent bg-none text-[10px] leading-tight text-white/50 focus:text-white focus:outline-none"
              />
              <button onClick={() => setSendRecipient(true)}>
                <FaTelegramPlane color="#fff" size={18} />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex w-[179px] flex-row justify-between">
            {socialMedia.map((item) => {
              return (
                <div className="flex h-[36px] w-[36px] cursor-pointer flex-row items-center justify-center rounded-[2px] bg-secondaryblack">
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

        <div className="mt-[24px] text-center text-[10px] text-tea-green">
          View on Etherscan
        </div>
      </div>
    </div>
  );
};

export default SwapCreated;
