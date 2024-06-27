'use client';
import Input from '@/components/forms/input';
import { Button } from '@mui/material';
import React, { useState } from 'react';

export default function CatRegister() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [color, setColor] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isFelv, setIsFelv] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/kittyCat/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          species,
          color,
          age,
          weight,
          isFelv
        })
      });
      const data = await response.json();
      setMessage(data.message || 'Cadastro concluído com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar com API:', error);
      setMessage('Erro ao cadastrar. Tente novamente mais tarde.');
    }
  };

  return (
    <section className='animeLeft'>
      <h1 className='title'>Registre seu gatinho</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label='Nome do gato'
          id='name'
          name='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label='Espécie'
          id='species'
          name='species'
          type='text'
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
        <Input
          label='Cor'
          id='color'
          name='color'
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Input
          label='Idade'
          id='age'
          name='age'
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          label='Peso'
          id='weight'
          name='weight'
          type='number'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor='isFelv'>Possui FELV?</label>
        <input
          id='isFelv'
          name='isFelv'
          type='checkbox'
          checked={isFelv}
          onChange={(e) => setIsFelv(e.target.checked)}
        />
        <Button type='submit'>Cadastrar</Button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}
