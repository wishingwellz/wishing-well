const dotenv = require('dotenv').config();

var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

stripe.tokens.create({
  card: {
    "number": '',
    "exp_month": 00,
    "exp_year": 0000,
  }
}, function(err, token) {
  if (err) {
    console.log(err);
  } else {
    // stripe.customers.create({
    //   description: 'Customer for austenesus@gmail.com',
    //   source: token.id // obtained with Stripe.js
    // }, function(err, customer) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(customer)
    //   }
    // });
    stripe.charges.create({
      amount: 50,
      currency: "usd",
      source: token.id, // obtained with Stripe.js
      description: "Charge for austenesus@gmail.com"
    }, function(err, charge) {
      if (err) {
        console.log(err)
      } else {
        console.log(charge)
      }
    });

  }
});

// stripe.charges.create({
//   amount: 0.50,
//   currency: "usd",
//   source: 'cus_BJZunq3hkRU5Ip', // obtained with Stripe.js
//   description: "Charge for austenesus@gmail.com"
// }, function(err, charge) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(charge)
//   }
// });
