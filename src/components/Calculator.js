import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [items, setStates] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handleCalc = (e) => {
    const data = e.target.value;
    const item = calculate(items, data);
    setStates(item);
  };

  const { total, next, operation } = items;
  return (
    <div className="container">
      <table cellSpacing="0">
        <tr>
          <td colSpan="3">
            <div className="result">
              {total}
              {operation}
              {next}
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <input className="others" type="button" value="AC" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="others" type="button" value="+/-" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="others" type="button" value="%" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="operants" type="button" value="÷" onClick={handleCalc} />
            {' '}
          </td>
        </tr>
        <tr>
          <td>
            <input className="others" type="button" value="7" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="others" type="button" value="8" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="others" type="button" value="9" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="operants" type="button" value="x" onClick={handleCalc} />
            {' '}
          </td>
        </tr>
        <tr>
          <td>
            <input className="others" type="button" value="4" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="others" type="button" value="5" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="others" type="button" value="6" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="operants" type="button" value="-" onClick={handleCalc} />
            {' '}
          </td>
        </tr>
        <tr>
          <td>
            <input className="others" type="button" value="1" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="others" type="button" value="2" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="others" type="button" value="3" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="operants" type="button" value="+" onClick={handleCalc} />
            {' '}
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <input className="others" type="button" value="0" onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="others" type="button" value="." onClick={handleCalc} />
            {' '}
          </td>
          <td>
            <input className="operants" type="button" value="=" onClick={handleCalc} />
            {' '}
          </td>
        </tr>
      </table>
    </div>

  );
};

export default Calculator;
