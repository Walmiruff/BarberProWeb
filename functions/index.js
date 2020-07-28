const functions = require('firebase-functions');

const admin = require('firebase-admin');


admin.initializeApp();

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const Stripe = require('stripe');
const stripe = Stripe('sk_test_Itd3DY0Lggdlq0v9qFfcFsMi');
// const stripe = require('stripe')(functions.config().stripe.testkey);

//1. Create the Stripe Customer on Signup

exports.createStripeCustomer = functions.auth.user().onCreate(event => {
  // user auth data
  const user = event;


  // register Stripe user
  return stripe.customers.create({
    email: user.email,
  }).then(customer => {
    /// update database with stripe customer id
    const updates = {}
    updates[`/customers/${customer.id}`] = user.uid

    updates[`/users/${user.uid}/customerId`] = customer.id
    updates[`/users/${user.uid}/email`] = user.email


    return admin.database().ref().update(updates);
  });
});



//2.0 Stripe Subscription Cloud Function en

exports.createSubscription = functions.database.ref('/users/{uid}/pro-membership/token').onWrite((change, context) => {


  const tokenId = change.after.val();
  const userId = context.params.uid;


  admin.database().ref(`users/${userId}/pro-membership/plan`).once('value').then(snapshot => {
    return plans = snapshot.val();
  }).catch(err => console.log(err));



  if (!tokenId) throw new Error('token missing');

  return admin.database().ref(`users/${userId}`).once('value').then(snapshot => snapshot.val()).then(user => {
    return stripe.subscriptions.create({
      customer: user.customerId,
      trial_period_days: 1,
      items: [
        {
          plan: plans,
        },
      ]
    }, (err, subscription) => {
      console.log(err);
      (admin.database().ref(`/users/${userId}/pro-membership`).update({ status: 'active', sub: subscription.id }));
    }
    )

  }).catch(err => console.log(err))

});





//3. Handle Recurring Payments with Webhooks

exports.recurringPayment = functions.https.onRequest((req, res) => {

  const hook = req.body.type;
  const data = req.body.data.object;

  if (!data) throw new Error('missing data');

  return admin.database().ref(`/customers/${data.customer}`).once('value').then(snapshot => snapshot.val()).then(userId => {


    const ref = admin.database().ref(`/users/${userId}/pro-membership`)

    // Handle successful payment webhook
    if (hook === 'invoice.payment_succeeded') {
      return ref.update({ status: 'active' });
    }

    // Handle failed payment webhook
    if (hook === 'invoice.payment_failed') {
      return ref.update({ status: 'pastDue' });
    }

    throw new Error('not a matching webhook')

  })
    .then(() => res.status(200).send(`successfully handled ${hook}`))
    .catch(err => res.status(err).send(`error handling ${hook}`))

});


//4. Send Message OneSignal

exports.sendOneSignal = functions.database.ref('/onesignal/{uid}/data').onUpdate((change, context) => {

  
  const userId = context.params.uid;



  var sendNotification = function (data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8"
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };

    var https = require('https');
    var req = https.request(options, res => {
      res.on('data', data => {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });

    req.on('error', e => {
      console.log("ERROR:");
      console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
  };


   admin.database().ref(`onesignal/${userId}/data/contents/en`).once('value').then(snapshot => {
    return bodymsg = snapshot.val();
  }).catch(err => console.log(err));



   admin.database().ref(`onesignal/${userId}/data/include_player_ids/0`).once('value').then(snapshot => {
    return userMobile = snapshot.val();
  }).catch(err => console.log(err));



  var message = {
    app_id: "baeb0de8-4cee-4b31-ad72-81b3532443f1",
    contents: { "en": bodymsg },
    include_player_ids: [userMobile]
  }

  return sendNotification(message);


});
