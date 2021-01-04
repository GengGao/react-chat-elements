import React from 'react';
import { PhotoMessage } from './PhotoMessage';

export default { title: 'PhotoMessage' };

export const Default = () => (
  <PhotoMessage
    data={{
      uri: 'https://picsum.photos/200',
    }}
    text="Photo Message"
  />
);
