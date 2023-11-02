const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailverification");

const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 10,    // auto-Delete doc after  10 min
    }
});


async function sendVerificationEmail(email, otp) {
    try{
        const mailResponse = await mailSender(
            email,
            "Verification Email",
            emailTemplate(otp)
        );
        console.log("Email sent successfully: ", mailResponse.response);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}


// post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {

	console.log("New document saved to database");
    
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

const OTP = mongoose.model("OTP", OTPSchema);
module.exports = OTP;

