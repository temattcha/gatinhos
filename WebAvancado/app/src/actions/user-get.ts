'use server';

import apiError from '@/functions/api-error';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export default async function userGet() {
  try {
    const url = 'http://localhost:4000/api/user/getAll';

    const response = await fetch(url, {
      method: 'GET'
    });
    if (!response.ok) throw new Error('Erro ao pegar o usuário.');
    let dataAsJson = await response.json();
    let data = dataAsJson as User;

    let name = data.name;

    dataAsJson = dataAsJson.filter((el: any) => el.name === name);
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}

