import React from 'react';
import { FileMessage } from './FileMessage';

export default { title: 'FileMessage' };

export const Default = () => (
  <FileMessage
    text="This is a file message"
    data={{ size: '12MB', status: { download: false, loading: 20 } }}
  />
);
