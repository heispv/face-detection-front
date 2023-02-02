import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        {/* <Logo />
        <ImageLinkFrom />
        <FaceRecognition /> */}
      </div>
    );
  }
 
}

export default App;