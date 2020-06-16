import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import SpotifyMessage from '../SpotifyMessage';

describe('SpotifyMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(<SpotifyMessage />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
