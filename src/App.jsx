import React from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Skills } from "./components/Experience/Skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";
import { Message } from "./components/Message/Message";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
