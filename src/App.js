import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkFrom from './components/ImageListForm/ImageLinkFrom';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: "",
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }
    
  render() {
    return (
        <div className="App">
          <div className='particles'>
            <ParticlesBackground />
          </div>
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkFrom onInputChange={this.onInputChange}/>
          {/* <Logo />
          <ImageLinkFrom />
          <FaceRecognition /> */}
        </div>
      );
  }
}

export default App;
