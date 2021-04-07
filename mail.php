<?php
//get data from form  
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$phone= $_POST['phone'];
$email= $_POST['email'];
$questions= $_POST['questions'];
$to = "bigchiefbullies@gmail.com";
$subject = "User Form Submission from Big Chief Bullies";
$txt ="First Name: ". $first_name ."\r\n Last Name: " . $last_name . "\r\n Phone: " . $phone . "\r\n  Email: " . $email . "\r\n Questions:" . $questions;
$headers = "From: noreply@bigchiefbullies.com" . "\r\n" .
"CC: bigchiefbullies@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect

header("Location:thankyou.html"); exit();
?>