export const ProfileReducer = (state={
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  bio: '',
  uid: ''
}, action) => {
  switch(action.type) {
    case 'SET_USERINFO': {
      return Object.assign({}, state, {
        username: action.payload.username || state.username,
        firstname: action.payload.firstname || state.firstname,
        lastname: action.payload.lastname || state.lastname,
        email: action.payload.email || state.email,
        bio: action.payload.bio || state.bio,
        uid: action.payload.uid || state.uid
      })
    }
    default: {
      return state
    }
  }
}
