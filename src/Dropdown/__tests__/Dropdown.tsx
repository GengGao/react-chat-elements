import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Dropdown from '../Dropdown';

describe('Dropdown component', () => {
  it('should render without issues', () => {
    const component = shallow(<Dropdown items={[]} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
