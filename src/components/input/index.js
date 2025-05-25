// components/Input.js
import React from "react";
import { string, func, bool, oneOf } from "prop-types";
import "./input.scss";

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  customClass = "",
  disabled = false,
  label = "",
}) => {
  // Handle checkbox specially since it uses checked prop
  const inputProps = {
    type,
    name,
    disabled,
    className: `input ${customClass}`,
    onChange,
    ...(type === "checkbox" ? { checked: value === "active" } : { value }),
  };

  return (
    <label className={`input-container`}>
      {label && <span className="input-label">{label}</span>}
      <input {...inputProps} />
    </label>
  );
};

Input.propTypes = {
  type: oneOf(["text", "date", "checkbox", "number", "email"]),
  name: string.isRequired,
  value: string,
  onChange: func.isRequired,
  customClass: string,
  disabled: bool,
  label: string,
};

Input.defaultProps = {
  type: "text",
  value: "",
  customClass: "",
  disabled: false,
  label: "",
};

export default Input;
