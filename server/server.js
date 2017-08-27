const express = require('express');
const path = require('path');
const parser = require('body-parser');
const Realm = require('realm');
const models = require('./serverModels/models.js');
const dotenv = require('dotenv').config();

let app = express();
let PORT = process.env.PORT || 4000;

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

const token = process.env.ADMIN_TOKEN;
const user = Realm.Sync.User.adminUser(token);

const realm = new Realm({
  sync: {
    user: user,
    url: 'realm://localhost:9080/wishingWell',
  },
  schema: [models.UserData, models.UserLogs]
})

realm.write(() => {
  realm.create('UserData', {firstName: 'Freddy', lastName: 'Kruger', username: 'dreamEater', email: 'iEatKidsInTheirSleep@gmail.com' });
});

realm.write(() => {
  realm.create('UserLogs', {username: 'dreamEater', wellInput: 7, totalWellAmount: 35, description: "Went to the store to buy new knives, didn't buy one" });
});


// Realm.Sync.User.register('http://localhost:9080', 'austenesus@g.ucla.edu', 'R!RR!r1rr1', (error, user) => { console.log('Account created') });

app.get('/', (req, res) => {
  res.send()
})

app.listen(PORT, () => {
  console.log('Listening on port, ', PORT);
})
