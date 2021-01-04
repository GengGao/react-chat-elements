import React from 'react';
import { LocationMessage } from './LocationMessage';

export default { title: 'LocationMessage' };

export const Default = () => (
  <LocationMessage
    text="Location Message (Location doesnt render because of missing api key)"
    data={{ latitude: '48.202267', longitude: '16.325628' }}
  />
);
