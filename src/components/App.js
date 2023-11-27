import React from 'react'
import { useState } from 'react';
import '../styles/App.css';


const App = () => {

  const getInitialState = () => {
    const value = "square";
    return value;
  };
 
  const [value, setValue] = useState(getInitialState);
  const[selectedValues, setSelectedValues]=useState([])
  
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
   const handleAddShape=()=>{
    if(value){
      setSelectedValues((preValues)=>[...preValues, value])
      //setValue('')
    }
   }
  return (
    <div id="main">
      <div id="shape-creator">
      <select value={value} onChange={handleChange}>
        <option value="square">Square</option>
        <option value="circle">Circle</option>
      </select>
      <button onClick={handleAddShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
      {selectedValues.map((value, index) => (
          <div key={index} className={value}>{index}</div>
        ))}
      </div>
    </div>
  )
}


export default App;
