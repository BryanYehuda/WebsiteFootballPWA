var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BJuXZgVnfdo6lIqPDyphqyu56kwAQ4RW6xFHTT8GQppxuPRnkMVRkQx_GGTQG4AfJEYHpRB9Q78KHq44MsakEXM",
   "privateKey": "D8s-5D6Flhf39KkBDy7GYfMro9I1uGOJTvlZxh5tEBg"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/eFRS7mn50yg:APA91bE-qtbS2ByO38dau3U4V2Py2MHR2ICfwCqHddctVbnC4YAPBXV9Muc6iOXag0pEDPnwnl_oJkOvexisj7GEQH6dGxcmOyYPrEzU49Mn6ETyqPNBfRiH-axNl6_1uBlU1qjUMVRL",
   "keys": {
       "p256dh": "BCKktLWOu0Yd/M38jsdCiB4LZDa9e8Jx3aIS14LHYpfhmwM32cM3EUvcFwbr2V9eSb0uCnsep76EF1r3196P354=",
       "auth": "3eaYhKRGLhC6avfLeinSPg=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '411668443247',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);