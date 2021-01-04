import React from 'react';
import moment from 'moment';
import { ChatItem } from './ChatItem';

export default { title: 'ChatItem' };

export const Default = () => (
  <ChatItem
    id="id"
    date={moment().subtract(15, 'years').toDate()}
    avatar={'https://picsum.photos/200'}
    title="title"
    subtitle="subtitle"
    statusColor="green"
    unread={2}
  />
);
