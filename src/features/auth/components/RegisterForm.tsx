import * as z from 'zod';

import { useRegister } from '@/lib/auth';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

const schema = z
  .object({
    email: z.string().min(1, 'Required'),
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    password: z.string().min(1, 'Required'),
  })

type RegisterValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  teamId?: string;
  teamName?: string;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const register = useRegister();

  return <div className="container mx-auto flex flex-col justify-center space-y-6 w-full sm:w-[400px]">
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
      <p className="text-sm mx-auto max-w-xs">By continuing, you are setting up a Bulletproof account and agree to our
        User Agreement and Privacy Policy.</p>

      <SignUp />

      <p className="px-8 text-center text-sm text-zinc-700">
        Already a Bulletproofor?{' '}
        <Link to={'/sign-in'} className="hover:text-zinc-800 text-sm underline underline-offset-4">Sign In</Link>
      </p>
    </div>
  </div>
};
