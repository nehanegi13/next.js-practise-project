import React from "react";

const Layout = ({ children, info }) => {
  return (
    <div className="flex">
      {children}
      {info}
    </div>
  );
};

export default Layout;
