import {api} from '../../services/api'
import React, { useState, useEffect, useRef } from 'react';


const [publishers, setPublishers] = useState([]);
const [id, setId] = useState([]);
const [name, setName] = useState('')

const addPublishers = (event) => {
  event.preventDefault()
  
  api.post('publishers/create', {
      publisher: {
          name: name,
      }
    }).then((response) => {setPublishers([...publishers,response.data])})
    .catch((error) => {console.error(error)})
}   
