import React, { Component } from "react";
import CanvasField from "./components/CanvasField";
import getCanvasDataFile from "./utils/getCanvasDataFile";
import "./index.scss";

class App extends Component {
  state = {
    canvasData: []
  };

  async componentDidMount() {
    const canvasData = [
      await getCanvasDataFile("data/input1.txt"),
      await getCanvasDataFile("data/input2.txt")
    ];

    this.setState({ canvasData });
  }

  render() {
    const { canvasData } = this.state;

    return (
      <div className="canvas-container">
        {canvasData.map((canvasDataFile, idx) =>
          canvasDataFile.length ? (
            <CanvasField key={idx} canvasData={canvasDataFile} />
          ) : (
            <div className="loading">Loading</div>
          )
        )}
      </div>
    );
  }
}

export default App;
