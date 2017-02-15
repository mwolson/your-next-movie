import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
// import { spy } from 'sinon';
import AppHeader from '../index';

describe('<AppHeader />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <AppHeader />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
