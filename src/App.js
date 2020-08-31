import React from 'react';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import FullCard from './FullCard';
import MiniCard from './MiniCard';
import CompactCard from './CompactCard';

function App() {
  return (
    <BrowserRouter>
      <div className="hero">
        <header className="hero-header">
        <Switch>
                <Route exact path='/' component={FullCard} />
                <Route exact path='/full' component={FullCard} />
                <Route exact path='/compact' component={CompactCard} />
                <Route exact path='/mini' component={MiniCard} />
        </Switch>
        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
