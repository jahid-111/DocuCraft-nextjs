import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByCategory } from "@/utils/doc-util";
import React from "react";

const CategoriesPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentByCategory(docs, name);
  return (<ContentDisplay id={matchedDocs[0].id} />);
};

export default CategoriesPage;
