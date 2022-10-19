import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
  <div>
    <header className='header'>
     
        <div className='header__black'>
            <div className='header__red'></div>
            <div className='header__circle'>
            <div className='header__circle-int'></div>
            </div>
        </div>

    </header>
    
    <img className='header__img' src="./img/pokedex/pokedex.png" alt="" />
  </div>
    
  )
}

export default Header



    
