import React from 'react';
import {Title} from '../Components/Title'
import {CreateGameForm} from '../Components/CreateGameForm'

export const CreateGame = () => {

  return (
    <section className='page'>

      <Title>Criar Jogo</Title>
      <CreateGameForm />
      
    </section>
  );
} 