import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';


test('renders learn react link', () => {
  (axios.get as jest.Mock).mockResolvedValue({});

  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
