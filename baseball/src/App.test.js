import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './display/display';
import Dashboard from './dashboard/dashboard';

describe('<Display />', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Display />)

    const hello = getByTestId(/hello/i);

    expect(hello).toHaveTextContent(/hello/i)
  })

  describe('ball button', () => {
    it('should select the button', () => {
      const { getByText, getByTestId } = render(<Dashboard />, <Display />)

      const button = getByTestId('balls-button');
      const ballsTotal = getByTestId('balls-total');
      fireEvent.click(button);
      expect(ballsTotal).toHaveTextContent(1)
    })
  })


})
