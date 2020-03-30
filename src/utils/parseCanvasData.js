const parseCanvasData = (canvasData) => {
  const parsedCanvasData = canvasData.split("\n").map((command, idx) => {
    command = command.split(" ");
    const commandType = command.shift();
    const commandValues = [...command];

    return { id: idx + 10, type: commandType, values: commandValues };
  });

  return parsedCanvasData;
};

export default parseCanvasData;
