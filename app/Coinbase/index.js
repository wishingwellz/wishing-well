const Client = require('coinbase').Client;
const coinbaseKeys = require('../../config')

let client = new Client({
  'apiKey': coinbaseKeys.APIKey,
  'apiSecret': coinbaseKeys.APISecret,
});

module.exports = {
  client,
}
