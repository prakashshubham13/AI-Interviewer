import UserVideo from "../UserVideo/UserVideo";

const LeftPanel = () => {
  return (
    <div style={styles.videoSection}>
      <UserVideo />
      <div
        style={{
          position: "absolute",
          left: "1rem",
          right: "1rem",
          bottom: "0",
          padding: "1rem 0",
          display: "flex",
          justifyContent: "space-between",
          // background: "red"
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <div>Cam</div>
          <div>Mic</div>
          <div>Nework</div>
        </div>
        <div>
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#20c997",
              color: "white",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Next Questions
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  videoSection: {
    position: "relative",
    flex: 2,
    padding: "1rem",
    borderRadius: "0.5rem",
    // backgroundColor: "green",
  },
};

export default LeftPanel;
