var paypal = require('paypal-rest-sdk');
const dotenv = require('dotenv').config();

paypal.configure({
  mode: 'sandbox', // Sandbox or live
  client_id: 'AbqXXPPr374AlPMJ7SU8XbzKAs1DIVGCdS7FGP9VkWmtHAJPNgTGe-xlg86Ixp1SY11Weo1wBSzarw5t',
  client_secret: 'EFPtlSnpiChrJPgU-fAOqjNQ7fvvSbmlq5MM_5IyuH4cN0rLZrzm0d2ikixp8itBfUbPuHVdKfQ_-GUd'
});

var cc_details = {
  type: 'visa',
  number: '4032036993851367',
  expire_month: '08',
  expire_year: '2022',
  external_customer_id: '123456'
};

paypal.credit_card.create(cc_details, function(error, credit_card){
  var credit_card_id;
  var external_customer_id;

  if(error){
    console.error(JSON.stringify(error));
  } else {
    // Card information needed to process payment
    credit_card_id = credit_card.id
    payer_id = credit_card.external_customer_id
    console.log('LOGGGGGGGGGGG', credit_card_id, payer_id)
    var payment_data = {
      intent: 'sale',
      payer: {
        payment_method: 'credit_card',
        funding_instruments: [{
          credit_card_token: {
            credit_card_id: credit_card_id,
            payer_id: payer_id
          }
        }]
      },
      transactions: [{
        amount: {
          total: '7.47',
          currency: 'USD',
          details: {
            subtotal: '7.41',
            tax: '0.03',
            shipping: '0.03'
          }
        },
        description: 'This is the payment transaction description.'
      }]
    };

    paypal.payment.create(payment_data, function(error, payment){
      if(error){
        console.error(JSON.stringify(error));
      } else {
        console.log(JSON.stringify(payment));
      }
    });
  }
})
