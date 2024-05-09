import React from "react";
import styles from "./index.module.css";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { Testimonial } from "@/types/Testimonial";

const Testimonial: React.FC<Testimonial> = ({ author, title, quote }) => {
  return (
    <div className={styles.testimonial} data-testid="testimonial">
      <div className={styles.testimonialQuote} data-testid="quote">
        <BiSolidQuoteAltLeft size={180} />
        <p>{quote}</p>
        <BiSolidQuoteAltRight size={180} />
      </div>
      <p className={styles.testimonialAuthor} data-testid="author">
        {author}
      </p>
      <small data-testid="title" className={styles.testimonialTitle}>
        {title}
      </small>
    </div>
  );
};

export default Testimonial;
