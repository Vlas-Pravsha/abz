import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "secondary" | "default";
}
const Button = ({ children, type }: ButtonProps) => {
  const btnType = type || "default";

  return (
    <div className={s.wrapper}>
      <button className={`${s[btnType]}`}>{children}</button>
    </div>
  );
};

export default Button;
