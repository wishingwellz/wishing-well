let UserData = {
  name: 'UserData',
  properties: {
    firstName: {type: 'string'},
    lastName: {type: 'string'},
    username: {type: 'string'},
    email: {type: 'string'},
  }
};

let UserLogs = {
  name: 'UserLogs',
  properties: {
    username: {type: 'string'},
    wellInput: {type: 'int'},
    totalWellAmount: {type: 'int'},
    description: {type: 'string'},
  }
}

module.exports = {
  UserData,
  UserLogs
}
