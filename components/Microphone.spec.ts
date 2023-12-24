import React from 'react';

import renderer from 'react-test-renderer';
import 'regenerator-runtime/runtime'

import Link from './Microphone';
import Microphone from './Microphone';

it('renders correctly', () => {
  const tree = renderer
    .create(<Microphone />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
