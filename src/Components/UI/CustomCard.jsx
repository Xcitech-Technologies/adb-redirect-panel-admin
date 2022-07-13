import React from "react";

const CustomCard = ({ header, children, className, style }) => (
  <div className={`customCardContainer ${className || ""}`} style={style}>
    <div className="headerComponent">{header}</div>
    <div className="cardBody">{children}</div>
  </div>
);

export default CustomCard;
