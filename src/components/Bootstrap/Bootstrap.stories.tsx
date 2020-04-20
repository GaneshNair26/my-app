import React, {  } from 'react';
import './App.css';
import { storiesOf } from '@storybook/react'
import Login from './login.component';
import Signup from './signup.component';
import App from './App';




storiesOf("Bootstrap", module)

.add("Bootstrap test", () => (

        <div>          
        <App/>
        
      </div>
   
  ));
