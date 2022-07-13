import React from "react";

const CustomTextArea = ({ rest }) => (
  <textarea {...rest} className="customTextArea" />
);

export const CustomTextAreaWithLabel = ({ label, name, ...rest }) => (
  <div className="customTextAreaWithLabel">
    {label && <label htmlFor={name}>{label}</label>}
    <textarea rows={3} {...rest} name={name} />
  </div>
);

export default CustomTextArea;
