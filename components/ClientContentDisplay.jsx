"use client";

import { useEffect, useState } from "react";

const ClientContentDisplay = ({ contentHtml, params }) => {
  console.log(params); // Logging params for debugging

  const [modifiedHtml, setModifiedHtml] = useState(contentHtml);

  useEffect(() => {
    // Create a temporary DOM element
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = contentHtml;

    // Get all <a> elements
    const allLinks = tempDiv.querySelectorAll("a");

    allLinks.forEach((link) => {
      // Modify the href attribute dynamically
      const currentHref = link.getAttribute("href");
      // Example modification using `params` (if needed)
      const newHref = `/docs${currentHref}`;
      link.setAttribute("href", newHref);

      // Optional: Log the new href
      //   console.log("Updated Link URL:", newHref);
    });

    // Update the component state with the modified HTML
    setModifiedHtml(tempDiv.innerHTML);
  }, [contentHtml]);

  return (
    <div className="lead" dangerouslySetInnerHTML={{ __html: modifiedHtml }} />
  );
};

export default ClientContentDisplay;
