export const ProfileReducer = (state={
  username: '',
  firstname: '',
  lastname: '',
  email: ''
}, action) => {
  switch(action.type) {
    case 'USERNAME': {
      return Object.assign({}, state, {
        username: action.payload
      })
    }
    case 'FIRSTNAME': {
      return Object.assign({}, state, {
        firstname: action.payload
      })
    }
    case 'LASTNAME': {
      return Object.assign({}, state, {
        lastname: action.payload
      })
    }
    case 'EMAIL': {
      return Object.assign({}, state, {
        email: action.payload
      })
    }
    default: {
      return state
    }
  }
}