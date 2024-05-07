import React from "react";
import ImageWrapper from "../../templates/ImageWrapper";
import styles from "./index.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection} data-testid="heroSection">
      <ImageWrapper
        src="/images/dummy_600x400_ffffff_cccccc.png"
        alt="Hero Image"
      >
        <small>Bringing You the Best</small>
        <h1>Tabletop Roleplaying Games</h1>
      </ImageWrapper>
    </div>
  );
};

export default HeroSection;
