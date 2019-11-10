import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  it('should render Form', () => {
    const wrapper = shallow(<Form
      search="test search"
      handleChange={() => { }}
      handleSubmit={() => { }}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
