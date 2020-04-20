import React, { Component, FunctionComponent } from 'react';
import Navigation from './Navigation/Navigation';
import './App.css';
import Logo from './Logo/Logo'
import ImageLinkForm from './imageLinkForm/imageLinkForm'





function App() {

  return (
    <div className="App">
                  
      <Navigation/>
      <Logo/>
      <ImageLinkForm   />
      {/* <FaceRecongnition/> */}
    </div>
  );
}

export default App;
