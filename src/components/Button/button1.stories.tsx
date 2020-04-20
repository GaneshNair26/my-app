import { storiesOf, getStorybook } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs'
import React from 'react';
import Button from './Button';

import {withInfo} from '@storybook/addon-info'



import { IconButton, IIconProps, IContextualMenuProps, Stack, Link } from 'office-ui-fabric-react';

import { X, Search } from 'react-feather';
storiesOf("Button", module)
  .add("with text and color",  () => (
    <Button buttonText="Button with TExt" backgroundColor={""} color={"blue"} click={true} >Click Me!</Button>
  ))
  .add('Emoji', () => (
    <Button buttonText="" backgroundColor={""}  >😀 😎 👍 💯</Button>
  ))
  
  .add("Button with Multiple props",
  () => (<Button  buttonText={text("Button Text", "Disabled")}

  disabled={boolean("Disabled", false)} backgroundColor="red"   >Button </Button> 
  ));
 
  
