import { configureAuth } from 'react-query-auth';

import { AuthResponse, LoginCredentials, RegisterCredentials } from '@/features/auth';
import storage from '@/utils/storage';
import {
  logout,
} from './api';
import { loginWithEmailAndPassword } from '@/features/auth/api/login';
import { registerWithEmailAndPassword } from '@/features/auth/api/register';
import { getUserProfile } from '@/features/auth/api/getUser';

async function handleUserResponse(data: AuthResponse) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function userFn() {
  const { user } = await getUserProfile();
  return user ?? null;
}

async function loginFn(data: LoginCredentials) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentials) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  await logout();
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  });