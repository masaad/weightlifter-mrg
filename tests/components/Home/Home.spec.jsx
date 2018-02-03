/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react';
import { bindActionCreators } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import Home from '../../../src/components/Home/Home';

describe('(Component) Home', () => {
  describe(`Home with no properties`, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Home />
      );
    })

    it(`Contains the 'Home' class.`, () => {
      const el = wrapper.find('div.Home');
      expect(el).toBeTruthy();
    })
  })

  describe(`Home with properties`, () => {
    let wrapper;
    let middlewares, mockStore, store, dispatch;
    let homeProps = {};

    beforeEach(() => {
      middlewares = [ thunk ];
      mockStore = configureMockStore(middlewares);
      store = mockStore({
        mockKey: `mockValue`,
      });
      homeProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
          }, dispatch = jest.fn()),
        }
      }

      wrapper = shallow(
        <Home {...homeProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
