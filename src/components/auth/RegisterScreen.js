import React from 'react'
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import validator from 'validator'
import {useDispatch, useSelector} from "react-redux";

import {removeError, serError} from "../../actions/ui";
import {starRegister} from "../../actions/auth";

const RegisterScreen = () => {

  const dispatch = useDispatch()
  const {msgError} = useSelector(state => state.ui)

  const [values, handleInputChange] = useForm({
    name: 'brandon',
    email: 'bran@mail.co',
    password: '123',
    password2: '123',
  })


  const {name, email, password, password2} = values

  const handleSubmit = (e) => {
    e.preventDefault()


    if (isFormValid()) {
      console.log('Valid Form')
      dispatch(starRegister(email, password, name))
    }

  }

  const isFormValid = () => {

    if (name.trim().length === 0) {
      errorMessage('Name is required')
      return false
    } else if (!validator.isEmail(email)) {
      errorMessage('Email no valid')
      return false
    } else if (password !== password2 || password.length < 5) {
      errorMessage('Password invalid')
      return false
    }
    dispatch(removeError())

    return true
  }

  const errorMessage = (msg) => {
    dispatch(serError(msg))
  }


  return (
    <div>
      <>
        <h3 className='auth__title'>Register</h3>

        <form
          className='animate__animated animate__fadeIn animate__faster'
          onSubmit={handleSubmit}
        >


          {msgError && (

            <div className='auth__alert-error'>
              {msgError}
            </div>
          )}

          <input
            type='text'
            placeholder='name'
            name='name'
            className='auth__input'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
          />

          <input
            type='text'
            placeholder='email'
            name='email'
            className='auth__input'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}

          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            className='auth__input'
            value={password}
            onChange={handleInputChange}


          />
          <input
            type='password'
            placeholder='Confirm password'
            name='password2'
            className='auth__input'
            value={password2}
            onChange={handleInputChange}

          />
          <button
            className='btn btn-primary btn-block mb-5'
            type='submit'
          >
            Register
          </button>


          <Link to='/auth/login' className='link '>
            Aleady registered?
          </Link>

        </form>

      </>
    </div>
  )
}

export default RegisterScreen
