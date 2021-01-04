import React from 'react';
import { ReplyMessage } from './ReplyMessage';

export default { title: 'ReplyMessage' };

export const Default = () => (
  <ReplyMessage
    photoURL={'https://picsum.photos/200'}
    title="Title"
    message="Message Text"
  />
);
