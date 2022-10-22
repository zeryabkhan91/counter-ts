import React from "react";
import { SelectProps } from "../../types";
import "./select.css"
const availableOptions = [
  {
    label: "Increase by 2",
    value: 2,
  },
  {
    label: "Increase by 3",
    value: 3,
  },
];

interface EventTarget {
  value: string;
}

interface SyntheticEvent {
  target: EventTarget;
}

function Select({ value, onChange }: SelectProps) {
  return (
    <select value={value} onChange={(e: SyntheticEvent) => onChange(Number(e.target.value))}>
      <>
        <option value="1">Increase by 1</option>
        {availableOptions.map((opt, index) => (
          <option key={index} value={opt.value}>{opt.label}</option>
        ))}
      </>
    </select>
  );
}

export default Select;
