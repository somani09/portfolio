import React from "react";
import styles from "./buttonWrapper.module.scss";
const ButtonWrapper = ({ children }) => {
  return <div className={styles.button}>{children}</div>;
};

export default ButtonWrapper;
