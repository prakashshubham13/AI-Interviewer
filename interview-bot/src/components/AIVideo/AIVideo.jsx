import React, { useRef, useEffect } from "react";
import styles from "./AIVideo.module.css";

const AIVideo = () => {
  const aiVideoRef = useRef(null);

  useEffect(() => {
    // You could set a dummy source or AI stream here
    // For now it remains blank/muted
  }, []);

  return (
    <div className={styles.aiVideoWrapper}>
      <video
        ref={aiVideoRef}
        autoPlay
        muted
        playsInline
        className={styles.aiVideo}
      />
      <div className={styles.liveLabel}>Live</div>
    </div>
  );
};

export default AIVideo;
