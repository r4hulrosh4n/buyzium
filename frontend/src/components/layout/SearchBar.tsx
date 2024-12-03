"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import SearchIcon from "@/assets/icons/SearchIcon";
import CancleIcon from "@/assets/icons/CancleIcon";

const history = [
  {
    id: 1,
    label: "Asus Vivobook",
    link: "asus-vivobook",
  },
  {
    id: 2,
    label: "iPhone 12",
    link: "iphone-12",
  },
  {
    id: 3,
    label: "Samsung Galaxy S21",
    link: "samsung-galaxy-s21",
  },
];

const HistoryByCategory = [
  {
    label: "Laptop",
    itemsSearched: 7,
  },
  {
    label: "Smartphone",
    itemsSearched: 12,
  },
  {
    label: "Headphones",
    itemsSearched: 5,
  },
  {
    label: "Monitor",
    itemsSearched: 3,
  },
];

const SearchSuggestions = [
  {
    id: 1,
    suggestion: "Wireless headphones",
  },
  {
    id: 2,
    suggestion: "Smartphone cases",
  },
  {
    id: 3,
    suggestion: "Laptop stand",
  },
  {
    id: 4,
    suggestion: "Gaming mouse",
  },
  {
    id: 5,
    suggestion: "Bluetooth speakers",
  },
];

type Props = {};

const SearchBar = (props: Props) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchChange = (e) => {
    setSearchValue((prev) => e.target.value);

    if (e.target.value) {
      setSearchResults(SearchSuggestions);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.addEventListener("click", closeSearch);
    } else {
      document.removeEventListener("click", closeSearch);
    }

    return () => {
      document.removeEventListener("click", closeSearch);
    };
  }, [showSearch]);

  const closeSearch = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSearch(false);
    }
  };

  return (
    <div
      ref={searchRef}
      onClick={toggleSearch}
      className="relative flex bg-secondary rounded py-2"
    >
      <input
        onChange={handleSearchChange}
        className="px-4 w-60 placeholder:text-xs text-xs outline-none bg-secondary"
        placeholder="What are you looking for?"
      />
      <span className="px-4">
        <SearchIcon className="" />
      </span>

      {showSearch && (
        <div className="absolute px-4 py-2 bg-white rounded-b w-full z-50 top-10 right-0 border-text1/10 border-b-2 border-x-2">
          {searchValue === "" ? (
            <div className="flex flex-col gap-2 overflow-hidden">
              <div className="flex gap-4 overflow-scroll">
                {HistoryByCategory.map((item) => (
                  <div
                    key={item.label}
                    className="border-[1px] rounded flex flex-col gap-px"
                  >
                    <div className="min-w-20 h-12 bg-pink-300"></div>
                    <p className="text-xs font-normal px-1">{item.label}</p>
                    <p className="text-xs text-text1 px-1">
                      {item.itemsSearched} items
                    </p>
                  </div>
                ))}
              </div>
              <ul className="flex flex-col gap-2">
                {history.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <a href="/" className="text-xs font-medium w-full mr-auto">
                      {item.label}
                    </a>
                    <button>
                      <CancleIcon className="p-0 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className="flex flex-col gap-2">
              {searchResults.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <SearchIcon className="p-0 w-4" />
                  <a href="/" className="text-xs font-medium w-full">
                    {item.suggestion}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
