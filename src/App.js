import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

import SigninAndSignupPage from './pages/signin-signup/signin-signup';
import Header from './components/header/header';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={Homepage} />
        <Route exact={true} path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninAndSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
