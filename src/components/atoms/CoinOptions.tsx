import { Dispatch, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Coins from "constants/coins";
import { CoinType } from "constants/types";
import { SetStateAction } from "react";

interface Props {
  selected: CoinType;
  setSelected: Dispatch<SetStateAction<CoinType>>;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoinOptions({ selected, setSelected }: Props) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-secondaryblack px-[7px] py-2 pr-10 text-left text-[12px] shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 md:text-[13px]">
              <span className="flex items-center">
                <img
                  src={selected.avatar}
                  alt="icon"
                  className="w-[21px] flex-shrink-0 rounded-full object-contain md:w-[23px]"
                />
                <span className="ml-3 block truncate text-[12px] text-white md:text-[13px]">
                  {selected.name}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-second-tea-green"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-secondaryblack py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {Coins.map((coin, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 px-[7px] pr-9"
                      )
                    }
                    value={coin}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={coin.avatar}
                            alt="icon"
                            className="w-[21px] flex-shrink-0 rounded-full object-contain md:w-[23px]"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate text-[12px] text-white md:text-[13px]"
                            )}
                          >
                            {coin.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active
                                ? "text-second-tea-green"
                                : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
