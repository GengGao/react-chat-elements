import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ChatList from '../ChatList';

describe('ChatList component', () => {
  it('should render without issues', () => {
    const component = shallow(<ChatList dataSource={[]} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
