import React from "react";
import styles from "./index.module.css";
import Script from "../Script";
import Link from "next/link";

const Logo = () => {
  return (
    <div data-testid="logo" className={styles.logoContainer}>
      <Link href={"/"}>
        <Script size="h3">Storyteller GM</Script>
      </Link>
    </div>
  );
};

export default Logo;
