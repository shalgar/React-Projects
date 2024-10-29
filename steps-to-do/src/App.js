import { useState } from "react";

 const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious(){
    if(step > 1) setStep((currentStep)=> currentStep - 1);
  }

  function handleNext(){
    if(step < 3) setStep((currentStep)=> currentStep + 1);
  }

  return (
    <>

    <button className="close" onClick={()=> setIsOpen((currentIsOpen) => !currentIsOpen)}>&times;</button>
    { isOpen &&
      <div className="steps">
      <div className="numbers">
        <div className={ step >= 1 ?"active" :""}>1</div>
        <div className={ step >= 2 ?"active" :""}>2</div>
        <div className={ step >= 3 ?"active" :""}>3</div>
      </div>
        <p className="messages"> Step {step}: {messages[step -1]}</p>
        <div className="buttons">
        <button style={{backgroundColor:'purple', color:'white'}} onClick={handlePrevious}>prev</button>
        <button style={{backgroundColor:'purple', color:'white'}} onClick={handleNext}>next</button>
      </div>
    </div>
    }
    
    </>
  );
}

export default App;
