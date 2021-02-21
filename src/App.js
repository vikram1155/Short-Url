import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, Cards,  } from './components';
import Advanced from './pages/HomePage/Advanced';
import Boost from './pages/HomePage/Boost';
import Short from './pages/HomePage/Short';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Short/>

      <Advanced/>

      <Cards/>

      <Boost/>
      
      <Footer />
    </Router>
  );
}

export default App;
