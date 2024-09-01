import React from "react";

const Sidebar = ({ docs }) => {
  const roots = docs.filter((doc) => !doc.parent);
  console.log(roots);

  return <div className=" ">Sidebar</div>;
};

export default Sidebar;
