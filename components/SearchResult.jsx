import Link from "next/link";
import React from "react";

const SearchResult = ({ results, terms, closeSearchResult }) => {
  // console.log(results)
  return (
    <div class="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
      <p className="text-lg">
        Showing Result for
        <span>{terms}</span>
      </p>
      <ul className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
        {results?.map((result) => (
          <li key={result.id}>
            <Link
              href={`/docs/${result.id}`}
              onClick={(e) => closeSearchResult(e)}
              className="transition-all hover:text-emerald-600"
            >
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
