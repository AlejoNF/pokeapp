import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSearch.css'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim()}`)
    }

  return (
    <form className='pokedex__form' onSubmit={submit}>
        <input className='pokedex__input' id='search' type="text" placeholder='search a pokemon '/>
        <button className='pokedex__search-btn'>Search</button>
    </form>
  )
}

export default InputSearch