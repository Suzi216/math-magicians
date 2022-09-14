import React from 'react';
import '../styles/home.css';

const Home = () => (
  <div className="home-container">
    <h3>What is a calculator</h3>
    <p>
      {' '}
      A calculator is a device that performs arithmetic operations on numbers.
      Basic calculators can do only addition, subtraction, multiplication
      and division mathematical calculations.However, more sophisticated
      calculators can handle exponential operations,square roots, logarithms,
      trigonometric functions and hyperbolic functions.
    </p>
    <p>
      Most calculators these days require electricity to operate or are
      battery-powered calculators. Calculators work by performing programmed
      functions based on numerical inputs. Before the electronic calculator
      (circa 1970), a more primitive calculator, the slide rule,
      was commonly used. It consisted of a slat of wood called the slide that
      could be moved in and out of a reinforced pair of slats. Both the slide and
      the outer pair of slats had calibrated numerical scales.
    </p>
    <h3>Types of calculators</h3>
    <h5>Basic calculators</h5>
    <p>
      The most basic calculator is the four-function calculator, which can perform
      basic arithmetic such as addition, subtraction, multiplication and division.
    </p>
    <h5>Scientific calculators</h5>
    <p>
      This type of calculator usually has more buttons than a standard calculator,
      as it needs to be able to perform trigonometric functions, logarithms,
      sine/cosine and exponential operations. The scientific calculator also
      usually has a larger display to view long equations and see more digits
      at a time.
    </p>
    <h5>Graphing calculators</h5>
    <p>
      The graphing calculator also can graph equations, for example,
      with more advanced mathematics like trigonometry, on a coordinate plane.
    </p>
  </div>
);
export default Home;
