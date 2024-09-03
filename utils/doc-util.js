export function getDocumentByCategory(docs, category) {

  // console.log("TTT",docs.filter((doc) => doc?.category === category))
  return docs.filter((doc) => doc.category === category);
}
export function getDocumentByAuthor(docs, author) {

  return docs.filter((doc) => encodeURI(doc.author) === author);
}
export function getDocumentByTag(docs, tag) {
  
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
}
