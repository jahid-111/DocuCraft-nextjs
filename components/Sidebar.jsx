//   const nonRoots = Object.groupBy(
//     docs.filter((doc) => doc.parent),
//     ({ parent }) => parent
//   );
// ---------------------------   Not available in my Node
import Link from "next/link";
import React from "react";

const Sidebar = ({ docs }) => {
  const roots = docs.filter((doc) => !doc.parent); // Only null
  //   console.log(roots);

  const nonRoots = docs
    .filter((doc) => doc.parent)
    .reduce((acc, doc) => {
      const parent = doc.parent;
      if (!acc[parent]) {
        acc[parent] = [];
      }
      acc[parent].push(doc);
      return acc;
    }, {});

  //   console.log(nonRoots);

  return (
    <div className="sidebar">
      <nav className="hidden lg:mt-10 lg:block">
        <ul>
          <div className="relative mt-3 pl-2">
            <div className="absolute inset-x-4 top-0 bg-zinc-800/2 5 will-change-transform dark-bg-white/2.5"></div>
            <div className="absolute inset-y-0 left-2 h-6  w-px  bg-zinc-900/10 dark:bg-white/5"></div>
            <div className="absolute inset-y-0 left-2 h-6  w-px bg-emerald-500"></div>
            <ul role="list" className=" border-1 border-t-red-100">
              {roots.map((rootNode) => (
                <li key={rootNode.id} className=" relative">
                  <Link
                    href={`/docs/${rootNode.id}`}
                    className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <span className="  truncate">{rootNode.title}</span>
                  </Link>
                  {nonRoots[rootNode.id] && (
                    <ul role="list" className="border-1 border-t-red-100">
                      {nonRoots[rootNode.id].map((subRoot) => (
                        <li key={subRoot.id}>
                          <Link
                            href={`/docs/${rootNode.id}/${subRoot.id}`}
                            className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                          >
                            <span className="truncate">{subRoot.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
