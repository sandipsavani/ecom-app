import React from 'react';
import {Route , Switch} from 'react-router-dom';
 import HomePage from './pages/HomePage/HomePage'
 import Shop from './pages/Shop/Shop'
 import SignInSignUp from './pages/SignInSignUp/SignInSignUp'
 import Header from './components/Header/Header'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop} />
        <Route excat path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
