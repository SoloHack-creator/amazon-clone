const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
  'sk_test_51HWz3SENAdZts6RnMxHGDXBwAcIQpGG2iJ4SHQyji8FomW0XBZDRdPCyPkRsbTuJO8NPQTwgXFmMVMQyu3V3BHcu00J26vlPBs'
);

//API

//App config

const app = express();

app.use(cors({ origin: true }));

//Middleware

app.use(express.json());

//Api routes

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  console.log('inside  create');
  const total = request.query.total;
  const email = request.query.email;

  console.log('req recieved', total, email);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'inr',
    receipt_email: 'ankit.mit1234@gmail.com',
  });

  console.log('paymentIntent,', paymentIntent);
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    // receipt_email: paymentIntent.email,
  });
});

//!creating url
// app.get('/test', (request, response) =>
//   response.status(200).send('hello test')
// );

//listen command

exports.api = functions.https.onRequest(app);
