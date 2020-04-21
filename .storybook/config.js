import { configure } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";

import { addDecorator, addParameters } from "@storybook/react";

import { withInfo } from "@storybook/addon-info";
import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

withTests({
  results,
});
addDecorator(withInfo);

addDecorator(withKnobs);
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);