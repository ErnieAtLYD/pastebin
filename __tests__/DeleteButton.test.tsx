import { useRouter } from 'next/navigation'
import { render, screen } from '@testing-library/react';
import { DeleteButton } from '../src/components/DeleteButton';
import mockRouter from "next-router-mock"

jest.mock('next/navigation', () => ({ useRouter: jest.fn() }));

jest.mock('nanoid');

describe('DeleteButton', () => {
    it('renders the delete button', () => {
        render(<DeleteButton pasteId="123" />);
        expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    });
});
