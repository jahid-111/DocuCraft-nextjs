"use client";

import {
  getDocumentByAuthor,
  getDocumentByCategory,
  getDocumentByTag,
} from "@/utils/doc-util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sidebar = ({ docs }) => {
  const pathName = usePathname();

  const [rootNode, setRootNode] = useState([]);
  const [nonRootsNode, setNonRootNode] = useState({});

  useEffect(() => {
    let matchDocs = docs;

    if (pathName.includes("/tag")) {
      const tag = pathName.split("/")[2];
      matchDocs = getDocumentByTag(docs, tag);
      console.log(matchDocs);
    } else if (pathName.includes("author")) {
      const author = pathName.split("/")[2];
      matchDocs = getDocumentByAuthor(docs, author);
    } else if (pathName.includes("/categories")) {
      const categories = pathName.split("/")[2];
      matchDocs = getDocumentByCategory(docs, categories);
    }

    const roots = matchDocs.filter((doc) => !doc.parent); // Only null parents
    const nonRoots = matchDocs
      .filter((doc) => doc.parent)
      .reduce((acc, doc) => {
        const parent = doc.parent;
        if (!acc[parent]) {
          acc[parent] = [];
        }
        acc[parent].push(doc);
        return acc;
      }, {});

    const nonRootsKeys = Reflect.ownKeys(nonRoots);
    nonRootsKeys.forEach((key) => {
      const foundInRoots = roots.find((root) => root.id === key);
      if (!foundInRoots) {
        const foundInRoots = docs.find((doc) => doc.id === key);
        roots.push(foundInRoots);
      }
    });
    roots.sort((a, b) => {
      if (a.order < b.order) {
        return -1;
      }
      if (a.order > b.order) {
        return 1;
      }
      return 0;
    });

    setRootNode(roots);
    setNonRootNode(nonRoots);
  }, [docs, pathName]);

  return (
    <div className="sidebar">
      <nav className="hidden lg:mt-10 lg:block">
        <ul>
          <div className="relative mt-3 pl-2">
            <div className="absolute inset-x-4 top-0 bg-zinc-800/25 will-change-transform dark:bg-white/25"></div>
            <div className="absolute inset-y-0 left-2 h-6 w-px bg-zinc-900/10 dark:bg-white/5"></div>
            <div className="absolute inset-y-0 left-2 h-6 w-px bg-emerald-500"></div>
            <ul role="list" className="border-1 border-t-red-100">
              {rootNode.map((root) => (
                <li key={root.id} className="relative">
                  <Link
                    href={`/docs/${root.id}`}
                    className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <span className="truncate">{root.title}</span>
                  </Link>
                  {nonRootsNode[root.id] && (
                    <ul role="list" className="border-1 border-t-red-100">
                      {nonRootsNode[root.id].map((subRoot) => (
                        <li key={subRoot.id}>
                          <Link
                            href={`/docs/${root.id}/${subRoot.id}`}
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
