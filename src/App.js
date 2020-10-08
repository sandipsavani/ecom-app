import React from 'react';
import {Route , Switch, Redirect} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import Shop from './pages/Shop/Shop'
import SignInSignUp from './pages/SignInSignUp/SignInSignUp'
import Header from './components/Header/Header'
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-actions'
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
  const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });

        });
      }

      setCurrentUser(userAuth);
    });
  }
  
  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={Shop} />
          <Route excat path='/signin' render={ ()=> this.props.currentUser ? ( < Redirect to='/' /> ) : (< SignInSignUp />) } />
        </Switch>
      </div>
    );
  }

}

const mapStateToDispatch = ({ user}) =>  ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToDispatch , mapDispatchToProps)(App);
