import React from 'react';

import renderer from 'react-test-renderer';
import 'regenerator-runtime/runtime'

import Link from './Microphone';
import Microphone from './Microphone';
import { it } from 'node:test';

it('renders correctly', () => {
  const tree = renderer
    .create(<Microphone />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders stop and listen buttons', () => {
  const tree = renderer.create(<Microphone />).toJSON()
  expect(tree).toContain('button')
});

