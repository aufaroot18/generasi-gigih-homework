/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { Provider, useDispatch } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { setToken } from '../../../store/playlist/playlist.slice';
import store from '../../../app/store';
import Navbar from '../index';

const NavBarWrapper = () => {
  const token = 'abcde';
  const dispatch = useDispatch();
  dispatch(setToken(token));

  return <Navbar />;
};

const MockNavbar = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavBarWrapper />
    </BrowserRouter>
  </Provider>
);

beforeEach(() => render(<MockNavbar />));

describe('Navbar Component', () => {
  it('should render navbar component', () => {
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });

  it('should render home nav item ', () => {
    const homeItem = screen.getByText(/Home/i);
    expect(homeItem).toBeInTheDocument();
  });

  it('should render all nav items', () => {
    const listItems = screen.getAllByTestId('listitem');
    expect(listItems.length).toEqual(6);
  });
});
