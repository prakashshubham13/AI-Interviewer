import React, { useEffect, useRef, useState } from "react";

const InterviewPortal = () => {
  const videoRef = useRef(null);
  const aiVideoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [micAllowed, setMicAllowed] = useState(false);
  const [camAllowed, setCamAllowed] = useState(false);

  useEffect(() => {
    const getPermissions = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(mediaStream);
        setMicAllowed(true);
        setCamAllowed(true);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };
    getPermissions();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logo}><span style={{color: '#004aad'}}>We</span><span style={{color: '#808080'}}>Hire</span></div>
        <div style={styles.title}>AI Interview Platform</div>
        <div style={styles.status}>
          <button style={styles.exitBtn}>Exit</button>
          <button style={styles.readyBtn}>Ready?</button>
        </div>
      </div>

      <div style={styles.main}>
        <div style={styles.videoSection}>
          <div style={styles.videoWrapper}>
            <video ref={videoRef} autoPlay muted playsInline style={styles.video} />
            <div style={styles.timer}>00:10</div>
            <div style={styles.recording}>Recording</div>
          </div>
          <div style={styles.aiVideoWrapper}>
            <video ref={aiVideoRef} autoPlay muted playsInline style={styles.aiVideo} />
            <div style={styles.liveLabel}>Live</div>
          </div>
        </div>

        <div style={styles.chatSection}>
          <div style={styles.chatHeader}>
            Interview Chat <span style={styles.qNumber}>Q1/10</span>
          </div>
          <div style={styles.progressBarWrapper}>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}></div>
            </div>
            <span style={styles.progressPercent}>10%</span>
          </div>
          <div style={styles.chatBox}>
            <div style={styles.chatPlaceholder}>
              <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="chat icon" width="60" height="60" />
              <p>Interview conversation will appear here.</p>
              <small>Start the interview to begin</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f3f6fb'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottom: '1px solid #ddd'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  title: {
    fontSize: '18px',
    color: '#888'
  },
  status: {
    display: 'flex',
    gap: '10px'
  },
  exitBtn: {
    padding: '6px 12px',
    backgroundColor: '#eee',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  readyBtn: {
    padding: '6px 12px',
    backgroundColor: '#20c997',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer'
  },
  main: {
    display: 'flex',
    flex: 1,
    padding: '20px',
    gap: '20px'
  },
  videoSection: {
    position: 'relative',
    flex: 2,
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  videoWrapper: {
    position: 'relative'
  },
  video: {
    width: '100%',
    borderRadius: '10px',
    transform: 'scaleX(-1)' // fix mirror
  },
  timer: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#333',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '8px',
    fontSize: '14px'
  },
  recording: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#fff',
    padding: '4px 12px',
    borderRadius: '20px',
    border: '1px solid red',
    color: 'red',
    fontSize: '14px'
  },
  aiVideoWrapper: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '150px',
    height: '100px',
    backgroundColor: '#000',
    borderRadius: '10px',
    overflow: 'hidden'
  },
  aiVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  liveLabel: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: '10px',
    padding: '2px 6px',
    borderRadius: '6px'
  },
  chatSection: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  chatHeader: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '10px'
  },
  qNumber: {
    float: 'right',
    color: '#999'
  },
  progressBarWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  progressBar: {
    height: '6px',
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: '4px'
  },
  progressFill: {
    width: '10%',
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: '4px'
  },
  progressPercent: {
    fontSize: '12px',
    color: '#777'
  },
  chatBox: {
    flex: 1,
    marginTop: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  chatPlaceholder: {
    textAlign: 'center',
    color: '#666'
  }
};

export default InterviewPortal;
