import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../../src/components/AppBar/AppBarContainer';

describe('(Container) AppBar', () => {
  it('Should return redux action.', () => {
    const dispatch = () => {};
    expect(mapDispatchToProps(dispatch).reduxActions).toBeTruthy();
  });
  it('Should return redux state.', () => {
    const state = {};
    expect(mapStateToProps(state).reduxState).toBeTruthy();
  });
});
