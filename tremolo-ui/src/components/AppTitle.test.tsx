/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import AppTitle from './AppTitle';

test('AppTitle', () => {
  const { asFragment } = render(<AppTitle />);
  expect(asFragment()).toMatchSnapshot();
});
