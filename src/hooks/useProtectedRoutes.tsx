import { useUser } from '@/lib/auth';
import { Navigate } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import storage from '@/utils/storage';
import PrivateRoute from '@/routes/PrivateRoute';

const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');

export default function useProtectedRoutes() {
  const { data: user } = useUser();

  const protectedRoutes = [
    {
      path: '/app',
      element: <PrivateRoute isAuthenticated={!!user} />,
      children: [
        { path: '/app', element: <Dashboard /> },
        { path: '*', element: <Navigate to="." /> },
      ],
    },
  ];

  return { protectedRoutes }
}
