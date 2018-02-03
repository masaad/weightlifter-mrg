/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react';
import { bindActionCreators } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import AppBar from '../../../src/components/AppBar/AppBar';

describe('(Component) AppBar', () => {
  describe(`AppBar with no properties`, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <AppBar />
      );
    })

    it(`Contains the 'AppBar' class.`, () => {
      const el = wrapper.find('div.AppBar');
      expect(el).toBeTruthy();
    })
  })

  describe(`AppBar with properties`, () => {
    let wrapper;
    let middlewares, mockStore, store, dispatch;
    let appBarProps = {};

    beforeEach(() => {
      middlewares = [ thunk ];
      mockStore = configureMockStore(middlewares);
      store = mockStore({
        mockKey: `mockValue`,
      });
      appBarProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
          }, dispatch = jest.fn()),
        }
      }

      wrapper = shallow(
        <AppBar {...appBarProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
