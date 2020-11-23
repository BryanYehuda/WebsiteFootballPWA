var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BJuXZgVnfdo6lIqPDyphqyu56kwAQ4RW6xFHTT8GQppxuPRnkMVRkQx_GGTQG4AfJEYHpRB9Q78KHq44MsakEXM",
   "privateKey": "OPPoG6urqeTfF3aecc0OqP54eJHREzDQPZ7EsaoEUuw"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/e5Xlg4SVt6o:APA91bETjWIT29mYh1oIC4cHi1kvhRmncL6M05s-rygdLg-oyIJyMZHD71fRzE8l2DQcFM4xnfsQlh3Y20rcCKxqB3E_Dxk_o34QYyirrKEo6y3bfC3m9yOaNBIx-aQ_tHEifN1cd_oT",
   "keys": {
       "p256dh": "BO4lZK4vRjRwsdGQMnV8fa7BhOQrN1QH1fKEdwOdG5OFHlBFGcj67OmI3QCjqAU5o/KIi6qNS2waHQyWbTlUtCI=",
       "auth": "9gVOuM8EQFa12S/qAXjU4w=="
   }
};
var payload = 'Welcome to Football Watch!';
 
var options = {
   gcmAPIKey: '411668443247',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);