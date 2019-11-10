import React from 'react';
import { shallow } from 'enzyme';
import Detail from './Detail';

jest.mock('../services/api-call', () => ({
  getSingleCharacter() {
    return Promise.resolve([
      {
        '_id': '5cf5679a915ecad153ab68d3',
        'name': 'Appa',
        'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/6/65/Appa_flying.png/revision/latest?cb=20140517110636',
        'gender': 'male'
      }
    ]);
  }
}));


describe('Detail component', () => {

  it('renders', () => {
    const wrapper = shallow(
      <Detail
        match={{
          params: {
            name: 'arnold'
          }
        }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
