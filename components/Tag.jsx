import Link from "next/link";
import React from "react";

const Tag = ({ tag }) => {
  return (
    <Link
      href={`/tags/${tag}`}
      key={tag}
      className=" bg-gray-200 p-1 rounded-md mr-2 text-sm"
    >
      {"-> "}
      {tag}
    </Link>
  );
};

export default Tag;
