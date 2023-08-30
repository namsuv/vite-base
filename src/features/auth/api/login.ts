import { handleApiResponse } from '@/lib/api';
import { AuthResponse } from '../types';

export function loginWithEmailAndPassword(
  data: unknown
): Promise<AuthResponse> {
  return fetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(handleApiResponse);
}
