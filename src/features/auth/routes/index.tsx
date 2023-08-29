import { Route, Routes, useNavigate } from 'react-router-dom';

import { Login } from './Login';
import { Register } from './Register';
import { useEffect } from 'react';
import { useUser } from '@/lib/auth';

export const AuthRoutes = () => {
  const navigate = useNavigate();
  const { data: user } = useUser();

  useEffect(() => {
    if (user) {
      navigate('/app');
    }
  }, [user]);

  return (
    <Routes>
      <Route path="sign-up" element={<Register />} />
      <Route path="sign-in" element={<Login />} />
    </Routes>
  );
};
