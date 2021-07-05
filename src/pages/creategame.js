import React, { useState, useEffect, useRef } from 'react';
import {Title} from '../Components/Title'
import {CreateGameForm} from '../Components/CreateGameForm'
import { useParams, useHistory } from 'react-router-dom'
import {api} from '../services/api'
import {useUserContext} from '../contexts/userContext'

export const CreateGame = () => {
  let history = useHistory();
  const {user, setUserContext} = useUserContext();

  const goHome = () => {
    history.push("/")
  }

  const firstRender = useRef(true);

  const [game_register, setGameRegister] = useState([]);

    useEffect(() =>{
        if (!firstRender.current){
          let config = {
            headers: {
              "Content-Type": "application/json",
              "X-User-Email": user.email,
              "X-User-Token": user.authentication_token
            }
          }
          
            api.post('game/create', game_register, config)
            .then((response) => {
              if (response.status == 200){
                alert("Registrado com sucessso!")
                console.log(response.data)
                history.push("/")
              } else {
                alert("Não autorizado")
              }
                
            }, (error) => {
                alert("Erro, tente novamente")
                console.log(error)
            })
        }
        firstRender.current = false;
      }, [game_register]);

    const handleSubmitRegister = (Event) => {
        Event.preventDefault();
        let game = {
            'name': Event.target.name.value,
            'price': Event.target.price.value,
            'publisher_id': Event.target.publisher.value,
            'description': Event.target.description.value,
            'trailer': Event.target.trailer.value
        }
        setGameRegister(game);
    }

    const [publishers, setPublishers] = useState([]);

  useEffect(() =>{
    api.get('publishers/index')
    .then((response) => {
        setPublishers(response.data)
    })
  }, [])

  return (
    <section className='page'>

      <Title>Criar Jogo</Title>
      <CreateGameForm />
      
    </section>
  );
} 