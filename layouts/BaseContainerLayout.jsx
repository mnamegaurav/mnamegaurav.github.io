import React from "react";

export default function BaseContainerLayout({ children }) {
  return <div className="container-fluid p-0">{children}</div>;
}
