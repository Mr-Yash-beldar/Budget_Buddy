const express = require('express');
const OTP = require('../controllers/otpsender');

const router = express.Router();

// Get OTP
router.post('/otp', OTP.getOTP);

module.exports = router;