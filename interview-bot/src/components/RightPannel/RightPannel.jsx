import React from "react";
import styles from "./RightPannel.module.css";
import { useSelector } from "react-redux";

const RightPanel = () => {
    const audioList = useSelector((state) => state.transcript.audioList);
    console.log("Audio List:", audioList);
    return(
  <div className={styles.rightPanel}>
    <div className={styles.headerSection}>
      <h4 className={styles.title}>Interview Chat</h4>
      <p className={styles.questionNumber}>Q1/10</p>
      <div className={styles.progressBarBg}>
        <div className={styles.progressBarFill}></div>
      </div>
    </div>
    {!audioList?.length > 0 ? <div className={styles.chatPlaceholder}>
      <img
        src="https://img.icons8.com/color/48/000000/speech-bubble--v1.png"
        alt="chat"
      />
      <p>Interview conversation will appear here.</p>
      <p className={styles.startText}>Start the interview to begin</p>
       
    </div>
    : <p>{audioList.toString()}</p>}
  </div>
)};

export default RightPanel;
