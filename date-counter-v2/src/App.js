import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

function Counter(){
  const [step,setStep] = useState(1)
  const [count,setCount] = useState(1)

  const daysMultiplier = step * count;

  function handleStepChange(e){
    setStep(Number(e.target.value));
  }

  function handleIncreaseCount(){
    setCount((currentCount) => currentCount + 1);
  }

  function handleDecreaseCount(){
    if(count >= 2){
      setCount((currentCount) => currentCount - 1);
    }
  }

  function handleChangeCount(e){
    setCount(Number(e.target.value));
  }

  function getFutureDate(){
    const today = new Date();
    today.setDate(today.getDate() + daysMultiplier);
    return today.toDateString();
  }

  function handleReset(){
    setCount(0);
    setStep(0);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={handleStepChange}
        />
          <span>Step:{step}</span>
      </div>
      
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={handleChangeCount}/>
        <button onClick={handleIncreaseCount}>+</button>
      </div>
      <p>{daysMultiplier} days from today is {getFutureDate()}</p>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;