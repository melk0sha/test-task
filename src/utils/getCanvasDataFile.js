import parseCanvasData from "./parseCanvasData";

const getCanvasDataFile = async (url) => {
  const response = await fetch(url);
  const canvasData = await response.text();

  return parseCanvasData(canvasData);
};

export default getCanvasDataFile;
