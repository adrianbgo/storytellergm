import React, { useState } from "react";
import styles from "./index.module.css";
import NavLink from "../../atoms/NavLink";
import Logo from "../../atoms/Logo";
import { FaBars } from "react-icons/fa6";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav data-testid="nav-bar" className={styles.navBar}>
      <div>
        <Logo />
      </div>
      <a
        href="#"
        className={styles.icon}
        onClick={() => setIsOpen(!isOpen)}
        data-testid="icon"
      >
        <FaBars />
      </a>
      <div
        className={`${styles.links} ${isOpen && styles.linksShown}`}
        data-testid="navLinks"
      >
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
