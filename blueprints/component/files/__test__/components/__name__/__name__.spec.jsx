/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react';
import { bindActionCreators } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import <%= pascalEntityName %> from '../../../src/components/<%= pascalEntityName %>/<%= pascalEntityName %>';

describe('(Component) <%= pascalEntityName %>', () => {
  describe(`<%= pascalEntityName %> with no properties`, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <<%= pascalEntityName %> />
      );
    })

    it(`Contains the '<%= pascalEntityName %>' class.`, () => {
      const el = wrapper.find('div.<%= pascalEntityName %>');
      expect(el).toBeTruthy();
    })
  })

  describe(`<%= pascalEntityName %> with properties`, () => {
    let wrapper;
    let middlewares, mockStore, store, dispatch;
    let <%= camelEntityName %>Props = {};

    beforeEach(() => {
      middlewares = [ thunk ];
      mockStore = configureMockStore(middlewares);
      store = mockStore({
        mockKey: `mockValue`,
      });
      <%= camelEntityName %>Props = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
          }, dispatch = jest.fn()),
        }
      }

      wrapper = shallow(
        <<%= pascalEntityName %> {...<%= camelEntityName %>Props}/>
      )
    })

    it(`????`, () => {

    })
  })
})
