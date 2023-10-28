import React, { ReactNode } from "react";
import { ChangeHandler } from "react-hook-form";
import styles from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  value?: string;
  onChange: ChangeHandler;
  name: string;
  onBlur: ChangeHandler;
  error?: boolean;
}

const Input = React.forwardRef(
  (
    { placeholder, value, onChange, name, onBlur, error }: InputProps,
    ref: React.Ref<any>
  ) => {
    return (
      <input
        ref={ref}
        onBlur={onBlur}
        name={name}
        className={`${styles.input} ${error ? styles.error : ""} `}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    );
  }
);

Input.displayName = "Input";
export default Input;
