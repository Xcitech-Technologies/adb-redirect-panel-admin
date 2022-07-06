import React from "react";

const CustomCard = ({ header, children, className }) => (
  <div className={`customCardContainer ${className || ""}`}>
    <div className="headerComponent">{header}</div>
    <div className="cardBody">{children}</div>
  </div>
);

export default CustomCard;
