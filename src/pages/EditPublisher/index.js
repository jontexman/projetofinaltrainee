import {api} from '../../services/api'
import React, { useState, useEffect, useRef } from 'react';

const [publishers, setPublishers] = useState([]);
const [id, setId] = useState([]);
const [name, setName] = useState('')

const editPublishers = (event) => {
    event.preventDefault()
    api.update('publishers/update/' + id, {
        publisher: {
        name: name,
    }
  }).then((response) => {setPublishers([...publishers,response.data])})
  .catch((error) => {console.error(error)})
}