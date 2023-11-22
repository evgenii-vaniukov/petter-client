"use client";
import { createContext, useContext, useState } from "react";

export const Search = createContext(null);

export function SearchProvider({ children }) {
  const [compostiteFilter, setCompositeFilter] = useState({
    adoptionStatus: [],
    type: [],
    size: [],
  });

  function handleFilter(checked, id, value) {
    if (checked) {
      setCompositeFilter({
        ...compostiteFilter,
        [id]: [...compostiteFilter[id], value],
      });
    } else {
      setCompositeFilter({
        ...compostiteFilter,
        [id]: compostiteFilter[id].filter((arrayItem) => arrayItem !== value),
      });
    }
  }
  return (
    <Search.Provider
      value={{
        compostiteFilter,
        setCompositeFilter,
        handleFilter,
      }}
    >
      {children}
    </Search.Provider>
  );
}

export function useSearchContext() {
  return useContext(Search);
}
