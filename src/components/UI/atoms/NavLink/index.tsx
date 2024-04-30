import React, { PropsWithChildren } from "react";
import styles from "./index.module.css";
import Link from "next/link";

interface INavLink {
  href: string;
}

const NavLink: React.FC<PropsWithChildren<INavLink>> = ({ href, children }) => {
  return (
    <Link href={href} data-testid="nav-link" className={styles.navLink}>
      {children}
    </Link>
  );
};

export default NavLink;
