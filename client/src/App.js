import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Desi from './pages/desi';
import Login from './pages/login';
import Signup from './pages/signup';
import SouthIndian from './pages/southIndian';
import Cart from './pages/cart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/desi" component={Desi} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/south-indian" component={SouthIndian} />
        <Route exact path="/cart" component={Cart} />

      </Switch>
    </div>
  );
}

export default App;
