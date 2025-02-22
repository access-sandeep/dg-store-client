/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

describe('Homepage', () => {
    beforeEach(()=>{
        render(<Home />);
    });

    test('Renders the page title', () => {
        const linkElement = screen.getByText(/This is the dashboard/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Show product button', async () => {
        const linkElement = await screen.findByText(/Show Product 100/i);
        expect(linkElement).toBeInTheDocument();
        fireEvent.click(linkElement);
        const linkElement2 = await screen.findByText(/Show Product 101/i);
        expect(linkElement2).toBeInTheDocument();
    });
})
