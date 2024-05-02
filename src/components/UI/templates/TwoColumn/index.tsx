import React, { PropsWithChildren } from "react";
import styles from "./index.module.css";

const TwoColumn: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.twoColumn}>{children}</div>;
};

export default TwoColumn;
