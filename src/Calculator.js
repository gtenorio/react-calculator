import React, {useState} from 'react';

function Calculator(){
  let [currentDisplay, setcurrentDisplay] = useState(0);

  return(
    <div className="calculator-container">
      <div className="calculator-display"><span>{currentDisplay}</span></div>
      <div className="calculator-button clear-button"><span>Clear</span></div>
      <div className="calculator-button"><span>÷</span></div>
      <div className="calculator-button"><span>1</span></div>
      <div className="calculator-button"><span>2</span></div>
      <div className="calculator-button"><span>3</span></div>
      <div className="calculator-button"><span>x</span></div>
      <div className="calculator-button"><span>4</span></div>
      <div className="calculator-button"><span>5</span></div>
      <div className="calculator-button"><span>6</span></div>
      <div className="calculator-button"><span>-</span></div>
      <div className="calculator-button"><span>7</span></div>
      <div className="calculator-button"><span>8</span></div>
      <div className="calculator-button"><span>9</span></div>
      <div className="calculator-button"><span>+</span></div>
      <div className="calculator-button"><span>+/-</span></div>
      <div className="calculator-button"><span>0</span></div>
      <div className="calculator-button"><span>.</span></div>
      <div className="calculator-button"><span>=</span></div>
    </div>
  );
}

export default Calculator;
