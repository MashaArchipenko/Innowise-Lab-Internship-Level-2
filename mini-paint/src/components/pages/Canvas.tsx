import { useEffect,useState } from "react";
import { useCanvas } from "./CanvasContext";
import {useDispatch,useSelector} from 'react-redux'
import SketchPicker, { useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { getImageByUserId, saveImage } from "../../store/actions/canvasActions";
import { RootState } from '../../store';
export default function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    clearCanvas,
    updateCanvas,
  } = useCanvas();

  const { user} = useSelector((state: RootState) => state.auth);
  
  const [color, setColor] = useColor("hex", "#121212");
  const [brush, setThick] = useState(10);

const dispatch = useDispatch()

  const saveCanvas=()=>
  {
    const canvas = canvasRef.current;
  
    var image = canvas
      .toDataURL("image/jpg")
      console.log(image)
      dispatch(saveImage({id:1,imageUrl:image,name:'name.jpg'},user?.id || ""))

      dispatch(getImageByUserId(user?.id || ""))
  }

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
