// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the application and increments the counter', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Get started' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Count is 0' })).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Count is 0' }));

    expect(screen.getByRole('button', { name: 'Count is 1' })).toBeTruthy();
  });
});
