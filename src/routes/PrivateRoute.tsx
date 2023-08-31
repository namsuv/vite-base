import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import requireAuth from './requireAuth';

const PrivateRoute = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <div className="spinner" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export default requireAuth(PrivateRoute)