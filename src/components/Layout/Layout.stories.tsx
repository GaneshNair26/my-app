import React, { Component, FunctionComponent } from 'react';
import Navigation from './Navigation/Navigation';
import './App.css';
import Logo from './Logo/Logo'
import ImageLinkForm from './imageLinkForm/imageLinkForm'
import { storiesOf } from '@storybook/react'




storiesOf("Layout", module)

.add("Grid Layout", () => (

        <div>          
        <Navigation/>
        <Logo/>
        <ImageLinkForm   />
      </div>
   
  ));


