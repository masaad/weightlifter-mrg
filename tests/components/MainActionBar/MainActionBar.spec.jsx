/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react';
import { bindActionCreators } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import MainActionBar from '../../../src/components/MainActionBar/MainActionBar';

describe('(Component) MainActionBar', () => {
  describe(`MainActionBar with no properties`, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <MainActionBar />
      );
    })

    it(`Contains the 'MainActionBar' class.`, () => {
      const el = wrapper.find('div.MainActionBar');
      expect(el).toBeTruthy();
    })
  })

  describe(`MainActionBar with properties`, () => {
    let wrapper;
    let middlewares, mockStore, store, dispatch;
    let mainActionBarProps = {};

    beforeEach(() => {
      middlewares = [ thunk ];
      mockStore = configureMockStore(middlewares);
      store = mockStore({
        mockKey: `mockValue`,
      });
      mainActionBarProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
          }, dispatch = jest.fn()),
        }
      }

      wrapper = shallow(
        <MainActionBar {...mainActionBarProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
