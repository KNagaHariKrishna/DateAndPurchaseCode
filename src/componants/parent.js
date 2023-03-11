import React from 'react'
import "./parent.css"
import { useState } from "react"
import Child from './child'

export default function Parent() {
  const chDev=<div className='child'></div>
// const [AddChild, setAddChild] = useState()
const [chArr, setchArr] = useState([])
const handleAdd=()=>{
  setchArr([chDev,...chArr])
}
let renderList
const handleDel=()=>{
  renderList=chArr.slice(0,chArr.length-1)
  setchArr(renderList)
}
renderList= chArr.map((item, index) => <div key={index}>{item}</div>);
return (
    <>
    <div className='parent'>
    {renderList}
    </div>
   
    <button>ChangeColor</button>
    <button onClick={handleAdd}>AddChild</button>
    <button onClick={handleDel}>RemoveChild</button>
    </>
  )
}

//========================================

// import React, { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [color, setColor] = useState("#eee");
//   const [boxes, setBoxes] = useState([]);

//   const changeColor = () => {
//     setColor("green");
//   };

//   const addChild = () => {
//     setBoxes([...boxes, {}]);
//   };

//   const removeChild = () => {
//     setBoxes(boxes.slice(0, -1));
//   };

//   return (
//     <div className="App">
//       <div
//         className="parent-container"
//         style={{ backgroundColor: color }}
//       >
//         {boxes.map((box, index) => (
//           <div key={index} className="box" />
//         ))}
//       </div>
//       <button onClick={changeColor}>Change Color</button>
//       <button onClick={addChild}>Add Child</button>
//       <button onClick={removeChild}>Remove Child</button>
//     </div>
//   );
// }
