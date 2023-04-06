import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Apps from '../Quote';

test('test the quote component', () => {
  const component = renderer.create(
    <Apps />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
