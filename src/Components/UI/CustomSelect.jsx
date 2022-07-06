import React from "react";

const CustomSelect = ({ options, ...rest }) => (
  <select {...rest} className="customSelect">
    {options.map((ele, key) => (
      <option key={key} value={ele.value}>
        {ele.name}
      </option>
    ))}
  </select>
);

export default CustomSelect;
