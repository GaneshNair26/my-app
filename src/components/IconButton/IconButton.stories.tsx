import React from 'react';
import { storiesOf, getStorybook } from '@storybook/react';
import { Button } from 'reactstrap';
import { text, boolean,button, color} from '@storybook/addon-knobs'
import {withInfo} from '@storybook/addon-info'
//import { X, Search, Camera } from 'react-feather';
import './style'
import Cam from './Icon'

storiesOf("IconButton", module)
  .add("Primary Button",  () => (
    <Button buttonText="Primary Button"  active={false} primary={true} block={false}  color="primary" >Primary button 
    </Button>
  ))
  .add("Danger Button",  () => (
    <Button buttonText="Secondary Button"  active={false} primary={true} block={false}  color="danger" >
      Danger
    </Button>
  ))
  .add("Button with Multiple props",
  () => (<Button  buttonText={
    text("Disabled?", "Disabled")
      
  } 
  Icon={Cam}
  disabled={boolean("Disabled", false)}   >Button </Button> 
  ))
 
  .add("Button with Multiple colors",
  () => (<Button  buttonText={
    color("primary?","primary") 
    
  } 
   
   >Button </Button> 
  ));