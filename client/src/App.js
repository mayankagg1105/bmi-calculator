import React,{useMemo, useState} from "react";
import './App.css';

const App = () => {
  const [height,setHeight] = useState(50);
  const [weight,setWeight] = useState(50);

  function onweightchange(event){
    setWeight(event.target.value)
  }
  function onheightchange(event){
    setHeight(event.target.value)
  }
  const output = useMemo(() =>{
    const calHeight = height/100;
    return(weight/(calHeight*calHeight)).toFixed(1);

  },[weight,height]);

  return (
    <main>
      <h1>Calculate! BMI</h1>
    <div className='input'> 
    <p className='slider-output'>Weight:{weight}</p>
    <input className='input-slider'
     type='range'
     step="1"
      min="40"
      max="200"
      onChange={onweightchange}/>
    <p className='slider-output'>Height:{height}</p>
    <input className='input-slider'
     type='range'
     min = '0'
     max = '250'  
     onChange={onheightchange}/>
    </div>
    <div className='output-section'>
      <p> our bmi is</p>
      <p className='output'>{output}</p>

    </div>
    </main>
  )
}

export default App
