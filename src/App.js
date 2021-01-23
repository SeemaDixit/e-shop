import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={Homepage} />
        <Route exact={true} path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
