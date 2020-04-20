import { storiesOf, getStorybook } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs'
import React from 'react';
import Button from './Button';
import {withInfo} from '@storybook/addon-info'


import './style.css'
import { IconButton, IIconProps, IContextualMenuProps, Stack, Link } from 'office-ui-fabric-react';

import { X, Search } from 'react-feather';
storiesOf("Button", module)
  .add("with text and color",  () => (
    <Button  backgroundColor={""} color={"blue"} click={true} >Click Me!</Button>
  ))
  .add('Emoji', () => (
    <Button  backgroundColor={""}  >😀 😎 👍 💯</Button>
  ))
  .add("Disabled Button", () => (
    <Button backgroundColor={"black"}  disabled={true}  >Disabled</Button> 
  ))
  .add("Button with icon",
  () => (<Button backgroundColor="" disabled={false}  >Icon</Button> 
  ));
 
  storiesOf("IconButton", module)
  .add("with text and color", () => (
    <IconButton   color={"blue"} >Click Me!</IconButton>
  ))
