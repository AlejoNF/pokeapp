import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/userName.slice'

const FormHome = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = event => {
        event.preventDefault()
        dispatch(setUserNameGlobal(event.target.name.value.trim()))
        navigate('/pokedex')

    }


  return (
    <form onSubmit={submit} className='home__form'>
        <input  id ='name' className='home__input' type="text" placeholder='Insert your name' />
        <button className='home__btn'>Catch them all!</button>
      </form>
  )
}

export default FormHome