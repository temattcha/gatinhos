'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Input from '@/components/forms/input';
import ErrorMessage from '../helper/error-message';
import React from 'react';
import Link from 'next/link';
import styles from './login-form.module.css';
import { Button } from '@mui/material';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button variant="contained" style={{background: '#fb1', color: '#764701', fontFamily:'Helvetica, Arial, sans-serif'}} >Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/';
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
}
