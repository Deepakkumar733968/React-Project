import React from "react";
import "./style.css";

interface IButton {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const StarzButton = ({ value, className, style, onClick }: IButton) => (
  <button className={className} style={style} onClick={onClick}>
    {value}
  </button>
);

export default StarzButton;
