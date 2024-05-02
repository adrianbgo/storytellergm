import React from "react";
import ThreeColumn from "../../templates/ThreeColumn";
import { KofiButton } from "react-kofi-button";
import styles from "./index.module.css";
import Link from "next/link";

const PromoSection = () => {
  return (
    <section data-testid="promo-section" className={styles.promoSection}>
      <KofiButton
        username="storytellergm"
        label="Support me on Ko-fi"
        backgroundColor="kofiRed"
      />
      <ThreeColumn>
        <div className={styles.promoSectionColumn}>
          <Link href="/adventures">Adventure Writing</Link>
          <p>
            I have written many adventures, developed for common systems like
            D&D 5e and Call of Cthulhu, as well as lesser knonw systems, like
            Trophy, Cthulhu Deep Green, and Dread. I have a special passion for
            the horror genre, especially cosmic and existentialist horror.
          </p>
        </div>
        <div className={styles.promoSectionColumn}>
          <Link href="/blog">Story Development & Editing</Link>
          <p>
            I have done extensive work writing and editing stories both for my
            own groups and for others. I share my process extensively on my
            blog. I hope that my blog can act not only as a documentation of my
            own process, but also as an assistance to other DMs and adventure
            writers.
          </p>
        </div>
        <div className={styles.promoSectionColumn}>
          <Link href="/community">Community & Conventions</Link>
          <p>
            I am an active member of the community for{" "}
            <a className={styles.extLink} href="https://gencon.com">
              GenCon
            </a>{" "}
            in Indianapolis. I try to bring at least one new adventure to the
            convention each year to be able to run for first-time players in a
            wide variety of systems.
          </p>
        </div>
      </ThreeColumn>
    </section>
  );
};

export default PromoSection;
