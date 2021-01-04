import React from 'react';
import moment from 'moment';
import { MessageList } from './MessageList';

export default { title: 'MessageList' };

export const Default = () => (
  <MessageList
    dataSource={[
      {
        text: 'Text 1',
        title: 'Title 1',
        date: moment().subtract(15, 'years').toDate(),
      },
      {
        text: 'Text 2',
        title: 'Title 2',
        date: moment().subtract(15, 'years').toDate(),
        position: 'right',
      },
    ]}
  />
);
