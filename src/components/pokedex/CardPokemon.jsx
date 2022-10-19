import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPokemon.css'

const CardPokemon = ({url}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))

    },[])

    const navigate = useNavigate()
    
    const handleClick = () =>  {
        navigate(`/pokedex/${pokemon.id}`)
    }

  return (
    <article className={`card-pokemon border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
        <header className={`card-pokemon__header bg-${pokemon?.types[0].type.name}`}>
            <img className='card-pokemon__sprite'
             src={pokemon?.sprites.other['official-artwork'].front_default}
             alt=""
            />
        </header>

        <section className='card-pokemon__body'>
            <h3 className={`card-pokemon__name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className='card-pokemon__types-container'>
                {
                    pokemon?.types.map(type => (
                        <li key={type.slot} className='card-pokemon__type'>{type.type.name}</li>
                    ))
                }
            </ul>
            <p className='card-pokemon__type-label'>Type</p>
            
        </section>

        <ul className='card-pokemon__stats-container'>
                {
                    pokemon?.stats.map(stat=>(
                        <li key={stat.stat.name} className='card-pokemon__stat'>
                        <span className='card-pokemon__stat-label'> {stat.stat.name}</span>
                        <span className={`card-pokemon__stat-number letter-${pokemon?.types[0].type.name}`}> {stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>

    </article>
  )
}

export default CardPokemon  