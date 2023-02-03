import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkFrom from './components/ImageListForm/ImageLinkFrom';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";




const particlesOption = {
  background: {
      color: {
          value: "#2d2d2d",
      },
  },
  fpsLimit: 60,
  interactivity: {
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onHover: {
              enable: true,
              mode: "repulse",
          },
          resize: true,
      },
      modes: {
          push: {
              quantity: 2,
          },
          repulse: {
              distance: 200,
              duration: 0.9,
          },
      },
  },
  particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 200,
          enable: true,
          opacity: 0.3,
          width: 1,
      },
      collisions: {
          enable: true,
      },
      move: {
          directions: "none",
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: true,
          speed: 4,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 700,
          },
          value: 100,
      },
      opacity: {
          value: 0.7,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 5 },
      },
  },
  detectRetina: true,
}

const App = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  
  return (
    <div className="App">
      <Particles className='particles' id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options= {particlesOption} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkFrom />
      {/* <Logo />
      <ImageLinkFrom />
      <FaceRecognition /> */}
    </div>
  );
 
}

export default App;