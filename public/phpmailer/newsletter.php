<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';

$mail = new PHPMailer(true);

try {
    
    //Recipients - main edits
    $mail->setFrom('info@Paradise.com', 'Message from A.Z. Sunrise Resort');             // Email Address and Name FROM
    $mail->addAddress('info@Paradise.com', 'Jhon Doe');                            // Email Address and Name TO - Name is optional
    $mail->addReplyTo('noreply@Paradise.com', 'Message from A.Z. Sunrise Resort');       // Email Address and Name NOREPLY
    $mail->isHTML(true);                                                       
    $mail->Subject = 'Message from A.Z. Sunrise Resort';                                // Email Subject   

    // Email verification, do not edit
    function isEmail($email_newsletter ) {
        return(preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/",$email_newsletter ));
    }

    // Form fields
    $email_newsletter    = $_POST['email_newsletter'];

    if(trim($email_newsletter) == '') {
        echo '<div class="error_message">Please enter a valid email address.</div>';
        exit();
    }            

    // Setup html content
    $e_content = "$email_newsletter would like to subscribe to the newsletter.";
    
    $mail->Body = "" . $e_content . "";

    $mail->CharSet = 'UTF-8'; //Force UTF for special characters

    $mail->send();

    // Confirmation/autoreplay email send to who fill the form
    $mail->ClearAddresses();
    $mail->addAddress($_POST['email_newsletter']); // Email address entered on form
    $mail->isHTML(true);
    $mail->Subject    = 'Thank you for join to Paradise Newsletter'; // Custom subject
    $mail->Body = "" . $e_content . "";

    $mail->CharSet = 'UTF-8'; //Force UTF for special characters

    $mail->Send();

    // Succes message
    echo '<div>
           Thank you, your subscription is submitted!!
        </div>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    } 
?> 
