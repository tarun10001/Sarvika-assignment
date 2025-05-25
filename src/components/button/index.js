import React from "react";
import "./button.scss";
import { string, element, func, bool } from "prop-types";

const Button = ({
  text,
  icon,
  customClass,
  onClick,
  disabled,
  iconPosition = "left",
}) => {
  return (
    <button
      className={`btn ${customClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </button>
  );
};

// Default props
Button.defaultProps = {
  text: "Button",
  icon: null,
  customClass: "",
  onClick: () => {},
  disabled: false,
  iconPosition: "left",
};

// Prop type validation
Button.propTypes = {
  text: string,
  icon: element,
  customClass: string,
  onClick: func,
  disabled: bool,
  iconPosition: string,
};

export default Button;
