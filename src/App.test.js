import parseCanvasData from "./utils/parseCanvasData";
import drawLine from "./utils/drawLine";
import drawRectangle from "./utils/drawRectangle";
import getCoordinatesForLine from "./utils/getCoordinatesForLine";
import fillBucket from "./utils/fillBucket";
import commandIsValid from "./utils/commandIsValid";

const clearCanvas = () =>
  Array(20)
    .fill("")
    .map(() => Array(30).fill(""));

let testCanvas = clearCanvas();

const testCoordinates = {
  x1: 1,
  y1: 10,
  x2: 5,
  y2: 15
};

const canvasDataToTest = {
  data1: `C 20 4
  L 1 2 6 2
  L 6 3 6 4
  R 16 1 20 3
  B 10 3 o`,
  data2: `C 30 51
  L 1 32 6 2
  L 9 3 19 4
  R 20 1 4 3
  B 5 1 k`,
  data3: `C 100 100
  L 10 32 3 23
  L 99 3 26 74
  R 35 5 2 75
  B 64 76 k`
};

describe("utils parseCanvasData testing", () => {
  test("method returns defined array", () => {
    expect(parseCanvasData(canvasDataToTest.data1)).toBeDefined();
  });

  test("method returns array of objects with id, type and values by passing canvasDataToTest1", () => {
    expect(parseCanvasData(canvasDataToTest.data1)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          type: expect.any(String),
          values: expect.any(Array)
        })
      ])
    );
  });

  test("method returns array of objects with id, type and values by passing canvasDataToTest2", () => {
    expect(parseCanvasData(canvasDataToTest.data2)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          type: expect.any(String),
          values: expect.any(Array)
        })
      ])
    );
  });

  test("method returns array of objects with id, type and values by passing canvasDataToTest3", () => {
    expect(parseCanvasData(canvasDataToTest.data3)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          type: expect.any(String),
          values: expect.any(Array)
        })
      ])
    );
  });
});

describe("utils drawLine testing", () => {
  test("method returns defined canvas array", () => {
    expect(
      drawLine(
        testCanvas,
        testCoordinates.x1,
        testCoordinates.y1,
        testCoordinates.x2,
        testCoordinates.y2
      )
    ).toBeDefined();
  });

  test("method returns another array", () => {
    expect(
      drawLine(
        testCanvas,
        testCoordinates.x1,
        testCoordinates.y1,
        testCoordinates.x2,
        testCoordinates.y2
      )
    ).not.toBe(expect.arrayContaining(clearCanvas()));
  });
});

testCanvas = clearCanvas();

describe("utils drawRectangle testing", () => {
  test("method returns defined canvas array", () => {
    expect(
      drawRectangle(
        testCanvas,
        testCoordinates.x1,
        testCoordinates.y1,
        testCoordinates.x2,
        testCoordinates.y2
      )
    ).toBeDefined();
  });

  test("method returns another array", () => {
    expect(
      drawRectangle(
        testCanvas,
        testCoordinates.x1,
        testCoordinates.y1,
        testCoordinates.x2,
        testCoordinates.y2
      )
    ).not.toEqual(clearCanvas());
  });
});

describe("utils drawRectangle testing", () => {
  test("method returns defined canvas array", () => {
    expect(
      drawRectangle(
        testCanvas,
        testCoordinates.x1,
        testCoordinates.y1,
        testCoordinates.x2,
        testCoordinates.y2
      )
    ).toBeDefined();
  });

  test("method returns another array", () => {
    expect(
      drawRectangle(
        testCanvas,
        testCoordinates.x1,
        testCoordinates.y1,
        testCoordinates.x2,
        testCoordinates.y2
      )
    ).not.toEqual(clearCanvas());
  });
});

describe("utils getCoordinatesForLine testing", () => {
  test("method returns defined array of coordinates", () => {
    expect(
      getCoordinatesForLine(
        testCoordinates.x1,
        testCoordinates.y1,
        testCoordinates.x2,
        testCoordinates.y2
      )
    ).toBeDefined();
  });

  test("method returns only array", () => {
    expect(
      Array.isArray(
        getCoordinatesForLine(
          testCoordinates.x1,
          testCoordinates.y1,
          testCoordinates.x2,
          testCoordinates.y2
        )
      )
    );
  });

  test("method returns array of objects with x1, y1 fields", () => {
    expect(
      getCoordinatesForLine(
        testCoordinates.x1,
        testCoordinates.y1,
        testCoordinates.x2,
        testCoordinates.y2
      )
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          x1: expect.any(Number),
          y1: expect.any(Number)
        })
      ])
    );
  });
});

testCanvas = clearCanvas();

describe("utils fillBucket testing", () => {
  test("method returns defined canvas array", () => {
    expect(
      fillBucket(testCanvas, testCoordinates.x1, testCoordinates.y1, "c")
    ).toBeDefined();
  });

  test("method returns another array", () => {
    expect(
      fillBucket(testCanvas, testCoordinates.x1, testCoordinates.y1, "5")
    ).not.toEqual(clearCanvas());
  });
});

describe("utils commandIsValid testing", () => {
  test("method returns boolean type", () => {
    expect(typeof commandIsValid("L", 50, 10, 20, 3, 40, 6)).toBe("boolean");
  });

  test("method returns true for valid L command", () => {
    expect(commandIsValid("L", 50, 10, 20, 3, 40, 6)).toBeTruthy();
  });

  test("method returns false for invalid L command", () => {
    expect(commandIsValid("L", 10, 10, 20, 3, 40, 6)).toBeFalsy();
  });

  test("method returns true for valid R command", () => {
    expect(commandIsValid("R", 50, 10, 20, 3, 40, 6)).toBeTruthy();
  });

  test("method returns false for invalid R command", () => {
    expect(commandIsValid("R", 10, 10, 20, 3, 40, 6)).toBeFalsy();
  });

  test("method returns true for valid B command", () => {
    expect(commandIsValid("B", 50, 10, 20, 5, "!")).toBeTruthy();
  });

  test("method returns false for invalid B command", () => {
    expect(commandIsValid("B", 0, 10, 20, 5, "m")).toBeFalsy();
  });
});
