import { storiesOf, getStorybook } from '@storybook/react';

import * as React from 'react';
import Button from "./Button";
import { text, boolean } from '@storybook/addon-knobs'
storiesOf("Button", module)
  .add("with text and color", () => (
    <Button  backgroundColor={"Blue"}  click={true} >Click Me!</Button>
  ))
  .add('Emoji', () => (
    <Button backgroundColor={""}  >😀 😎 👍 💯</Button>
  ))
  .add("Disabled Button", () => (
    <Button backgroundColor={""}  disabled={true}  >Disabled</Button> 
  ))
  .add("Button with icon",
  () => (<Button backgroundColor="White" disabled={false}  >Icon</Button> 
  ));
