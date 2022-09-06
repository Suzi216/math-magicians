import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <>
        <table cellSpacing="0">
          <tr>
            <td colSpan="3"><input type="text" value="0" id="result" /></td>
          </tr>
          <tr>
            <td>
              <input className="others" type="button" value="AC" />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="+/-" />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="%" />
              {' '}
            </td>
            <td>
              <input className="operants" type="button" value="/" />
              {' '}
            </td>
          </tr>
          <tr>
            <td>
              <input className="others" type="button" value="7" />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="8" />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="9" />
              {' '}
            </td>
            <td>
              <input className="operants" type="button" value="*" />
              {' '}
            </td>
          </tr>
          <tr>
            <td>
              <input className="others" type="button" value="4" />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="5" />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="6" />
              {' '}
            </td>
            <td>
              <input className="operants" type="button" value="-" />
              {' '}
            </td>
          </tr>
          <tr>
            <td>
              <input className="others" type="button" value="1" />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="2" />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="3" />
              {' '}
            </td>
            <td>
              <input className="operants" type="button" value="+" />
              {' '}
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input className="others" type="button" value="0" />
              {' '}
            </td>
            <td>
              <input className="others" type="button" value="." />
              {' '}
            </td>
            <td>
              <input className="operants" type="button" value="=" />
              {' '}
            </td>
          </tr>
        </table>
      </>
    );
  }
}

export default Calculator;
