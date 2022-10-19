import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {
  return (
    <article className='home'>
      <img className='home__img' src="./img/home/pokedex.png" alt="" />
      <header className='home__header'>
      <h2 className='home__subtitle'> Hi Trainer!</h2>
      <p  className='home__text'> Give me your name to see the pokedex</p>
      </header>
      
      <FormHome/>
    </article>
  )
}

export default Home