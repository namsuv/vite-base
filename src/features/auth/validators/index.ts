import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Required').email(),
  password: z.string().min(1, 'Required'),
});

export type LoginCredentials = z.infer<typeof loginSchema>;

export const signUpSchema = z.object({
  email: z.string().min(1, 'Required').email(),
  password: z.string().min(1, 'Required'),
  username: z.string().min(1, 'Required'),
  role: z.enum(['ADMIN', 'USER'], {
    errorMap: () => ({
      message: "Role must be one of 'admin' pr 'user'",
    }),
  }),
});

export type RegisterCredentials = z.infer<typeof signUpSchema>;
