import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders a character', () => {
    const handleClick = () => {
      // eslint-disable-next-line no-console
      console.log('testing');
    };
    const wrapper = shallow(
      <Character 
        name="Test Title"
        photo="test image"
        handleClick={handleClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  
});
