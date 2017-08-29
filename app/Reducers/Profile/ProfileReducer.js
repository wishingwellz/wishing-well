export const ProfileReducer = (state={
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  // photo: '',
}, action) => {
  switch(action.type) {
    case 'SET_USERINFO': {
      return Object.assign({}, state, {
        username: action.payload.username || state.username,
        firstname: action.payload.firstname || state.firstname,
        lastname: action.payload.lastname || state.lastname,
        email: action.payload.email || state.email,
        // photo: action.payload.photo || state.photo
      })
    }
    default: {
      return state
    }
  }
}
