import React, { ReactNode } from "react";
import styles from "./Label.module.scss";

interface labelProps {
  children: ReactNode;
  text?: string;
  error?: boolean;
}

const Label = ({ children, text, error }: labelProps) => {
  return (
    <label className={styles.label}>
      {children}
      <span className={`${styles.span} ${error ? styles.error : ""} `}>
        {text}
      </span>
    </label>
  );
};
export default Label;
