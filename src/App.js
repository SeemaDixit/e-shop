import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

import SigninAndSignupPage from './pages/signin-signup/signin-signup';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ currentUser: user });
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({currentUser: userAuth});
    });
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path='/' component={Homepage} />
          <Route exact={true} path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
