import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aditya</h1>
        <p className={styles.description}>
  I'm an aspiring Full-Stack Developer from Pune, skilled in the MERN stack. I’ve built dynamic, user-friendly web apps like a Domino’s Clone and a personal portfolio site. Passionate about clean code and continuous learning.
</p>

        <a href="mailto:adityajadhav121248@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/man.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
