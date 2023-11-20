const otpTemplate = (otp) => {
    return `<!DOCTYPE html>
	<html>	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}

            .budgetBuddy {
                font-size: 24px;
				font-weight: bold;
				margin-bottom: 50px;
            }
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}
		</style>
	
	</head>	
	<body>
		<div class="container">
            <img src="https://8upload.com/image/65436e8380fd2/mailheader-removebg-preview.png" alt="Budget Buddy" border="0"></a>
            <div class="budgetBuddy">Budget Buddy, TEAM ARDHY</div>
			<div class="message">OTP Verification Email</div>
			<div class="body">
				<p>Dear User,</p>
				<p>Thank you for registering with <strong>Budget Buddy</strong>. To complete your registration, please use the following OTP
					(One-Time Password) to verify your account:</p>
				<h2 class="highlight">${otp}</h2>
				<p>This OTP is valid for 10 minutes. If you did not request this verification, please disregard this email.
				Once your account is verified, you will have access to Budget Buddy.</p>
			</div>
			<div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
					href="mailto:budgetbuddy.support@gmail.com">Budget Buddy</a>. We are here to help!</div>
            <img style="margin-top: 10px;" src="https://8upload.com/image/6543a0102f684/image-removebg-preview.png" alt="ARDHY" border="0" height="80" width="110">
            <p style="font-weight: 400; font-size: 10px;">Developed By Team ARDHY</p>       
		</div>
	</body>
	
	</html>`;
};

module.exports = otpTemplate;