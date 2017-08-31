// const client = require('../Coinbase/index.js');
let Client = require('coinbase').Client;
const dotenv = require('dotenv').config();

let client = new Client({
  'apiKey': process.env.COINBASE_KEY,
  'apiSecret': process.env.COINBASE_SECRET,
});

module.exports = {
  addAWallet: (req, res) => {
    console.log('HEEEEERE')
    client.createAccount({'name': req.body.UID}, function(err, account) {
      client.getAccount(account.id, function(err, account) {
        account.createAddress(null, function(err, address) {
          res.send(address.address);
        });
      });
    })
  }
}
