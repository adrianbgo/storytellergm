import React from "react";
import styles from "./page.module.css";
import HeroSection from "@/components/UI/organisms/HeroSection";

const HomePage = () => {
  return (
    <div data-testid="homePage">
      <HeroSection />
    </div>
  );
};

export default HomePage;
