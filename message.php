<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if(!empty($email) && !empty($message) && !empty($name)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "klopmich4@gmail.com";
        $subject= "From: $name <$email>";
        $body= $message;

        if(mail($receiver, $subject, $body)){
            echo "Your message has been sent";
        }else{
            echo "Sorry, failed to send your message!";
        }
    }else{
        echo "Enter a valid email address";
    }
            }else{
            echo "Email and password field is required!";
        }


?>