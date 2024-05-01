import React from "react";
import styles from "./index.module.css";

interface IButton {
  variant?: "primary" | "secondary";
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  variant = "primary",
  text,
  onClick,
  disabled,
}) => {
  return (
    <div
      className={`${styles.button} ${disabled ? styles.disabled : variant === "primary" ? styles.primary : styles.secondary}`}
      onClick={!disabled ? onClick : () => {}}
      data-testid={disabled ? "button-disabled" : "button"}
    >
      {text}
    </div>
  );
};

export default Button;
