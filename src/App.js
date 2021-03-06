import React from 'react';
import './App.css';
import Menu from './components/01-Menu/Menu';
import { ReactComponent as Logo } from './resources/a_01_images/gymcal_logo.svg';
import Signup from './components/04-Frontpage/signup';
import Credits from './components/04-Frontpage/credits';
import Download from './components/04-Frontpage/download';
import Tagline from './components/04-Frontpage/tagline';


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Logo className="logoStyle" />
      <Tagline />
      <Menu />
      <Signup />
      <Credits />
      <Download />
    </div>
  );
  }
}

export default App;
