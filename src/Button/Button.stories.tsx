import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button } from './Button';

export default { title: 'Button' };

export const Default = () => (
  <Button
    title="title"
    text="text"
    icon={{ component: <AddIcon />, float: 'left', color: 'green' }}
  />
);
