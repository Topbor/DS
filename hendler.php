<?php
$message=$_POST['mess'];
$mail=$_POST['mail'];
$name=$_POST['name'];
$email = filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL);
if (!$email) {
    header("Location: contacts-wrong.html");
}
if($email){
    mail('caffeinated@example.com', $mail, $message);
    header("Location: contacts-good.html");
}
   

