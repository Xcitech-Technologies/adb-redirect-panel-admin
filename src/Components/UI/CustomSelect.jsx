import React from "react";
import Select from "react-select";

const CustomSelect = ({ options, ...rest }) => (
  <select {...rest} className="customSelect">
    {options.map((ele, key) => (
      <option key={key} value={ele.value}>
        {ele.name}
      </option>
    ))}
  </select>
);

export const CustomSelectWithLabel = ({ label, name, options, ...rest }) => (
  <div className="customSelectWithLabel">
    {label && <label htmlFor={name}>{label}</label>}
    <select {...rest}>
      {options.map((ele, key) => (
        <option key={key} value={ele.value} disabled={ele.disabled}>
          {ele.name}
        </option>
      ))}
    </select>
  </div>
);

export const CustomMultiSelect = ({ options, ...rest }) => (
  <Select
    options={options}
    {...rest}
    className="custom-select"
    classNamePrefix="custom-select"
  />
);

export const CustomMultiSelectWithLabel = ({
  label,
  name,
  options,
  ...rest
}) => (
  <div className="customMultiSelectWithLabel">
    {label && <label htmlFor={name}>{label}</label>}
    <Select
      options={options}
      {...rest}
      className="multi-select"
      classNamePrefix="multi-select"
    />
  </div>
);

export default CustomSelect;
