import {api} from '../../services/api'
import React, { useState, useEffect, useRef } from 'react';

const [categories, setCategories] = useState([]);
const [name, setName] = useState('')

const addCategories = (event) => {
    event.preventDefault()
    api.post('category/create', {
        category: {
            name: name,
        }
      }).then((response) => {setCategories([...categories,response.data])})
      .catch((error) => {console.error(error)})
}
