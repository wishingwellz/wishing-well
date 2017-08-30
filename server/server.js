const express = require('express');
const path = require('path');
const parser = require('body-parser');
const Realm = require('realm');
const models = require('./dbModels/models.js');
const dotenv = require('dotenv').config();


let app = express();
let PORT = process.env.PORT || 9080;

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

Realm.Sync.User.login(process.env.DATABASE_URL, process.env.DATABASE_USERNAME, process.env.DATABASE_PASS, (error, user) => {
  if (!error) {
    Realm.open({
      sync: {
        user: user,
        url: process.env.WISHINGWELL_REALM_URL,
      },
      schema: [models.UserData, models.UserLogs]
    }).then(realm => {
      realm.write(() => {
        realm.create('UserData', {firstName: 'Freddy', lastName: 'Kruger', username: 'dreamEater', email: 'iEatKidsInTheirSleep@gmail.com', photo:'random.png' });
      });
      realm.write(() => {
        realm.create('UserLogs', {username: 'dreamEater', wellInput: 7, totalWellAmount: 35, description: "Went to the store to buy new knives, didn't buy one" });
      });
    });
  } else {
    throw error;
  }
});

app.post('/api', (req, res) => {
  //request needs to contain username
  console.log(req.body)
})


app.listen(PORT, () => {
  console.log('Listening on port, ', PORT);
})
