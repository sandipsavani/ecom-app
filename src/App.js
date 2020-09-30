import React from 'react';
import {Route , Switch} from 'react-router-dom';
 import HomePage from './pages/HomePage/HomePage'
 import Shop from './pages/Shop/Shop'
 import SignInSignUp from './pages/SignInSignUp/SignInSignUp'
 import Header from './components/Header/Header'
 import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: '',
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }
  
  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={Shop} />
          <Route excat path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
