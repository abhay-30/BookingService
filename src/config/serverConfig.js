const dotenv = require('dotenv');


dotenv.config();
module.exports= {
    PORT : process.env.PORT,
    FLIGHT_SERVICE_PATH:"http://localhost:3000",
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME,
    REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY
}


