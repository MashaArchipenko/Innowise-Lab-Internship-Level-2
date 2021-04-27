import { useEffect,useState } from "react";
import { useCanvas } from "./CanvasContext";
import SketchPicker, { useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    clearCanvas,
    updateCanvas,
    saveCanvas,
  } = useCanvas();

  const [color, setColor] = useColor("hex", "#121212");
  const [brush, setThick] = useState(10);

  useEffect(() => {
    prepareCanvas();
  }, []);

  useEffect(() => {
    updateCanvas(color,brush);
  }, [color,brush]);

  const style = {
    width: brush + "px",
    height:brush+"px",
    background: color.hex,
    borderRadius:"50%",
  }as const;

  return (
    <>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        style={{border:"2px solid black",margin:"10px 0px"}}
      />
      <SketchPicker
        width={400}
        height={60}
        color={color}
        onChange={setColor}
        hideRGB
        hideHSB
        dark
      />
      <label>Brush Thickness</label>
      <div className="thickness" ></div>
      <input
        min="2"
        max="50"
        type="range"
        value={brush}
        onChange={(event) => {
          setThick(parseInt(event.target.value));
        }}
      />
      <div 
      style = {style}></div>
     <button className="button" onClick={clearCanvas}>Очистить</button>
     <button className="button" onClick={saveCanvas}>Сохранить</button>
      
    </>
  );
}
