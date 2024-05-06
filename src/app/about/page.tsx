"use client";
import React from "react";
import styles from "./page.module.css";
import NavBar from "@/components/UI/molecules/NavBar";
import AboutSection from "@/components/UI/organisms/AboutSection";
import PromoSection from "@/components/UI/organisms/PromoSection";
import ContactForm from "@/components/UI/organisms/ContactForm";
import Footer from "@/components/UI/molecules/Footer";

export default function AboutPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className={styles.aboutPage} data-testid="about-page">
        <div className={styles.content}>
          <AboutSection />
          <PromoSection />
          <ContactForm onSubmit={(data) => console.log(data)} />
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
