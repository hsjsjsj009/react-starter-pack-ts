import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import Repository from "./repository";

test('renders learn react link', () => {
  render(<Provider store={Repository}>
    <App />
  </Provider>);
  const linkElement = screen.getByText(/Data Example Repo/);
  expect(linkElement).toBeInTheDocument();
});
