import { Testimonial } from "@/types/Testimonial";
import React from "react";
import styles from "./index.module.css";
import TestimonialComponent from "../../molecules/Testimonial";

interface ITestimonialSection {
  testimonials: Testimonial[];
}

const TestimonialSection: React.FC<ITestimonialSection> = ({
  testimonials,
}) => {
  return (
    <section data-testid="testimonials" className={styles.testimonials}>
      <h3 className={styles.testimonialsTitle}>Testimonials</h3>
      {testimonials.map((t, i) => (
        <TestimonialComponent
          author={t.author}
          quote={t.quote}
          title={t.title}
          key={i}
        />
      ))}
    </section>
  );
};

export default TestimonialSection;
