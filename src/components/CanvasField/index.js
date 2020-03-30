import React, { Component } from "react";
import Canvas from "../Canvas";
import commandTypes from "../../constants/commandTypes";
import "./index.scss";

class CanvasField extends Component {
  render() {
    const { canvasData } = this.props;
    const [canvasWidth, canvasHeight] =
      commandTypes.CANVAS === canvasData[0].type
        ? canvasData[0].values
        : [0, 0];
    const canvas =
      canvasWidth !== 0 || canvasHeight !== 0
        ? Array(+canvasHeight)
            .fill("")
            .map(() => Array(+canvasWidth).fill(""))
        : null;

    return (
      <div className="canvas-field">
        {canvas ? (
          canvasData.map((canvasCommandData) => (
            <Canvas
              key={canvasCommandData.id}
              canvas={canvas}
              canvasCommandData={canvasCommandData}
            />
          ))
        ) : (
          <p className="error">Please create canvas size first</p>
        )}
      </div>
    );
  }
}

export default CanvasField;
