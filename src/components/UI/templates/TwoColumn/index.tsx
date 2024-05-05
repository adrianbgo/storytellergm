import React, { PropsWithChildren } from "react";
import styles from "./index.module.css";

const TwoColumn: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.twoColumn} data-testid="two-column">
      <div className={styles.contain}>{children}</div>
    </div>
  );
};

export default TwoColumn;
