import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Default from './components/Default'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navigation from './components/Navigation'


function App {
    return (
        <BrowserRouter>
          <div>
            <Navigation/>
              <Switch>
                <Route path="/" component={Default} exact/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
              </Switch>
          </div>
        </BrowserRouter>
    );
}

export default App;
