import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('ListItem component', () => {
  it('should render ListItem', () => {
    const item = {
      _id: '5cf5679a915ecad153ab699d',
      name: 'Koh',
      photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/0/00/Koh.png/revision/latest?cb=20140124170917',
      gender: 'male'
    };
    const wrapper = shallow(<ListItem
      {...item} />);
    expect(wrapper).toMatchSnapshot();
  });
});
