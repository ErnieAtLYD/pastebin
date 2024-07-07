import { render, screen } from '@testing-library/react';
import { Metadata } from '../../components/Metadata';

describe('Metadata', () => {
  it('renders the metadata', () => {
    render(<Metadata id="123" createdAt={new Date('2021-01-01')} appBaseUrl="http://localhost:3000" />);
    expect(screen.getByText(/123/i)).toBeInTheDocument();
  });

  it('renders the createdAt prop', () => {
    render(<Metadata id="123" createdAt={new Date('2025-12-31')} appBaseUrl="http://localhost:3000" />);
    expect(screen.getByText(/12\/30\/2025, 4:00:00 PM/i)).toBeInTheDocument();
  });

  it('renders the appBaseUrl prop', () => {
    render(<Metadata id="123" createdAt={new Date('2021-01-01')} appBaseUrl="http://localhost:3000" />);
    expect(screen.getByText(/http:\/\/localhost:3000\/paste\/123/i)).toBeInTheDocument();
  });

  xit('throws an error when id is missing', () => {
    expect(() => {
      render(<Metadata createdAt={new Date('2021-01-01')} appBaseUrl="http://localhost:3000" />)
    }).toThrow();
    // Add additional assertions for how the component should behave when props are missing
  })
});