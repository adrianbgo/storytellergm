import React, { PropsWithChildren } from "react";
import styles from "./index.module.css";

const ThreeColumn: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div data-testid="three-column" className={styles.threeColumn}>
      {children}
    </div>
  );
};

export default ThreeColumn;
