import React from "react";

const CustomCard = ({ header, body }) => (
  <div className="customCardContainer">
    <div className="headerComponent">{header}</div>
    <div className="cardBody">{body}</div>
  </div>
);

export default CustomCard;
