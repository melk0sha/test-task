const fillBucket = (canvas, x, y, fillColor) => {
  const targetColor = canvas[y - 1][x - 1];

  if (!colorsMatch(targetColor, fillColor)) {
    fillCoordinate(canvas, x - 1, y - 1, targetColor, fillColor);
  }

  return canvas;
};

const colorsMatch = (targetColor, fillColor) => {
  return targetColor === fillColor;
};

const fillCoordinate = (canvas, x, y, targetColor, fillColor) => {
  if (x > canvas[0].length - 1 || y > canvas.length - 1 || x < 0 || y < 0) {
    return;
  }

  const currentColor = canvas[y][x];

  if (colorsMatch(currentColor, targetColor)) {
    canvas[y][x] = fillColor;
    fillCoordinate(canvas, x + 1, y, targetColor, fillColor);
    fillCoordinate(canvas, x - 1, y, targetColor, fillColor);
    fillCoordinate(canvas, x, y + 1, targetColor, fillColor);
    fillCoordinate(canvas, x, y - 1, targetColor, fillColor);
  }
};

export default fillBucket;
