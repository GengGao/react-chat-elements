import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ChatItem from '../ChatItem';

describe('ChatItem component', () => {
  it('should render without issues', () => {
    const component = shallow(<ChatItem />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
