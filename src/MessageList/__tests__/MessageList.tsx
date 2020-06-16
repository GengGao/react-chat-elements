import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import MessageList from '../MessageList';

describe('MessageList component', () => {
  it('should render without issues', () => {
    const component = shallow(<MessageList dataSource={[]} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
