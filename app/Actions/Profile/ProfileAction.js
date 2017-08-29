export const username = (username) => {
  return {
    type: 'USERNAME',
    payload: username
  }
}
export const firstname = (firstname) => {
  return {
    type: 'FIRSTNAME',
    payload: firstname
  }
}
export const lastname = (lastname) => {
  return {
    type: 'LASTNAME',
    payload: lastname
  }
}
export const email = (email) => {
  return {
    type: 'EMAIL',
    payload: email
  }
}