'use client';
import React from 'react';
import { TextField, Button, Box, Container } from '@mui/material';

export default function CatRegister() {
  return (
    <section className='animeLeft'>
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <h1 className='title'>Registre seu gatinho</h1>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField fullWidth margin="normal" label="Nome do gato" name="cat-name" type="text" variant="filled" />
          <TextField fullWidth margin="normal" label="Sexo" name="cat-gender" type="text" variant="filled"/>
          <TextField fullWidth margin="normal" label="Espécie" name="cat-species" type="text" variant="filled"/>
          <TextField fullWidth margin="normal" label="Cor" name="cat-color" type="text" variant="filled"/>
          <TextField fullWidth margin="normal" label="Idade" name="cat-age" type="number" variant="filled"/>
          <TextField fullWidth margin="normal" label="Peso" name="cat-weight" type="number" variant="filled"/>
          <TextField fullWidth margin="normal" label="Gato possui Felv?" name="cat-felv" type="text" variant="filled"/>
        </Box>
        <Button variant="contained" sx={{ mt: 2 }}>Cadastrar Gato</Button>
      </Container>
    </section>
  );
}