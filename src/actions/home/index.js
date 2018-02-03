import { MY_ACTION_TYPE } from 'constants/myActionGroup/myActionTypeFile'

export const home = data => {
  return {
    type: MY_ACTION_TYPE,
    payload: data
  }
}

// export const homeThunk = () => (dispatch, getState) => {
//   const {} = getState()
//   dispatch(
//     home({})
//   )
//   return null
// }
