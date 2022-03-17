import React from "react";
import { Calendar, Col, Row } from "antd";

const HomeWorkspacePage = () => {
  const DemoBox = (props) => (
    <p className={`height-${props.value}`}>{props.children}</p>
  );
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = React.useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  // setInterval(updateTime, 1000);

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: "100%", borderRadius: "30px" }}
    >
      <h1>Home Workspace</h1>

      <div className="calendar--home">
        <h1 className="calendar--clock">{ctime}</h1>
        <DemoBox value={100}>
          <Calendar fullscreen={false} />
        </DemoBox>
      </div>
    </div>
  );
};

export default HomeWorkspacePage;
