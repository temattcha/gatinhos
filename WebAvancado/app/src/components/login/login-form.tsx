'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Input from '@/components/forms/input';
import ErrorMessage from '../helper/error-message';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './login-form.module.css';
import { Button } from '@mui/material';

export default function LoginForm() {
  
  const { pending } = useFormStatus();

  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  function FormButton() {
    return (
      <>
        {pending ? (
          <Button disabled={pending}>Enviando...</Button>
        ) : (
          <Button type='submit' variant='contained' style={{background: '#fb1', color: '#764701', fontFamily:'Helvetica, Arial, sans-serif'}} >Entrar</Button>
        )}
      </>
    );
  }

  React.useEffect(() => {
    if (state.ok) window.location.href = '/';
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label='Usuário' id='name' name='name' type='text' autoCapitalize='false' />
        <Input label='Senha' id='password' name='password' type='password' autoCapitalize='false' />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className='button' href='/login/criar'>
          Cadastro
        </Link>
      </div>
    </>
  );
}
