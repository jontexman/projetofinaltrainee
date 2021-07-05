import {api} from '../../services/api'
import React, { useState, useEffect, useRef } from 'react';

const [publishers, setPublishers] = useState([]);
const [id, setId] = useState([]);
const [name, setName] = useState('')



const deletePublishers = (event) => {
    event.preventDefault()
    api.destroy('publishers/destroy/'+ id, {
        publisher: {
            id: id,
        }
      }).then((response) => {setPublishers([...publishers,response.data])})
      .catch((error) => {console.error(error)})
}