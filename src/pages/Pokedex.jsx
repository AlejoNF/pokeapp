import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPokemon from '../components/pokedex/CardPokemon'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import Header  from '../components/shared/Header'
import '../pages/styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect (() => {
    if(typeSelected !== 'All Pokemons'){
      //Se ejecuta si se selecciono un tipo
      axios.get(typeSelected)
      .then(res => {
        const result = res.data.pokemon.map(e => e.pokemon)
        setPokemons(result)
      })
      .catch(err => console.log(err))
    }else{
      //Se ejecutara si quiero todos los pokemons 
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0`
    axios.get(URL)
    .then(res =>  setPokemons(res.data.results))
    .catch(err => console.log(err))
    }
  },[typeSelected])


  const userName = useSelector(state => state.userName) 


  //Logica de Paginacion 
  const [page,setPage] = useState(1)
  const [pokemonPerPage, setPokemonPerPage] = useState(15)
  const initialPokemon = (page - 1) * pokemonPerPage
                  // = initialPokemon + pokemonPerPage +  1
  const finalPokemon = page * pokemonPerPage


  return (
    <div className='pokedex'> 
     <header className= 'pokedex__header'>
      
      
      <div className='pokedex__wave-container'>
      <p className='pokedex__text' > <span className='pokedex__wave'>Welcome {userName}</span>,here you can find your favorite pokemon.</p>
      </div>
    </header>

    <aside className='pokedex__form-container'>
      <div className='pokedex__nav-container'>
        <SelectByType setTypeSelected = {setTypeSelected} setPage ={setPage}/>
        <InputSearch/>
      </div>
      &nbsp;
    
      <Pagination 
        page = {page}
        pagesLength = { pokemons && Math.ceil(pokemons.length / pokemonPerPage)}
        setPage = {setPage}
      />
    </aside>
    
    <main className='main__pokedex'>
      &nbsp;
      <div className='pokedex__card-container'>
        {
          pokemons?.slice(initialPokemon, finalPokemon).map(pokemon => (
            <CardPokemon
              key = {pokemon.url}
              url = {pokemon.url}
            />
          ))
        }
      </div>
    </main> 
    <Pagination 
        page = {page}
        pagesLength = { pokemons && Math.ceil(pokemons.length / pokemonPerPage)}
        setPage = {setPage}
      />
    </div>
    
    
  )
}

export default Pokedex