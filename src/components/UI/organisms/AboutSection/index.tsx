import React from "react";
import TwoColumn from "../../templates/TwoColumn";
import Image from "next/image";
import styles from "./index.module.css";

const AboutSection = () => {
  return (
    <section data-testid="about-section" className={styles.aboutSection}>
      <h3>About Me</h3>
      <TwoColumn>
        <Image
          src="/images/adrian-bauer-headshot.jpg"
          alt="Adrian Bauer"
          width={1000}
          height={1000}
          className={styles.headshot}
          loading="eager"
        />
        <div className={styles.copyText}>
          <p>
            {`My name is Adrian Bauer and I have been involved in the TTRPG scene since 2015. I could put my whole life story on here, but that may bore you, so I'll give you the brief summary.`}
          </p>
          <p>
            {`You may know me from the numerous campaigns and one-shots that I've run at conventions, or you may know me from playing in a scenario that I've written. I like to do a lot of charity work on top of my games, so be sure to reach out if that's something you're interested in being involved with.`}
          </p>
          <p>
            {`Born and raised in Ohio, I moved to Rochester for college, where I got heavily involved in running TTRPG games. It wasn't until a year into GMing D&D and Call of Cthulhu games that I actualy got the opportunity to be a player in a game. I have always worked to create immersive and roleplay-heavy RPG sessions which allow players to explore not only their players, but their emotions in a safe and supportive environment.`}
          </p>
          <p>
            {`Aside from gaming, I have a passion for music production and performance, and many of the pieces of music played in the background of my games are either fully composed or arranged by me. I am a software developer by trade, so I work to integrate technology seamlessly into my games without encroaching upon the immersive nature of playing an RPG. I have crafted custom tools that work seamlessly on mobile devices and laptops that allow me to engage with players in a way that is sleek yet immersive.`}
          </p>
        </div>
      </TwoColumn>
    </section>
  );
};

export default AboutSection;
