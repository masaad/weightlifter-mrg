/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react';
import { bindActionCreators } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import App from '../../../src/components/App/App';

describe('(Component) App', () => {
  describe(`App with no properties`, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <App />
      );
    })

    it(`Contains the 'App' class.`, () => {
      const el = wrapper.find('div.App');
      expect(el).toBeTruthy();
    })
  })

  describe(`App with properties`, () => {
    let wrapper;
    let middlewares, mockStore, store, dispatch;
    let appProps = {};

    beforeEach(() => {
      middlewares = [ thunk ];
      mockStore = configureMockStore(middlewares);
      store = mockStore({
        mockKey: `mockValue`,
      });
      appProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
          }, dispatch = jest.fn()),
        }
      }

      wrapper = shallow(
        <App {...appProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
