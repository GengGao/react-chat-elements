import React from 'react';
import { Avatar } from './Avatar';

export default { title: 'Avatar' };

export const circleLetterItem = () => (
  <Avatar size="xlarge" letterItem={{ id: 'AB', letter: 'AB' }} type="circle" />
);

export const circleImage = () => (
  <Avatar type="circle" size="xlarge" src={'https://picsum.photos/200'} />
);
