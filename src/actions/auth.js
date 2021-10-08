import {types} from "../types/types";
import { getAuth, signInWithPopup } from 'firebase/auth';
import { googleAuthProvider} from '../firebase/firebase-config'

export const startLoginEmailPassword = (email, password) => {

  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(21232, 'Jaime'))
    }, 3500)
  }
}


export const startGoogleLogin = () => {
  return(dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
      .then(({user}) =>{
        console.log(user)
        dispatch(login(user.uid, user.displayName))
      });
  }
}


export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }

})
