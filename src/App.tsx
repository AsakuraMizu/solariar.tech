import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Members from './pages/Members';

export default function App() {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={Home}/>
      <Route path='/projects' exact component={Projects}/>
      <Route path='/members' exact component={Members}/>
    </Router>
  );
}
