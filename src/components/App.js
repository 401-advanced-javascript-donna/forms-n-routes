import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../container/Home';
import List from '../container/List';
import Detail from '../container/Detail';
import './App.css';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/list/:search" component={List} />
          <Route exact path="/list" component={List} />
          <Route path="/character/:name" component={Detail} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}
