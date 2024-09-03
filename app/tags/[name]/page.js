import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByTag } from "@/utils/doc-util";
import React from "react";

const TagsPage = ({ params: { name } }) => {
  const docs = getDocuments();

  const matchedDocs = getDocumentByTag(docs, name);

  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default TagsPage;
