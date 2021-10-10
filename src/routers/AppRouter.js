import React, {useEffect, useState} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import {onAuthStateChanged, getAuth} from 'firebase/auth'
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";

const AppRouter = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }

      setChecking(false)


    })
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <h1>Loading...</h1>
    )

  } else {


    return (
      <Router>
        <div>
          <Switch>
            <Route path='/auth' component={AuthRouter}/>
            <Route exact path='/' component={JournalScreen}/>
            <Redirect to='/auth/login'/>

          </Switch>
        </div>

      </Router>

    )
  }
}

export default AppRouter
