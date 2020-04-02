import { storiesOf, getStorybook } from '@storybook/react';

import * as React from 'react';
import Button from "./Button";
import { text, boolean } from '@storybook/addon-knobs'
storiesOf("Button", module)
  .add("with text and color", () => (
    <Button background={"red"}  disabled={false} click={true} >Hellow Button</Button>
  ))
  .add('Emoji', () => (
    <Button background={""} disabled={false} click={false}>😀 😎 👍 💯</Button>
  ))
  .add("Disabled Button", () => (
    <Button background={"red"}  disabled={true} click={false} >Disabled</Button> 
  ));