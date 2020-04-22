import { storiesOf, getStorybook } from '@storybook/react';
import { text, boolean, number,select, color} from '@storybook/addon-knobs'
import React from 'react';
import Button from './Button';
import { Button as Nbutton } from 'reactstrap';
import {withInfo} from '@storybook/addon-info'
import { IconButton, IIconProps, IContextualMenuProps, Stack, Link } from 'office-ui-fabric-react';
import { X, Search } from 'react-feather';
import {actions, decorate} from '@storybook/addon-actions'

import { withTests } from '@storybook/addon-jest';



storiesOf("Button", module)
  .add("Search Button",  () => (
    <Button buttonText="Button with TExt" backgroundColor={""} flag={2} color={""} 
   
     > Search</Button>
  ))
  .add("Close Button",  () => (
    <Button buttonText="Button with" backgroundColor={""} flag={1} color={"blue"} 
     > Close</Button>
  ))
  .add('Emoji', () => (
    <Button buttonText="" backgroundColor={""}   >😀 😎 👍 💯</Button>
  ))
  .add("Button with Knobs",
  () => (<Button  buttonText="Button with" backgroundColor={color("Background","white","Background")} 
  flag={number("Icons from 1-3",0)} color={color("Color","Black","Color")}
  > Button Knobs</Button> 
  ));
