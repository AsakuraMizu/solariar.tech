import React from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './page/home';
import Projects from './page/projects';
import Members from './page/members';
import Friends from './page/friends';
import About from './page/about';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={Home}/>
      <Route path='/projects' exact component={Projects}/>
      <Route path='/members' exact component={Members}/>
      <Route path='/friends' exact component={Friends}/>
      <Route path='/about' exact component={About}/>
    </Router>
  );
}

export default App;
