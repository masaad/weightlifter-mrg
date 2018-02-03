import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../../src/components/MainActionBar/MainActionBarContainer';

describe('(Container) MainActionBar', () => {
  it('Should return redux action.', () => {
    const dispatch = () => {};
    expect(mapDispatchToProps(dispatch).reduxActions).toBeTruthy();
  });
  it('Should return redux state.', () => {
    const state = {};
    expect(mapStateToProps(state).reduxState).toBeTruthy();
  });
});
