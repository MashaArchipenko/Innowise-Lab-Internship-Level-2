import CanvasDraw from "react-canvas-draw";
import { useState } from "react";

function Diagram() {
  const [canvas, setBrush] = useState("#00008B");
  const [brush, setThick] = useState(10);
  const style = {
    width: brush + "px",
    background: canvas,
    marginLeft: "50%",
  };

  return (
    <div className="container">
      <CanvasDraw
        ref={(canvasDraw) => {
          window.modify = canvasDraw;
        }}
        brushColor={canvas}
        brushRadius={brush}
        canvasHeight="50vh"
        hideGrid={true}
        lazyRadius= {0}
        canvasWidth="80vw"
      />
      {/* <button
        onClick={() => {
          setBrush("#7F1D1D");
        }}
      >
        color
      </button> */}
      <button
        onClick={() => {
          window.modify.undo();
        }}
      >
        UNDO
      </button>
      <button
        onClick={() => {
          window.modify.clear();
        }}
      >
        CLEAR
      </button>
      <button
        onClick={() => {
          /*this.saveableCanvas.getSaveData() */
          const d = window.modify.canvasContainer.children[1].toDataURL();
          const w = window.open("about:blank", "image from canvas");
          w.document.write("<img src='" + d + "' alt='Exporting'/>");
          console.log(d);
        }}
      >
        SAVE
      </button>
      {/* <ColorPicker width={200} height={200} color={color} onChange={setColor} />
      ;
      <Palette /> */}
      <br />
      <label>Colour picker</label>
      <input
        style={{ background: { canvas } }}
        type="color"
        value={canvas}
        onChange={(event) => {
          console.log(event.target.value);
          setBrush(event.target.value);
        }}
      />

      <br />
      <label>Brush Thickness</label>
      {/* <input
        type="color"
        value={canvas}
        onChange={(event) => {
          console.log(event.target.value);
          setBrush(event.target.value);
        }}
      /> */}
      <div className="thickness" style={style}></div>
      <input
        min="2"
        max="50"
        type="range"
        onChange={(event) => {
          console.log(event.target.value);
          setThick(event.target.value);
        }}
      />
    </div>
  );
}
export default Diagram;
