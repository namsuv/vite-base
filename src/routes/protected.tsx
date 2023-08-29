import { Navigate } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import storage from '@/utils/storage';
import PrivateRoute from './PrivateRoute';

const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');

export const protectedRoutes = [
  {
    path: '/app',
    element: <PrivateRoute isAuthenticated={!!storage.getToken()} />,
    children: [
      { path: '/app', element: <Dashboard /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
