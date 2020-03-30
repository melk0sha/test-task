import React from "react";
import drawLine from "../../utils/drawLine";
import drawRectangle from "../../utils/drawRectangle";
import fillBucket from "../../utils/fillBucket";
import commandIsValid from "../../utils/commandIsValid";
import commandTypes from "../../constants/commandTypes";
import "./index.scss";

const Canvas = ({ canvas, canvasCommandData }) => {
  const [x1, y1, x2, y2] = canvasCommandData.values;
  if (
    !commandIsValid(
      canvasCommandData.type,
      canvas[0].length,
      canvas.length,
      x1,
      y1,
      x2,
      y2
    )
  ) {
    return (
      <div className="error-validation">Error! Please check your commands</div>
    );
  }
  switch (canvasCommandData.type) {
    case commandTypes.LINE:
      canvas = drawLine(canvas, x1, y1, x2, y2);
      break;
    case commandTypes.RECTANGLE:
      canvas = drawRectangle(canvas, x1, y1, x2, y2);
      break;
    case commandTypes.BUCKETFILL:
      canvas = fillBucket(canvas, x1, y1, x2);
      break;
    default:
      break;
  }

  return (
    <div className="canvas-chunk">
      {canvas.map((canvasRow, rowIndex) => (
        <div key={rowIndex} className="canvas-row">
          {canvasRow.map((canvasCol, colIndex) => (
            <span key={colIndex} className="canvas-cell">
              {canvasCol}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
