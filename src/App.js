import React from 'react';
import './App.css';
import Navigation from './components/Navigation';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Logo />
        <ImageLinkFrom />
        <FaceRecognition /> */}
      </div>
    );
  }
 
}

export default App;
