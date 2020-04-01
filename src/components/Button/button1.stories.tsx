import { storiesOf, getStorybook } from '@storybook/react';

import * as React from 'react';
import Button from "./Button";
import { text, boolean } from '@storybook/addon-knobs'
storiesOf("Button", module)
  .add("with text", () => (
    <Button >Hellow Button</Button>
  ))
  .add('add with background 2', () => (
    <Button >😀 😎 👍 💯</Button>
  ))
  .add("Disabled Button", () => (
    <Button disabled={true} >Disabled</Button>
  ));