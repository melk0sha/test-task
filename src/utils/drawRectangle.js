import getCoordinatesForLine from "./getCoordinatesForLine";
import lineColor from "../constants/lineColor";

const drawRectangle = (canvas, x1, y1, x2, y2) => {
  const coordinates = getCoordinatesForRectangle(x1, y1, x2, y2);

  for (let coordinate of coordinates) {
    canvas[coordinate.y1 - 1][coordinate.x1 - 1] = lineColor;
  }

  return canvas;
};

const getCoordinatesForRectangle = (x1, y1, x2, y2) => {
  const coordinates = [];

  coordinates.push(...getCoordinatesForLine(+x1, +y1, +x2, +y1)); // top
  coordinates.push(...getCoordinatesForLine(+x2, +y1, +x2, +y2)); // right
  coordinates.push(...getCoordinatesForLine(+x1, +y2, +x2, +y2)); // bottom
  coordinates.push(...getCoordinatesForLine(+x1, +y1, +x1, +y2)); // left

  return coordinates;
};

export default drawRectangle;
