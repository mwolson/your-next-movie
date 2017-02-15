import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import { spy } from 'sinon';
import { initialState as searchMoviesContainer } from '../reducer';
import SearchMoviesContainer from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<SearchMoviesContainer />', () => {
  it('should render with default props', () => {
    const store = mockStore({ searchMoviesContainer });
    const wrapper = shallow(
      <SearchMoviesContainer store={store} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
