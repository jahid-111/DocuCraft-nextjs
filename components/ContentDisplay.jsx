import { getDocumentsContent } from "@/lib/doc";
import Link from "next/link";
import React from "react";
import Tag from "./Tag";
import ClientContentDisplay from "./ClientContentDisplay";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentsContent(id);
  // console.log("Content HTML ", documentContent.contentHtml);

  return (
    <article className=" prose dark:prose-invert">
      <h2>{documentContent.title}</h2>
      <div>
        <span> Published On : {documentContent?.date}</span> by{" "}
        <Link href={`/author/${documentContent?.author}`}>
          {documentContent?.author}
        </Link>
        under the{" "}
        <Link href={`/categories/${documentContent?.categories}`}>
          {documentContent?.category}
        </Link>{" "}
        Category
      </div>
      <div>
        {documentContent?.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag}></Tag>)}
      </div>
      <ClientContentDisplay contentHtml={documentContent.contentHtml} />
    </article>
  );
};

export default ContentDisplay;
