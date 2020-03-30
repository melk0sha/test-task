import getCoordinatesForLine from "./getCoordinatesForLine";
import lineColor from "../constants/lineColor";

const drawLine = (canvas, x1, y1, x2, y2) => {
  const coordinates = getCoordinatesForLine(+x1, +y1, +x2, +y2);

  for (let coordinate of coordinates) {
    canvas[coordinate.y1 - 1][coordinate.x1 - 1] = lineColor;
  }

  return canvas;
};

export default drawLine;
