import React, {useState} from 'react';

function Calculator(){
  let [numbers, setNumbers] = useState([]);
  let [current, setCurrent] = useState('0');
  let [hasDecimal, setHasDecimal] = useState(false);
  let [oppOnStack, setOppOnStack] = useState(false);

  const onNumberClick = e => {
    let newStr = '';
    if(current === '0'){
      if(e.target.innerHTML !== '0'){
        newStr = '';
        newStr += e.target.innerHTML;
        setCurrent(newStr);
      }
    }
    else{
      if(!oppOnStack) newStr = current;
      newStr += e.target.innerHTML;
      setCurrent(newStr);
    }
    setOppOnStack(false);
  }

  const onOpperationClick = e => {
    //Add, subtract, multiply, divide
    if(e.target.innerHTML !== '=' && !oppOnStack){
      let opp = e.target.innerHTML;

      setNumbers([...numbers, current, opp]);
      setOppOnStack(true);
    }
    else {
      //Todo, keep running total
      setNumbers([...numbers, current]);
      let result = parseInt(numbers[0]);

      for(let i = 1; i < numbers.length; i += 2){
        let opp = numbers[i];

        let newVal = numbers[i + 1];

        if(opp === '+') result += newVal;
        else if(opp === '-') result -= newVal;
        else if(opp === 'x') result *= newVal;
        else result = result/newVal;
      }
    }
  }

  const onClear = e => {
    setCurrent('0');
    setNumbers([]);
    setHasDecimal(false);
    setOppOnStack(false);
  }

  return(
    <div className="calculator-container">
      <div className="calculator-display">{current}</div>
      <div className="calculator-button clear-button" onClick={onClear}>Clear</div>
      <div className="calculator-button" onClick={onOpperationClick}>/</div>
      <div className="calculator-button" onClick={onNumberClick}>1</div>
      <div className="calculator-button" onClick={onNumberClick}>2</div>
      <div className="calculator-button" onClick={onNumberClick}>3</div>
      <div className="calculator-button" onClick={onOpperationClick}>x</div>
      <div className="calculator-button" onClick={onNumberClick}>4</div>
      <div className="calculator-button" onClick={onNumberClick}>5</div>
      <div className="calculator-button" onClick={onNumberClick}>6</div>
      <div className="calculator-button" onClick={onOpperationClick}>-</div>
      <div className="calculator-button" onClick={onNumberClick}>7</div>
      <div className="calculator-button" onClick={onNumberClick}>8</div>
      <div className="calculator-button" onClick={onNumberClick}>9</div>
      <div className="calculator-button" onClick={onOpperationClick}>+</div>
      <div className="calculator-button" ></div>
      <div className="calculator-button" onClick={onNumberClick}>0</div>
      <div className="calculator-button" >.</div>
      <div className="calculator-button" onClick={onOpperationClick}>=</div>
    </div>
  );
}

export default Calculator;
