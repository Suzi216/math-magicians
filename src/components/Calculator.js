import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleCalc = (e) => {
    const data = e.target.value;
    const state = calculate(this.state, data);
    this.setState(state);
  };

  render() {
    const { total, next, operation } = this.state;
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
              <input className="others" type="button" value="AC" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="+/-" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="%" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="operants" type="button" value="÷" onClick={this.handleCalc} />
              {' '}
            </td>
          </tr>
          <tr>
            <td>
              <input className="others" type="button" value="7" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="8" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="9" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="operants" type="button" value="x" onClick={this.handleCalc} />
              {' '}
            </td>
          </tr>
          <tr>
            <td>
              <input className="others" type="button" value="4" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="5" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="6" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="operants" type="button" value="-" onClick={this.handleCalc} />
              {' '}
            </td>
          </tr>
          <tr>
            <td>
              <input className="others" type="button" value="1" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="2" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="3" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="operants" type="button" value="+" onClick={this.handleCalc} />
              {' '}
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input className="others" type="button" value="0" onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="." onClick={this.handleCalc} />
              {' '}
            </td>
            <td>
              <input className="operants" type="button" value="=" onClick={this.handleCalc} />
              {' '}
            </td>
          </tr>
        </table>
      </div>

    );
  }
}

export default Calculator;
