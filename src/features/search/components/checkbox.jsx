"use client";
import { useEffect, useState } from "react";
import { useSearchContext } from "../context/search_context";

export function Checkbox({ option, optionIdx, section }) {
  const { compostiteFilter, handleFilter } = useSearchContext();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(
      compostiteFilter[`${section.id}`].includes(option.value) ? true : false,
    );
  }, [checked, compostiteFilter, option.value, section.id]);

  return (
    <div className="flex items-center">
      <input
        id={`${section.id}-${optionIdx}-mobile`}
        name={`${section.id}[]`}
        defaultValue={option.value}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        onChange={(e) => {
          handleFilter(e.target.checked, section.id, option.value);
          setChecked(
            compostiteFilter[`${section.id}`].includes(option.value)
              ? true
              : false,
          );
        }}
        checked={checked}
      />
      <label
        htmlFor={`${section.id}-${optionIdx}-mobile`}
        className="ml-3 text-sm text-gray-500"
      >
        {option.label}
      </label>
    </div>
  );
}
