import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Aboutus from './pages/Aboutus/Aboutus';
import Contactus from './pages/Contactus/Contactus';
import Booklet from './pages/Booklet/Booklet';
import SSTSE from './pages/SSTSE/SSTSE';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/contactus' component={Contactus} />
        <Route path='/booklet' component={Booklet} />
        <Route path='/SSTSE' component={SSTSE} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
