// Mock environment variables
process.env.KV_REST_API_URL = 'http://mockurl.com';
process.env.KV_REST_API_TOKEN = 'mocktoken';


import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/'; // This should be handled by jest.setup.ts
import { DeleteButton } from '../../components/DeleteButton';

jest.mock('next/navigation', () => ({ useRouter: jest.fn() }));

jest.mock('nanoid');

describe('DeleteButton', () => {
    it('renders the delete button', () => {
        render(<DeleteButton pasteId="123" />);
        expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    });
});
