import React from "react";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.header}>
    <div className={styles.headerDetails}>
      <div className={styles.headerDetailsContainer}>
        <img
          src="https://img.icons8.com/color/48/000000/interview.png"
          alt="Interview Icon"
          className={styles.icon}
        />
        <div className={styles.verticalBar}></div>
        <div className={styles.headerText}>
          <h1 className={styles.title}>AI Interview Platform</h1>
          <p className={styles.subtitle}>AI-Powered Interview Suite</p>
        </div>
      </div>
    </div>
    <div className={styles.options}>
      <div className={styles.btnConatiner}>
        <button className={`${styles.btn} ${styles.whiteBtn}`}>Exit</button>
        <button className={`${styles.btn} ${styles.greenBtn}`}>Ready?</button>
      </div>
    </div>
  </div>
);

export default Header;
