import React from 'react'
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {useDispatch} from "react-redux";
// import {login} from "../../actions/auth";
import {startGoogleLogin, startLoginEmailPassword} from "../../actions/auth";

const LoginScreen = () => {

  const dispatch = useDispatch()

  const [values, handleInputChange] = useForm({
    email: 'bran@mail.com',
    password: '1231csd'
  })

  const {email, password} = values

  const handleLogin = (e) => {
    e.preventDefault()
    // dispatch(login(22222,'ssser'))
    dispatch(startLoginEmailPassword(email, password))


  }

  const handleLoginGoogle = () => {
    dispatch(startGoogleLogin()) 
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={handleLogin}>

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
        <button
          className='btn btn-primary btn-block'
          type='submit'>
          Login
        </button>

        <hr/>

        <div className='auth__social-networks'>
          <p>Login with social network</p>


          <div
            className="google-btn"
            onClick={handleLoginGoogle}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon"
                   src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                   alt="google button"/>
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to='/auth/register' className='link'>
          Create new account
        </Link>

      </form>

    </>
  )
}

export default LoginScreen
