"use client";

import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";
import React, { useState } from "react";
import SearchResult from "./SearchResult";
import { useRouter } from "next/navigation";

const Search = ({ docs }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const router = useRouter();

  function handleChange(e) {
    const value = e.target.value;
    setSearchTerms(value);
    doSearch(value);
  }

  const doSearch = useDebounce((searchTerms) => {
    const found = docs.filter((doc) => {
      return doc.title.includes(searchTerms);
    });
    console.log(found);
    setSearchResult(found);
  }, 500);

  function closeSearchResult(e) {
    e.preventDefault();
    router.push(e.target.href);
    setSearchTerms("");
  }

  return (
    <div className="lg:block lg:max-w-md lg:flex-auto">
      <button className="focus:[&:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex">
        <input
          onChange={handleChange}
          value={searchTerms}
          className="flex-1 focus:border-none focus:outline-none"
          type="text"
          name="search"
          placeholder="Search Data"
          id=""
        />
        <Image src="/search.svg" alt="search" width={50} height={50}></Image>
      </button>
      {searchTerms && searchTerms.trim().length > 0 && (
        <SearchResult
          results={searchResult}
          terms={searchTerms}
          closeSearchResult={closeSearchResult}
        />
      )}
    </div>
  );
};

export default Search;
