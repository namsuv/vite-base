
export async function handleApiResponse(response: Response) {
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    console.error(JSON.stringify(data, null, 2));
    return Promise.reject(data);
  }
}

export function logout(): Promise<{ message: string }> {
  return fetch('/auth/logout', { method: 'POST' }).then(handleApiResponse);
}
