import React, {useEffect} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import {onAuthStateChanged, getAuth} from 'firebase/auth'
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";

const AppRouter = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
      }


    })
  }, [dispatch]);


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

export default AppRouter
