 // Start of Selection
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import PastePage from './page';
import { fetchPaste } from '@/lib/db';
import { jest } from '@jest/globals';

jest.mock('@/lib/db');

   const mockPaste = {
     content: 'Sample paste content',
     createdAt: '2023-10-01T00:00:00Z',
   };

   describe('PastePage', () => {
     it('renders paste content', async () => {
       (fetchPaste as jest.Mock).mockResolvedValue(mockPaste);

       render(<PastePage params={{ id: '1' }} />);

       expect(await screen.findByText('Sample paste content')).toBeInTheDocument();
     });

     it('shows not found message if paste does not exist', async () => {
       (fetchPaste as jest.Mock).mockResolvedValue(null);

       render(<PastePage params={{ id: '1' }} />);

       expect(await screen.findByText('not found')).toBeInTheDocument();
     });
   });