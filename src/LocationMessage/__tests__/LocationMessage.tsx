import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import LocationMessage from '../LocationMessage';

describe('LocationMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <LocationMessage data={{ latitude: '123', longitude: '321' }} />,
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
