/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../../app/store';
import SearchBar from '../SearchBar';

const MockSearchBar = () => (
  <Provider store={store}>
    <SearchBar />
  </Provider>
);

describe('SearchBar', () => {
  it('should render heading search track', () => {
    render(<MockSearchBar />);
    const heading = screen.getByRole('heading', { name: 'Search Track' });
    expect(heading).toBeInTheDocument();
  });

  it('should render input search', () => {
    render(<MockSearchBar />);
    const input = screen.getByPlaceholderText('Track');
    expect(input).toBeInTheDocument();
  });

  it('should render button search', () => {
    render(<MockSearchBar />);
    const button = screen.getByText('Search');
    expect(button).toBeInTheDocument();
  });
});
