import Home from '../components/Home';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
