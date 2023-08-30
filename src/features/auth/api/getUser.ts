import storage from '@/utils/storage';
import { handleApiResponse } from '@/lib/api';
import { User } from '../types';

export function getUserProfile(): Promise<{ user: User | undefined }> {
  return fetch('/auth/me', {
    headers: {
      Authorization: storage.getToken(),
    },
  }).then(handleApiResponse);
}
