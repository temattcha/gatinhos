'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Input from '@/components/forms/input';
import ErrorMessage from '../helper/error-message';
import React from 'react';
import styles from './login-form.module.css';
import userPost from '@/actions/user-post';
import { Button } from '@mui/material';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Cadastrando...</Button>
      ) : (
        <Button type='submit' variant='contained' style={{background: '#fb1', color: '#764701', fontFamily:'Helvetica, Arial, sans-serif'}}>Cadastrar</Button>
      )}
    </>
  );
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/';
  }, [state.ok]);

  return (
    <form action={action} className={styles.form}>
      <Input label='Usuário' id='name' name='name' type='text' />
      <Input label='E-mail' id='email' name='email' type='text' />
      <Input label='Senha' id='password' name='password' type='password' />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
