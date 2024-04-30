import React, { PropsWithChildren } from "react";
import { Lugrasimo } from "next/font/google";
import styles from "./index.module.css";
const lugrasimo = Lugrasimo({ weight: "400" });

interface IScript {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "xs";
}

const Script: React.FC<PropsWithChildren<IScript>> = ({
  size = "p",
  children,
}) => {
  return (
    <div data-testid="script" className={lugrasimo.className}>
      <p className={styles[size]} data-testid="script-p">
        {children}
      </p>
    </div>
  );
};

export default Script;
