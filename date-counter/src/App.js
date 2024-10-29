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

  function handleIncreaseStep(){
    setStep((currentStep) => currentStep + 1);
  }

  function handleDecreaseStep(){
    if(step >= 2){
      setStep((currentStep) => currentStep - 1);
    }
  }

  function handleIncreaseCount(){
    setCount((currentCount) => currentCount + 1);
  }

  function handleDecreaseCount(){
    if(count >= 2){
      setCount((currentCount) => currentCount - 1);
    }
  }

  function getFutureDate(){
    const today = new Date();
    today.setDate(today.getDate() + daysMultiplier);
    return today.toDateString();
  }

  return (
    <>
      <div>
      <button onClick={handleDecreaseStep}>-</button>
      Step: {step}
      <button onClick={handleIncreaseStep}>+</button>
      </div>
      

      <div>
      <button onClick={handleDecreaseCount}>-</button>
      Count: {count}
      <button onClick={handleIncreaseCount}>+</button>
      </div>

      <p>{daysMultiplier} days from today is {getFutureDate()}</p>
    </>
  );
}

export default App;