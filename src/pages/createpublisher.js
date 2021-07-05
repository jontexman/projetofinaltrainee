import React, { useState, useEffect, useRef } from 'react';
import {Title} from '../Components/Title'
import {CreatePublisherForm} from '../Components/CreatePublisherForm'

export const CreatePublisher = () => {

  return (
    <section className='page'>

      <Title>Criar Publisher</Title>
      <CreatePublisherForm />
      
    </section>
  );
} 