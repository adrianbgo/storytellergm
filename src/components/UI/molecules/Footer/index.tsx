"use client";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FaMastodon,
  FaSquareTumblr,
  FaTumblr,
  FaXTwitter,
} from "react-icons/fa6";
import styles from "./index.module.css";
import Link from "next/link";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className={styles.footer} data-testid="footer">
      <div className={styles.footerColumn}>
        <h3>Follow Me on Social Media!</h3>
        <div>
          <a href="/" className={styles.socialLink}>
            <FaFacebook size={32} />
          </a>
          <a href="/" className={styles.socialLink}>
            <FaXTwitter size={32} />
          </a>
          <a href="/" className={styles.socialLink}>
            <FaInstagram size={32} />
          </a>
          <a href="/" className={styles.socialLink}>
            <FaMastodon size={32} />
          </a>
          <a href="/" className={styles.socialLink}>
            <FaSquareTumblr size={32} />
          </a>
        </div>
      </div>
      <div className={styles.footerColumn}>
        <p>{`© ${year}. All Rights Reserved.`}</p>
      </div>
      <div className={styles.footerLinks}>
        <Link href="/">Home</Link>
        <Link href="/adventures">Adventure Writing</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/hire">Hire Me!</Link>
        <Link href="/community">Cons & Community</Link>
      </div>
    </div>
  );
};

export default Footer;
