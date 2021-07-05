import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import {api} from '../../services/api'
import {useUserContext} from '../../contexts/userContext'
import {Container} from './styles'

export const CreateGameForm = () => {
  let history = useHistory();
  const {user, setUserContext} = useUserContext();

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
    <Container>
      <form className='game_form' onSubmit={handleSubmitRegister}>
        <label>Nome:</label>
        <input type='text' id='name'/>
        <label>Preço:</label>
        <input type='number' id='price'/>
        <label>Publisher:</label>
        <select  name="publisher" id="publisher">
          {publishers.map((publisher) => {
            return (
              <option key={publisher.id} value={publisher.id}>{publisher.name}</option>
            );
          })}
          </select>
        
        <label>Descrição:</label>
        <textarea rows = "4" cols = "40" type='text-box' id='description'/>
        <label>Trailer</label>
        <input type='text' id='trailer'/>
        <button type='submit'>Criar jogo</button>
      </form>
    </Container>
      
  );
} 