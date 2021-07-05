import {api} from '../../services/api'
import React, { useState, useEffect, useRef } from 'react';

const [games, setGames] = useState([])
const [name, setName] = useState('')
const [price, setPrice] = useState('')
const [description, setDescription] = useState('')
const [picture, setPicture] = useState('')
const [trailer, setTrailer] = useState('')
const [publisher_id, setPublisher_id] = useState([])

const addGames = (event) => {
    event.preventDefault()
    api.create('game/create', {
        game: {
            name: name,
            price:price,
            category: category,
            description: description,
            picture: picture,
            trailer: trailer,
            publisher_id: publisher_id
        }
      }).then((response) => {setGames([...games, response.data])})
      .catch((error) => {console.error(error)})
}