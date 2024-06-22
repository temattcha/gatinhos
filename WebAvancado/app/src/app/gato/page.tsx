'use client';
import Input from '@/components/forms/input';
import React from 'react';

export default async function CatRegister() {

  return (
    <section className='animeLeft'>
      <h1 className='title'>Registre seu gatinho </h1>
      <form>
        <Input label="Nome do gato" name="cat-name" type="text" />
        <Input label="Espécie" name="cat-species" type="text" />
        <Input label="Cor" name="cat-color" type="text" />
        <Input label="Idade" name="cat-age" type="number" />

      </form>
    </section>
  );
}