import { Navigate, useRoutes } from 'react-router-dom';

import { useUser } from '@/lib/auth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const { data: user } = useUser();

  const commonRoutes = [{ path: '/', element: <Navigate to={'sign-in'} /> }];

  // const routes = user ? protectedRoutes : publicRoutes;
  const routes = [...protectedRoutes, ...publicRoutes];

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
