import React from "react";
import Select from "react-select";

const CustomSelect = ({ options, className, ...rest }) => (
  <select {...rest} className={`customSelect ${className}`}>
    {options.map((ele, key) => (
      <option key={key} value={ele.value} disabled={ele.disabled}>
        {ele.name}
      </option>
    ))}
  </select>
);

export const CustomSelectWithLabel = ({
  label,
  className,
  name,
  options,
  ...rest
}) => (
  <div className={`customSelectWithLabel ${className}`}>
    {label && <label htmlFor={name}>{label}</label>}
    <select {...rest} name={name}>
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
