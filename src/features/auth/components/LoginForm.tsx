import { FC } from 'react';

import { useLogin } from '@/lib/auth';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

export const LoginForm: FC = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center space-y-6 w-full sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm mx-auto max-w-xs">By continuing, you are setting up a Bulletproof account and agree to our
          User Agreement and Privacy Policy.</p>

        <SignIn />

        <p className="px-8 text-center text-sm text-zinc-700">
          New to Bulletproof?{' '}
          <Link to={'../sign-up'} className="hover:text-zinc-800 text-sm underline underline-offset-4">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}
