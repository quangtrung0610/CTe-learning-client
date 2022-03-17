import { Row, Slider, Col, InputNumber } from "antd";
import React, { useState } from "react";
import Board from "../Board/Board";
import { BrushPreview } from "../BrushPreview";
import "./Container.scss";

const ContainerTeamwork = () => {
  const [SelectColor, setSelectColor] = useState("black");
  const [selcectSize, setselcectSize] = useState("5");
  const handleClear = () => {};
  return (
    <>
      <div className="toolbar">
        <BrushPreview currentWidth={selcectSize} currentColor={SelectColor} />
        <div className="tool-section tool-section--lrg">
          <div className="tool-section">
            <small>
              <strong>Brush size</strong>
            </small>
          </div>
          <div className="tool-section">
            <input
              className="btn--color"
              type="color"
              value={SelectColor}
              onChange={(e) => {
                setSelectColor(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="tool-section">
          <Slider
            min={1}
            max={100}
            onChange={(value) => {
              setselcectSize(value);
            }}
            defaultValue={5}
          />
        </div>
      </div>

      <Board color={SelectColor} size={selcectSize}></Board>
    </>
  );
};

export default ContainerTeamwork;
