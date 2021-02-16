import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SigninAndSignupPage from './pages/signin-signup/signin-signup';
import CheckoutPage from './pages/checkout/checkout';

import Header from './components/header/header';
import { setCurrentUser } from './redux/user/user.actions';
import  { selectCurrentUser} from './redux/user/user.selector'

import './App.css';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ currentUser: user });
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact={true} path='/' component={Homepage} />
          <Route exact={true} path='/shop' component={ShopPage} />
          <Route exact={true} path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={()=> 
              this.props.currentUser ? (
              <Redirect to='/' />
              ) : (
              <SigninAndSignupPage />
              )
            } 
          />
        </Switch>
      </div>
    );
  }
}

 const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
 });

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
