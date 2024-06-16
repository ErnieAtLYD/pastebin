import { render, screen } from '@testing-library/react';
import { Metadata } from '../src/components/Metadata';

describe('Metadata', () => {
  it('renders the metadata', () => {
    render(<Metadata id="123" createdAt={new Date('2021-01-01')} appBaseUrl="http://localhost:3000" />);
    expect(screen.getByText(/123/i)).toBeInTheDocument();
  });
});