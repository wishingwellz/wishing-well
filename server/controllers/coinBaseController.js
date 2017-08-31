// const client = require('../Coinbase/index.js');

var Client = require('coinbase').Client;

var coinbaseKeys = require('../../config')

let client = new Client({
  'apiKey': 'DCWHBmzhiE3nzm2M',
  'apiSecret': 'pnDwna2by7RzRt1TdanbIkwfSxBFohcQ',
});

module.exports = {
  addAWallet: (req, res) => {
    console.log(req.body)
    client.getAccounts({}, function(err, accounts) {
      accounts.forEach(function(acct) {
        console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency + ' ' + acct.id);
        acct.getTransactions(null, function(err, txns) {
          txns.forEach(function(txn) {
            console.log('txn: ' + txn.id);
          });
        });
      });
    });
    client.createAccount({'name': req.body.email}, function(err, acct) {
      console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
      console.log(acct)
    })
  }
}
