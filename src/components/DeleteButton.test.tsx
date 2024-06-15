import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DeleteButton } from './DeleteButton';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
    useRouter: () => ({
        pathname: '/',
        query: '',
        asPath: '',
        push: jest.fn(),
    }),
}));

jest.mock('nanoid');

describe('DeleteButton', () => {
    it('renders the delete button', () => {
        render(<DeleteButton pasteId="123" />);
        expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    });
});
