import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator'
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Quotes from '../components/Quotes';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
