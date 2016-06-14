<?php

$status = "nok";
$name = $_REQUEST["name"];
$email = $_REQUEST["email"];
$email_valid = isEmailValid($email);
$message = $_REQUEST["message"];

//check posted data
if (!empty($_REQUEST)) {
	if ($name && $email && $email_valid && $message) { //simple final validation
		$to      = 'jerry.yeoh1270+website_contact_form@gmail.com';
		$subject = 'New enquiry from Jerry Yeoh website';
		$headers = 'From: website_contact@jydsgn.com' . "\r\n" .
		    'Reply-To: ' . $email . "\r\n" .
		    'X-Mailer: PHP/' . phpversion();

        $body = "Name: " . $name . "\r\n";
        $body .= "Email: " . $email . "\r\n\r\n";
        $body .= nl2br($message);
        $body .= "\r\n\r\n----------------------------------------------------\r\n";
        $body .= "DATE = ".date("Y/n/j G:i:s") . "\r\n";
        $body .= "AGENT = ".$_SERVER['HTTP_USER_AGENT'] . "\r\n";

		if(mail($to, $subject, $body, $headers)) { //send email
			$status = "ok"; //everything is ok, change status
		}
	}
}

echo $status; //output status message to ajax callback

/**
* Check email is valid function
*/
function isEmailValid($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $email);
}

?>