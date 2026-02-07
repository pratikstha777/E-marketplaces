import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';
import '@testing-library/jest-dom';

describe('App Integration', () => {
  it('displays products fetched from the backend', async () => {
    // Mock the global fetch to return our fake data
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
          { id: 1, name: 'Mock Phone', price: 500, description: 'Best mock phone' }
        ]),
      })
    );

    render(<App />);

    // Wait for the async product name to appear in the UI
    const productTitle = await waitFor(() => screen.getByText(/Mock Phone/i));
    expect(productTitle).toBeInTheDocument();
  });
});