import React from "react";

interface Props {
  label: string;
  value: string;
  classname?: string;
}

function FeeLabel({ label, value, classname }: Props) {
  return (
    <div className={`flex flex-row justify-between ${classname}`}>
      <div>{label}</div>
      <div className="text-right">{value}</div>
    </div>
  );
}

export default FeeLabel;
