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
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-secondaryblack rounded-md shadow-sm px-[7px] pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-[12px] md:text-[13px]">
              <span className="flex items-center">
                <img
                  src={selected.avatar}
                  alt="icon"
                  className="flex-shrink-0 w-[21px] md:w-[23px] object-contain rounded-full"
                />
                <span className="ml-3 block truncate text-white text-[12px] md:text-[13px]">
                  {selected.name}
                </span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
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
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-secondaryblack shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {Coins.map((coin, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 px-[7px] pr-9"
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
                            className="flex-shrink-0 object-contain w-[21px] md:w-[23px] rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate text-white text-[12px] md:text-[13px]"
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
