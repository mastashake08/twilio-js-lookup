const env = require(dotenv);
env.config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.lookups.v2.phoneNumbers('+14159929960')
                 .fetch({fields: 'caller_name'})
                 .then(phone_number => console.log(phone_number.callerName));

