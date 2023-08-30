import { handleApiResponse } from "@/lib/api";
import { AuthResponse } from "../types";

export function registerWithEmailAndPassword(
  data: unknown
): Promise<AuthResponse> {
  return fetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(handleApiResponse);
}
