import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  type?: "yellow" | "disabled";
  onClick?: () => void;
}

const Button = ({ children, type, onClick }: ButtonProps) => {
  const btnType = type || "yellow";
  return (
    <button className={`${styles.button} ${styles[btnType]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
