import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import {api} from '../../services/api'
import {useUserContext} from '../../contexts/userContext'
import {Container} from './styles'

export const CreateCategoryForm = () => {
  let history = useHistory();
  const {user, setUserContext} = useUserContext();

  const firstRender = useRef(true);

  const [category_register, setCategoryRegister] = useState([]);

    useEffect(() =>{
        if (!firstRender.current){
          let config = {
            headers: {
              "Content-Type": "application/json",
              "X-User-Email": user.email,
              "X-User-Token": user.authentication_token
            }
          }
          
            api.post('category/create', category_register, config)
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
      }, [category_register]);

    const handleSubmitRegister = (Event) => {
        Event.preventDefault();
        let category = {
            'name': Event.target.name.value
        }
        setCategoryRegister(category);
    }


  return (
    <Container>
      <form className='category_form' onSubmit={handleSubmitRegister}>
        <label>Nome:</label>
        <input type='text' id='name'/>   
        <button type='submit'>Criar Categoria</button>
      </form>
    </Container>
      
  );
} 