import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:adityajadhav121248@gmail.com">adityajadhav121248@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/aditya-jadhav-01b972273" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/aditya-jadhav-01b972273
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/AdityaJadhav2288" target="_blank" rel="noopener noreferrer">
            github.com/AdityaJadhav2288
          </a>
        </li>
      </ul>
    </footer>
  );
};
