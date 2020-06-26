import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const loadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(68,89,106)",
      height: "100vh",
    }}
  >
    <h2 style={{ display: "block", color: "yellow", marginRight: "10px" }}>
      Loading...
    </h2>
    <ClockLoader color={"yellow"} />
  </div>
);

export default loadingSpinner;
