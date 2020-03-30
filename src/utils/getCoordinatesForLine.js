const getCoordinatesForLine = (x1, y1, x2, y2) => {
  const coordinatesArray = [];
  // Define differences and error check
  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  const sx = x1 < x2 ? 1 : -1;
  const sy = y1 < y2 ? 1 : -1;
  let err = dx - dy;
  // Set first coordinates
  coordinatesArray.push({ y1, x1 });
  // Main loop
  while (!(x1 === x2 && y1 === y2)) {
    const e2 = err << 1;
    if (e2 > -dy) {
      err -= dy;
      x1 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y1 += sy;
    }
    // Set coordinates
    coordinatesArray.push({ y1, x1 });
  }
  // Return the result
  return coordinatesArray;
};

export default getCoordinatesForLine;
