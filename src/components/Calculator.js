import React from 'react';
import calculate from '../logic/calculate';

const KeyPad = () => (
  <div className="Keys">
    <button type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button type="button" className="Orange">&divide;</button>
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button type="button" className="Orange">&times;</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button type="button" className="Orange">-</button>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button" className="Orange">+</button>
    <button type="button" className="Zero">0</button>
    <button type="button">.</button>
    <button type="button" className="Orange">=</button>
  </div>
);

export default KeyPad;
