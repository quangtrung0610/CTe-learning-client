import React from "react";

import Schedule from "../Component/schedule/schedule";

const SchedulePage = () => {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: "100%", borderRadius: "30px" }}
    >
      <Schedule />
    </div>
  );
};

export default SchedulePage;
