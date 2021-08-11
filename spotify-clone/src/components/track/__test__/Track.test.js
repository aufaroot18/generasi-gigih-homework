/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../../app/store';
import Track from '../index';

const MockButtonSpotify = () => (
  <Provider store={store}>
    <Track />
  </Provider>
);

describe('Track Component', () => {
  it('should render button login spotify', () => {
    render(<MockButtonSpotify />);
    const button = screen.getByText(/login spotify/i);
    expect(button).toBeInTheDocument();
  });
});
