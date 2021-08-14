/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Search Bar Component', () => {
  test('render input component', () => {
    render(<SearchBar />);
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
  });

  test('render button search component', () => {
    render(<SearchBar />);
    const searchButton = screen.getByTestId('search');
    expect(searchButton).toBeInTheDocument();
  });

  test('click button when input has value mario', () => {
    const { container } = render(<SearchBar />);
    const input = container.querySelector('#keyword');
    const searchButton = screen.getByTestId('search');
    fireEvent.change(input, { target: { value: 'mario' } });
    fireEvent.click(searchButton);
  });
});
