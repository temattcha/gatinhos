"use server";

import apiError from "@/functions/api-error";
import { useUsernameStore } from "@/store";
import { cookies } from 'next/headers';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export default async function login(state: {}, formData: FormData) {
  const name = formData.get("name") as string | null;
  const password = formData.get("password") as string | null;

  try {
    const url = 'http://localhost:4000/api/user/getAll';

    const response = await fetch(url, {
      method: 'GET'
    });
    if (!response.ok) throw new Error('Erro ao pegar o usuário.');
    let dataAsJson = await response.json();

    if (!name || !password) {
      throw new Error("Preencha os dados.");
    }

    const validUser = dataAsJson.find((user: any) => user.name === name && user.password === password);
    useUsernameStore.setState({ globalUsername: validUser.name })

    if (validUser) {
      cookies().set('name', validUser.name, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24
      });

      return { data: validUser, ok: true, error: "" };
    } else {
      throw new Error("Usuário ou senha inválidos.");
    }
  } catch (error) {
    console.log("Erro:", error);
    return apiError(error);
  }
}
