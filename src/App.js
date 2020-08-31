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
                <Route exact path='/full' component={FullCard} />
                <Route path='/compact' component={CompactCard} />
                <Route path='/mini' component={MiniCard} />
        </Switch>
        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
