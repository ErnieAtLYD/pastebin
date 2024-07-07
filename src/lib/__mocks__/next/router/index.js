import { useRouter } from 'next/router';

jest.mock('next/router', () => {
  const mockRouter = {
    useRouter: jest.fn(),
  };

  mockRouter.useRouter.mockImplementation(() => ({
    route: '/',
  }));

  return mockRouter;
});