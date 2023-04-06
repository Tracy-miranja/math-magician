import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Display from '../Calculator';

test('test the home component', () => {
  const component = renderer.create(
    <Display />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
