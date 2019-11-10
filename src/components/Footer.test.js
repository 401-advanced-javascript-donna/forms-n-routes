import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  it('should render Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
