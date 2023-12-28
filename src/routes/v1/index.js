const express = require('express');

const { BookingController } = require('../../controllers/index');
 
const {publishMessage} = require('../../utils/messageQueue')

const bookingController = new BookingController();
const router = express.Router();

router.get('/info',(req,res)=>{
        res.json({message:"info from booking service"})
})
router.post('/bookings', bookingController.create);     
router.post('/publish', bookingController.sendMessageToQueue);     


module.exports = router; 