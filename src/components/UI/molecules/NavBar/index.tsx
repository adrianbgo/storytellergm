import React from "react";
import styles from "./index.module.css";
import NavLink from "../../atoms/NavLink";
import Logo from "../../atoms/Logo";
const NavBar = () => {
  return (
    <nav data-testid="nav-bar" className={styles.navBar}>
      <div>
        <Logo />
      </div>
      <div>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/adventures">Adventure Writing</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/hire">Hire Me</NavLink>
        <NavLink href="/community">Community & Cons</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
