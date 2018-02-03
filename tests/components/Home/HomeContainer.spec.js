import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../../src/components/Home/HomeContainer';

describe('(Container) Home', () => {
  it('Should return redux action.', () => {
    const dispatch = () => {};
    expect(mapDispatchToProps(dispatch).reduxActions).toBeTruthy();
  });
  it('Should return redux state.', () => {
    const state = {};
    expect(mapStateToProps(state).reduxState).toBeTruthy();
  });
});
