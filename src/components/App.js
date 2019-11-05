import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import List from './List';
import Detail from './Detail';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/list" component={List} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
