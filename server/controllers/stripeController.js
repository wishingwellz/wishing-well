const dotenv = require('dotenv').config();
var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


module.exports = {
  addACard: (req, res) => {
    stripe.tokens.create({
      card: {
        "number": req.body.number,
        "exp_month": req.body.exp_month,
        "exp_year": req.body.exp_year,
      }
    }, function(err, token) {
      if (err) {
        console.log(err);
      } else {
        stripe.customers.create({
          description: 'new stripe customer',
          source: token.id // obtained with Stripe.js
        }, function(err, customer) {
          if (err) {
            console.log(err);
          } else {
            res.send(customer.id)
          }
        });
      }
    })

  //   stripe.accounts.create({
  //     type: 'standard',
  //     country: 'US',
  //     email: 'austenesus@g.ucla.edu'
  //   }, function(err, account) {
  //     if (err) {
  //       console.log(err)
  //     }
  //     console.log(account)
  //   });
  // }
  }
}
// stripe.charges.create({
//   amount: 50,
//   currency: "usd",
//   source: token.id, // obtained with Stripe.js
//   description: "Charge for austenesus@gmail.com"
// }, function(err, charge) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(charge)
//   }
// });



// stripe.charges.create({
//   amount: 0.50,
//   currency: "usd",
//   source: '', // obtained with Stripe.js
//   description: "Charge for austenesus@gmail.com"
// }, function(err, charge) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(charge)
//   }
// });

// stripe.charges.create({
//   amount: 50,
//   currency: 'usd',
//   customer: '',
// }).then(data => console.log(data))
