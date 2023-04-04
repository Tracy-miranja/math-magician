import React, { useState } from 'react';
import calculate from '../logic/calculate';
// import Apps from './Quote';

function Display() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onButtonClick = (btnName) => {
    const newState = calculate(state, btnName);
    setState({
      total: newState.total,
      next: newState.next,
      operation: newState.operation,
    });
  };

  const displayValues = () => {
    const { total, next, operation } = state;
    if (total && !next && !operation) return `${total}`;
    if (!total && next && !operation) return `${next}`;
    if (total && !next && operation) return `${total} ${operation}`;
    if (total && next && operation) return `${next}`;
    return '0';
  };

  return (
    <section className="container">
      <h1>Math Magicians</h1>
      <div className="finaal">
        <p>let us do math</p>
        <div className="all">
          <div className="screen">
            { displayValues()}
          </div>
          <div className="Keys">
            <button type="button" onClick={() => onButtonClick('AC')}>AC</button>
            <button type="button" onClick={() => onButtonClick('+/-')}>+/-</button>
            <button type="button" onClick={() => onButtonClick('%')}>%</button>
            <button type="button" className="Orange" onClick={() => onButtonClick('÷')}>&divide;</button>
            <button type="button" onClick={() => onButtonClick('7')}>7</button>
            <button type="button" onClick={() => onButtonClick('8')}>8</button>
            <button type="button" onClick={() => onButtonClick('9')}>9</button>
            <button type="button" className="Orange" onClick={() => onButtonClick('x')}>&times;</button>
            <button type="button" onClick={() => onButtonClick('4')}>4</button>
            <button type="button" onClick={() => onButtonClick('5')}>5</button>
            <button type="button" onClick={() => onButtonClick('6')}>6</button>
            <button type="button" className="Orange" onClick={() => onButtonClick('-')}>-</button>
            <button type="button" onClick={() => onButtonClick('1')}>1</button>
            <button type="button" onClick={() => onButtonClick('2')}>2</button>
            <button type="button" onClick={() => onButtonClick('3')}>3</button>
            <button type="button" className="Orange" onClick={() => onButtonClick('+')}>+</button>
            <button type="button" className="Zero" onClick={() => onButtonClick('0')}>0</button>
            <button type="button" onClick={() => onButtonClick('.')}>.</button>
            <button type="button" className="Orange" onClick={() => onButtonClick('=')}>=</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Display;
