import React, { PropsWithChildren } from "react";
import styles from "./index.module.css";

const TwoColumn: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div data-testid="two-column" className={styles.twoColumn}>
      {children}
    </div>
  );
};

export default TwoColumn;
