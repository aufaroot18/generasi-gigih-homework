/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import Home from '../index';

const MockHome = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

beforeEach(() => render(<MockHome />));

describe('Home Component', () => {
  it('should render home component', () => {
    const title = screen.getByRole('heading', { name: /browse new playlist/i });
    expect(title).toBeInTheDocument();
  });

  it('should render loading componet when data have not fetched', () => {
    const loading = screen.getByRole('loading');
    expect(loading).toBeInTheDocument();
  });

  it('should render one card when data was fetched', async () => {
    const card = await screen.findByRole(/card-111/i);
    expect(card).toBeInTheDocument();
  });

  it('should render all card lists', async () => {
    const cards = await screen.findAllByRole(/card/i);
    expect(cards.length).toEqual(6);
  });
});
