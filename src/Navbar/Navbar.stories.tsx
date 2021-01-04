import React from 'react';
import { Navbar } from './Navbar';

export default { title: 'Navbar' };

export const Default = () => (
  <Navbar left={'Left'} center={'Center'} right={'Right'} />
);
