import React from "react";
import "./Layout.css";

const layout = (props) => {
  return (
    <div className="Content">
      <main>{props.children}</main>
    </div>
  );
};

export default layout;
