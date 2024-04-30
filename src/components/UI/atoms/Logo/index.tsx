import React from "react";
import styles from "./index.module.css";
import Script from "../Script";

const Logo = () => {
  return (
    <div data-testid="logo" className={styles.logoContainer}>
      <Script size="h1">Storyteller GM</Script>
    </div>
  );
};

export default Logo;
