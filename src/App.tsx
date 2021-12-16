import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,  Switch} from 'react-router';
import Intro from './screens/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux';
import { store } from './store/store';
import Main from './screens/Main';

function App() {
  const isAuth = store.getState().auth.isAuthenticated;
  return (
   
      <Switch>
        <Route path="/post-login" component={Main} /> 
        <Route path="/" component={Intro} />
      </Switch>
  
  );
}

export default App;
