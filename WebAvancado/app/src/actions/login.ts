"use server";

import apiError from "@/functions/api-error";
import userJson from "../json-data/user.json";
import { cookies } from 'next/headers';

export default async function login(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  try {
    const data = await userJson;

    if (!username || !password) {
      throw new Error("Preencha os dados.");
    }

    const validUser = data.find(
      user => user.username === username && user.password === password
    );

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
