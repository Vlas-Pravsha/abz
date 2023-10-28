import React, { ReactNode } from "react";
import styles from "./Text.module.scss";

interface TextProps {
  children: ReactNode;
}

const Text = ({ children }: TextProps) => {
  return <p className={styles.text}>{children}</p>;
};
export default Text;
