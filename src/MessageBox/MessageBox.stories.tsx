import React from 'react';
import moment from 'moment';
import { MessageBox } from './MessageBox';

export default { title: 'MessageBox' };

export const Default = () => (
  <MessageBox
    status="read"
    text="Text"
    title="Title"
    replyButton
    reply={{ message: 'Reply Text', title: 'Reply Title' }}
    date={moment().subtract(15, 'years').toDate()}
  />
);
