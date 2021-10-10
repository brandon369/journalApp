import {types} from "../types/types";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut

} from 'firebase/auth';
// import { getAuth, signInWithPopup } from 'firebase/auth';
import {googleAuthProvider} from '../firebase/firebase-config'
import {finishLoading, startLoading} from "./ui";
import Swal from 'sweetalert2'




export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(login(user.id, user.displayName))
        dispatch(finishLoading())

      })
      .catch(e => {
        dispatch(finishLoading())
        Swal.fire('Error', 'Email or user incorrect', 'error')

      })

    // setTimeout(() => {
    //   dispatch(login(21232, 'Jaime'))
    // }, 3500)

  }
}


export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
      .then(({user}) => {
        console.log(user)
        dispatch(login(user.uid, user.displayName))
      });
  }
}

export const starRegister = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({user}) => {

        await updateProfile(user, {displayName: name});
        console.log(user)
        dispatch(login(user.id, user.displayName))

      })
      .catch(e => {
        Swal.fire('Error', 'Email exist', 'error')

      })
  }
}


export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }

})


export const startLogout = () => {

  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logout())
  }
}

export const logout = () => ({
  type: types.logout
})

