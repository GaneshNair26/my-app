import React from 'react';
import { storiesOf, getStorybook } from '@storybook/react';
import { Button } from 'reactstrap';
import { text, boolean } from '@storybook/addon-knobs'
import {withInfo} from '@storybook/addon-info'
import { X, Search } from 'react-feather';

storiesOf("IconButton", module)
  .add("with text and color",  () => (
    <Button buttonText="Primary Button" size="lg" active={false} primary={true} block={false}  color="success" ></Button>
  ))