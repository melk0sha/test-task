import commandTypes from "../constants/commandTypes";

const commandIsValid = (commandType, width, height, x1, y1, x2, y2) => {
  if (commandType === commandTypes.CANVAS) {
    return true;
  }

  return (
    x1 <= width &&
    (x2 <= width || commandType === commandTypes.BUCKETFILL) &&
    y1 <= height &&
    (y2 <= height || commandType === commandTypes.BUCKETFILL) &&
    x1 >= 0 &&
    (x2 >= 0 || commandType === commandTypes.BUCKETFILL) &&
    y1 >= 0 &&
    (y2 >= 0 || commandType === commandTypes.BUCKETFILL)
  );
};

export default commandIsValid;
