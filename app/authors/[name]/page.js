import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByAuthor } from "@/utils/doc-util";
import React from "react";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentByAuthor(docs, name);
  console.log("matchedDocs", matchedDocs);

  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default AuthorPage;
