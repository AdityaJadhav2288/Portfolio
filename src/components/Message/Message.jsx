import React from "react";
import styles from "./Message.module.css";
import { ContactForm } from "../ContactForm/ContactForm";

export const Message = () => {
  return (
    <section className={styles.container}>
      <h2>Send a Message</h2>
      <ContactForm />
    </section>
  );
};
