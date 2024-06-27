'use server';

import apiError from '@/functions/api-error';
import login from './login'; // Importe a função de login, se necessário

export default async function userPost(state: {}, formData: FormData) {
  const name = formData.get('name') as string | null;
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  try {
      if (!name || !password || !email) {
          throw new Error('Preencha os dados.');
      }
      if (password.length < 6) {
          throw new Error('A senha deve ter mais de 6 dígitos.');
      }

      const url = `http://localhost:4000/api/user/create`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      // Verificar se a requisição foi bem-sucedida
      if (!response.ok) {
          throw new Error('Erro ao cadastrar usuário.');
      }

      // Chamar a função de login para autenticar o usuário recém-criado
      const { ok } = await login({}, formData);

      if (!ok) {
          throw new Error('Erro ao autenticar usuário.');
      }

      return { data: null, ok: true, error: '' };
  } catch (error) {
      return apiError(error);
  }
}