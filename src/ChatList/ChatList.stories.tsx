import React from 'react';
import moment from 'moment';
import { ChatList } from './ChatList';

export default { title: 'ChatList' };

export const Default = () => (
  <ChatList
    dataSource={[
      {
        id: '1',
        date: moment().subtract(15, 'years').toDate(),
        avatar: 'https://picsum.photos/200',
        unread: 1,
        title: 'User 1',
        subtitle: 'Sub',
        isActive: true,
      },
      {
        id: '2',
        date: moment().subtract(15, 'years').toDate(),
        avatar: 'https://picsum.photos/201',
        unread: 0,
        title: 'User 2',
        subtitle: 'Sub',
      },
    ]}
  />
);
