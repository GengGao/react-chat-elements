import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Dropdown } from './Dropdown';

export default { title: 'Dropdown' };

export const Default = () => (
  <Dropdown
    title="Title"
    buttonProps={{ text: 'Click me' }}
    items={[{ icon: { component: <AddIcon /> }, text: 'Add' }]}
  />
);
