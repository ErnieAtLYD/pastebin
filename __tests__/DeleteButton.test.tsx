// Mock environment variables
process.env.KV_REST_API_URL = 'http://mockurl.com';
process.env.KV_REST_API_TOKEN = 'mocktoken';


import { useRouter } from 'next/navigation'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/'; // This should be handled by jest.setup.ts
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
